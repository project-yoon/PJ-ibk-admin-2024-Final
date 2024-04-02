/*
**************************************************
	라이선스인증서 상세
	deatilLicsAtsh
	-----------------------------------------------
	프로젝트명 : 비대면전자약정고도화
	개발자 : leekyounghee
	개발일시 : 20221025
	퍼블 : SC-SET_031
**************************************************
*/



    /* ---------------------------------------
      파일선택 후
     --------------------------------------- */
    function fnChangeFile(){
        var file = $("#licsFile");
        
        var flag = fnIsNull(file);
        if(!flag){
	        // 상세조회값 물리파일명(파일KEY) 삭제
	        $("#fileKey").val("");
	        
	        // 선택된 파일명 노출
	        $("#licsFileName").html(file[0].value);
        }
    };
    
    

    /* ---------------------------------------
      저장 버튼 클릭
     --------------------------------------- */
    function fnClickSave(){
        
        // 상세조회 당시 값 변경여부 체크
        // 물리파일명(파일KEY)
        var fileKey = $("#fileKey").val();
        
        // 만료일
        var expyYmdBefore = $("#expyYmdBefore").val();
        var expyYmdAfter = $("#expyYmdAfter").val();
        
        if(!fnIsNull(fileKey)  &&  expyYmdBefore === expyYmdAfter){
            alert("변경 된 항목이 없습니다.");
            return false;
            
        }else if(fnIsNull(expyYmdAfter)){
            alert("만료일을 입력해주세요.");
            return false;
            
        }else{
            var flag = confirm("선택하신 라이선스/인증서를 즉시 적용되며, 복원이 불가능합니다. 저장하시겠습니까?");
            
            // 확인 클릭
            if(flag){
            
	            // 라이선스 변경사항 저장
	            fnSave();
            
            // 취소 클릭
            }else{
                return false;
            }
        }
    };
    
    
    
    /* ---------------------------------------
      라이선스 변경사항 저장
     --------------------------------------- */
    function fnSave(){
    
        $.ajax({
            type : "POST",
            url : "/admin/stup/modifyLicsAtsh.ajax",
            data : new FormData($("#fileForm")[0]),
            enctype : 'multipart/form-data',
            processData : false,
            contentType : false,
            success : function(data, textStatus, jqXHR) {
                console.log("success result   ==>>   ", data);
                
                // 목록 화면으로 이동
                location.href = "/admin/stup/listLicsAtsh.do";
            },
            error : function(jqXHR, textStatus, errorThrown) {
                console.log("error result  1  ==>>   ", jqXHR);
                console.log("error result  2  ==>>   ", textStatus);
                console.log("error result  3  ==>>   ", errorThrown);
                
                alert("저장에 실패했습니다.");
            }
        });
        
    };
    

    
    /* ---------------------------------------
        Null Check
     --------------------------------------- */
    function fnIsNull(val){
    
        // typeof val === 'object'
	    if(val === null  ||  val === undefined){
            return true;
	    }
        
        if (typeof val === 'string'){
            val = val.trim();
            
            if(val === ''  ||  val === 'null'  ||  val === 'undefined'){
                return true;
            }
        }
        
        if (typeof val === 'number'  &&  val === 0){
            return true;
        }
        
        return false;
    };



















    $(document).ready(function(){
        console.log("document ready  ==>> ", "");
    });