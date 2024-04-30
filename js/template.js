/*
    IBK 신전자문서 시스템 관리자

    template.js
*/

// 23.01.13 공통 부분 불러옴
$(document).ready(function(){
  $('.heder_include').load('heder_include.html', function(){
    /* 알림 notice btn */
    const noticeBtn = $('.notice .notice_btn'),
      noticeCont = $('.notice .notice_cont');

    noticeBtn.click(function(){
      noticeCont.toggle();    
    });

    // 22.12.09 알림 외 영역 클릭 시 알림창 닫음
    $('html').click(function(e){
      if($(e.target).parents('.notice').length < 1 ){
        // console.log($(e.target).parents('.notice').length, '팝업 외')
        noticeCont.hide();
      };
    });
  });

  $('.nav_include').load('nav_include.html', function(){
    const lnbMain = $(".gnb > ul > li"),
      GnbSub = $(".gnb ul.sub"),
      menuBg = $(".gnb .menu_bg");

    GnbSub.hide();
    menuBg.hide();
    
    /* lnbMain hover */
    lnbMain.mouseenter(function(){
      GnbSub.show();
      menuBg.show();
    });
    lnbMain.mouseleave(function(){
      GnbSub.hide();
      menuBg.hide();
    });
  });
});

$(document).ready(function () {
  /* gnb */
  const lnbMain = $(".gnb > ul > li"),
    GnbSub = $(".gnb ul.sub"),
    menuBg = $(".gnb .menu_bg");

  GnbSub.hide();
  menuBg.hide();
  
  /* lnbMain hover */
  lnbMain.mouseenter(function(){
    GnbSub.show();
    menuBg.show();
  });
  lnbMain.mouseleave(function(){
    GnbSub.hide();
    menuBg.hide();
  });

  /* radio guide */
  const radioBtn = $('input[type="radio"]'),
    radioGuide = $('.radio_guide');

  $(radioBtn).change(function(){
    if ($('input:radio[class=guide]').is(':checked')) {
      $(radioGuide).show();
    } else {
      $(radioGuide).hide();
    }
  });

});

/* datepicker */
$(function(){
	$('.select_date').datepicker({
		// showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
		showOn: "button",
		buttonImage:false, // 버튼 이미지
		buttonImageOnly: false, // 버튼에 있는 이미지만 표시한다.
		// dateFormat: 'yy-mm',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['(일)','(월)','(화)','(수)','(목)','(금)','(토)'],
		// dayNamesShort: ['일','월','화','수','목','금','토'],
		// dayNamesMin: ['일','월','화','수','목','금','토'],
		showMonthAfterYear: true,
		changeMonth : false,
		changeYear : false,
    yearRange: 'c-2:c+2',
    dateFormat: 'yy-mm',
    minViewMode: 'months',
    dateFormat: 'yy-mm', // 월별로 선택하도록 설정
    minViewMode: 'months', // 최소 보기 모드를 월로 설정
		yearSuffix: '년',
		buttonText: "달력보기",
		maxDate: new Date(),
	});
	$('.select_date_day').datepicker({
		//showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
		//showOn: "button",
		buttonImage:false, // 버튼 이미지
		buttonImageOnly: false, // 버튼에 있는 이미지만 표시한다.
		dateFormat: 'yy-mm-dd',
    minViewMode: 'days',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['(일)','(월)','(화)','(수)','(목)','(금)','(토)'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		showMonthAfterYear: true,
		changeMonth : true,
		changeYear : true,
		yearSuffix: '년',
		buttonText: "달력보기",
		maxDate: new Date(),
	});
	$('input.select_date').click(function(){
		$(this).datepicker('show');
	});
});

/* timepicker */

// $(document).ready(function(){
//   $('input.select_time').timepicker({
//     timeFormat: 'h:mm p',
//     interval: 30,
//     // minTime: '10',
//     // maxTime: '6:00pm',
//     // defaultTime: '00',
//     startTime: '10:00',
//     dynamic: false,
//     dropdown: true,
//     scrollbar: true
//   });
// });

/* SC-SET_033 그룹코드일람 배경색 변경 */
$(document).ready(function(){
  const th = $('.colgroup tr.tr_case > th'),
    td = $('.colgroup tr.tr_case > td');

  th.hover(function(){
    $(this).next().css('background-color','#E1F5FE');
  },function(){
    $(this).next().css('background-color','#ffffff');
  });

  td.hover(function(){
    $(this).css('background-color','#E1F5FE');
  },function(){
    $(this).css('background-color','#ffffff');
  });
});

/* 알림 notice btn */
$(document).ready(function(){
  const noticeBtn = $('.notice .notice_btn'),
    noticeCont = $('.notice .notice_cont');
  noticeBtn.click(function(){
    noticeCont.toggle();
  });

  // 22.12.09 알림 외 영역 클릭 시 알림창 닫음
  $('html').click(function(e){
    if($(e.target).parents('.notice').length < 1 ){
      // console.log($(e.target).parents('.notice').length, '팝업 외')
      noticeCont.hide();
    };
  });
});

/* accordion, accordion FAQ *//* cp-20240400 */
function ACRD() {
  $('.accordion .cnt').hide();
  $('.accordion .item').on("click", function() {
    var $nextCnt = $(this).next('.cnt');
    $nextCnt.stop().slideToggle(1);
    // 상태 아이콘 변경
    var $img = $(this).find('img');
    var src = $img.attr("src");
    src = src.includes('_on') ? src.replace("_on.png", "_off.png") : src.replace("_off.png", "_on.png");
    $img.attr("src", src);
  });
  // 랜딩 화면일 경우, accordion 자동 높이 조절
  var lndngCardNbr = $('.lndng_card > div').length;
  var lndngAcrd = $('.lndng_work_flow .accordion');
  var lndngAcrdHght = $('.lndng_work_flow .accordion').outerHeight();
  var acrdHeight = lndngAcrdHght + (lndngCardNbr - 1) * 162;
  if (lndngCardNbr >= 2) {lndngAcrd.css("height", acrdHeight)}
}

/* randing notice popup(js) *//* cp-20240400 */
function openPopup(path) {
  window.open(path, '', 'width=700,height=635,scrollbars=yes,resizable=yes');
  return false;
}
function handleNoticePopup() {
  var ntTble = document.getElementById("lndng_notice");
  var ntItems = ntTble ? ntTble.getElementsByTagName("tr") : [];
  for (var i = 1; i < ntItems.length; i++) {
    ntItems[i].addEventListener("click", function() {
      var popPath = this.getAttribute("data-popup");
      openPopup(popPath);
    });
  }
}
// 페이지 로드 후 처리
document.addEventListener("DOMContentLoaded", function() {
  handleNoticePopup();
});

/* TABS *//* cp-20240400 */
function TABS(link){
  var tab_id = $(link).attr('data-tab');  
  $('.cont_tab li a').removeClass('active');
  $('.tab-content').removeClass('active');  
  $(link).addClass('active');
  $("#"+tab_id).addClass('active');
}

/* ALLCHK *//* cp-20240400 */
function ALLCHK(){
  const chkTbls = document.querySelectorAll('table[data-check="check-group"]');
  chkTbls.forEach(chkGroups => {
    const chkAll = chkGroups.querySelector('label[data-check="check-all"] input[type="checkbox"]');
    const chkTbds = chkGroups.querySelectorAll('tbody input[type="checkbox"]');
    chkAll.addEventListener('change', function() {
        chkTbds.forEach(chkItems => {
          chkItems.checked = chkAll.checked;
        });
    });
    chkTbds.forEach(chkItems => {
      chkItems.addEventListener('change', function() {
            chkAll.checked = [...chkTbds].every(chkItems => chkItems.checked);
        });
    });
  });
}

/* FILEdisplay *//* cp-20240400 */
function FILEdisplay(event) {
  const fileInput = event.target;
  const file = fileInput.files[0];
  
  if (file) {
    const fileNameplate = document.createElement('span');
    fileNameplate.className = 'file_name';
    fileNameplate.textContent = file.name;
    
    const fileLabel = fileInput.previousElementSibling;
    fileLabel.parentNode.insertBefore(fileNameplate, fileLabel.nextSibling);

    const fileRemove = document.createElement('button');
    fileRemove.className = 'remove_file';
    fileRemove.textContent = '파일 지우기';
    fileRemove.onclick = () => FILEremove(fileRemove);
    
    fileNameplate.parentNode.insertBefore(fileRemove, fileNameplate.nextSibling);
  }
}
function FILEremove(button) {
  var filename = button.previousElementSibling;
  if (filename && filename.classList.contains('file_name')) {
    filename.remove();
    button.remove();
  // } else {
  //   console.error("이전 형제 'file_name' 없음");
  }
}
