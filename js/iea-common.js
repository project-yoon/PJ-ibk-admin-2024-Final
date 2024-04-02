var comm = comm || {};

comm.alert = function(val) {
	alert(val);
};

comm.ajax = function(url, data, beforeSend, global, async) {
	return $.ajax({
				method: "POST",
				url: url,
				data: data,
				dataType: "json",
				global: global = (global === undefined) ? true : global,
				async: async = (async === undefined) ? true : async,
				beforeSend: function(jqXHR, settings) {
					if (beforeSend !== undefined) {
						beforeSend();
					}
				}
			});
};

comm.removeChar = function(event) {
	event = event || window.event;
	event.target.value = event.target.value.replace(/[^0-9]/g, "");
};

comm.onlyNumber = function(event) {
	event = event || window.event;
	const keyID = (event.which) ? event.which : event.keyCode;
	if((48 <= keyID && keyID <= 57) || (96 <= keyID && keyID <= 105)
		|| keyID == 8 || keyID == 9 || keyID == 13 || keyID == 17 || keyID == 35
		|| keyID == 36 || keyID == 37 || keyID == 39 || keyID == 46 || keyID == 67 || keyID == 86) {
		return;
	} else {
		return false;
	}
		
};

comm.renderPagination = function(pagination, targetId) {
	
	if(!_.isObject(pagination)) return false;
	if(!_.isString(targetId)) return false;
	
	let paginationHtml = "";

	if (pagination.startPage == pagination.prevBlock) {
		paginationHtml += "<a href='#' onclick='javascript:return false;' class='prev disabled'><img src='/resources/img/prev_block.png' alt='' />이전</a>";
	} else {
		paginationHtml += "<a href='javascript:goPage(" + pagination.prevBlock + ")' class='prev'><img src='/resources/img/prev_block.png' alt='' />이전</a>";
	}
	
	if(1 == pagination.page) {
		paginationHtml += "<a href='#' onclick='javascript:return false;' class='prev disabled'><img src='/resources/img/prev.png' alt='' />이전</a>";
	} else {
		paginationHtml += "<a href='javascript:goPage(" + (pagination.page - 1 ) + ")' class='prev'><img src='/resources/img/prev.png' alt='' />이전</a>";
	}
	
	for (i = pagination.startPage; i < pagination.endPage + 1; i++) {

		if (i != pagination.page) {
			paginationHtml += "<a href='javascript:goPage(" + i + ")'>" + i + "</a>";
		} else {
			paginationHtml += "<a href='javascript:goPage(" + i + ")' class='on'>" + i + "</a>";
		}

	}
	
	if(pagination.totalPageCnt == pagination.page) {
		paginationHtml += "<a href='#' onclick='javascript:return false;' class='next disabled'><img src='/resources/img/next.png' alt='' />다음</a>";
	} else {
		paginationHtml += "<a href='javascript:javascript:goPage(" + (pagination.page + 1) + ")' class='next'><img src='/resources/img/next.png' alt='' />다음</a>";		
	}

	if (pagination.endPage == pagination.nextBlock) {
		paginationHtml += "<a href='#' onclick='javascript:return false;' class='next disabled'><img src='/resources/img/next_block.png' alt='' />다음</a>";
	} else {
		paginationHtml += "<a href='javascript:javascript:goPage(" + pagination.nextBlock + ")' class='next'><img src='/resources/img/next_block.png' alt='' />다음</a>";
	}
	
	$("#" + targetId).empty().append(paginationHtml);
	
};

comm.setFormFromObject = function(formId, data) {

	if(!_.isString(formId)) return false;
	if(!_.isObject(data)) return false;
	
	const $form = $("#" + formId);

	$form.find("input, textarea, select").each(function (index, element){

		const $element = $(element);
		const tag = $element.prop("tagName");
		const name = $element.prop("name");
		const type = tag === "INPUT" ? $element[0].type.toLowerCase() : tag.toLowerCase();
		
		if(data.hasOwnProperty(name)) {
			const value = data[name];

			if("select" == type) {
				$("select[name="+ name +"]").val(value);
			} else if("radio" == type) {
				$(":radio[name="+ name +"][value="+ value + "]").prop("checked", true);
			} else if("textarea" == type){
				$("textarea[name="+ name +"]").val(value);
			} else {
				$element.val(value);
			}
		}
		
	});
			
};

comm.drawSelectBox = function(groupCode, targetId){
		
	if(!groupCode) return false;
	if(!targetId) return false;
	
	const data = {
		cmcdId : groupCode
	}
	
	const beforeSend = function() {
		$("#"+targetId).empty().append($("<option></option>").attr("value", "").text("전체"));
	};
	
	const url = "/admin/common/getCodes.ajax";
	
	comm.ajax(url, data, beforeSend, null , false)
	.done(function(response){
		$.each(response.data, function(k,v) {
			$("#"+targetId).append($("<option></option>").attr("value", v.CMCD_VL).text(v.CMCD_VL_NM));
		});
		
	})
	.fail(function(e) {
		console.error(e);
	})

}

comm.downloadFileByFileKey = function(fileKey) {

	const url = "/admin/file/downloadFileByFileKey.ajax";

	const data = {
		fileKey: fileKey,
	};
	
	comm.ajax(url, data)
	.done(function(response) {
		console.log(response);
	})
	.fail(function(e) {
		// error callback
		console.log(e);
	})
	.always(function(e) {
		// finally callback
	});
}


comm.openMotpPopup = function () {

    const width = 550;
    const height = 450;

    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);


	const openWin = window.open("/admin/motp/callMotpVerify.do", "motp", "width="+width+", height="+height+", left="+popupX+", top="+popupY+", screenX="+popupX+", popupY="+popupY);
	
    
}

/* Override this Method */
comm.callMotpParentFn = function (code, message) {

	console.log("code : " + code);
	console.log("message : " + message);
	
}
