/*
**************************************************
	라이선스인증서 관리
	listLicsAtsh
	-----------------------------------------------
	프로젝트명 : 비대면전자약정고도화
	개발자 : leekyounghee
	개발일시 : 20221025
	퍼블 : SC-SET_030
**************************************************
*/



    /* ---------------------------------------
      초기 수행 
     --------------------------------------- */
    function fnInit(){
	    const param = urlParser();
	    console.log("urlParser ==>> ", param);
    
        // 조회 폼에 값 재설정
        comm.setFormFromObject("searchForm", param);
    };
    
    
    
    /* ---------------------------------------
      라이선스인증서 목록 조회
     --------------------------------------- */
    function fnSearch(pageNo){
        $("#searchForm").attr("action", "/admin/stup/listLicsAtsh.do");
        $("#page").val(pageNo);
        $("#searchForm").submit();
    };


    
     /* ---------------------------------------
        라이선스인증서 상세조회 화면 이동
     --------------------------------------- */
    function fnGoPageUpdate(atshFlmnNo){
        $("#nextForm").attr("action", "/admin/stup/deatilLicsAtsh.do");
        $("#atshFlmnNo").val(atshFlmnNo);
        $("#nextForm").submit();
    };

    
    
    
    
    
    
    
    
    
    
    

    /*$(function(){
        console.log("function  ==>> ", "");
    });*/

    $(document).ready(function(){
        console.log("document ready  ==>> ", "");
        
        // 초기 수행
        fnInit();
    });
    
    /*$(window).on("load", function(){
        console.log("window on load  ==>> ", "");
    });*/
    


