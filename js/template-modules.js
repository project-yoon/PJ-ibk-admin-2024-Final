/*
    IBK 신전자문서 시스템 관리자

    template.js
*/

// 23.01.13 공통 부분 불러옴
// Header include 함수
function headerInclude() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var headerInclude = document.querySelector('.header_include');
        headerInclude.innerHTML = xhr.responseText;

        // 알림 notice btn
        var noticeBtn = document.querySelector('.notice .notice_btn');
        var noticeCont = document.querySelector('.notice .notice_cont');

        noticeBtn.addEventListener('click', function(){
          noticeCont.style.display = noticeCont.style.display === 'none' ? 'block' : 'none';
        });

        // 알림창 외 영역 클릭 시 닫기
        document.addEventListener('click', function(e){
          if (!e.target.closest('.notice')) {
            noticeCont.style.display = 'none';
          }
        });
      } else {
        console.error('Error: ' + xhr.status);
      }
    }
  };
  xhr.open('GET', 'header_include.html', true);
  xhr.send();
}

// Navigation include 함수
function navInclude() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var navInclude = document.querySelector('.nav_include');
        navInclude.innerHTML = xhr.responseText;

        // 이 부분을 수정하여 .gnb ul.sub 요소에 접근하는 코드를 추가
        var GnbSub = document.querySelector(".gnb ul.sub");
        var menuBg = document.querySelector(".gnb .menu_bg");

        GnbSub.style.display = 'none';
        menuBg.style.display = 'none';

        // lnbMain hover
        var lnbMain = document.querySelectorAll(".gnb > ul > li");
        lnbMain.forEach(function(item) {
          item.addEventListener('mouseenter', function(){
            GnbSub.style.display = 'block';
            menuBg.style.display = 'block';
          });
          item.addEventListener('mouseleave', function(){
            GnbSub.style.display = 'none';
            menuBg.style.display = 'none';
          });
        });
      } else {
        console.error('Error: ' + xhr.status);
      }
    }
  };
  xhr.open('GET', 'nav_include.html', true);
  xhr.send();
}

// Document ready 함수
document.addEventListener('DOMContentLoaded', function () {
  // Header include 함수 호출
  headerInclude();

  // Navigation include 함수 호출
  navInclude();

  // GNB 설정
  var lnbMain = document.querySelectorAll(".gnb > ul > li");
  var GnbSub = document.querySelector(".gnb ul.sub");
  var menuBg = document.querySelector(".gnb .menu_bg");

  GnbSub.style.display = 'none';
  menuBg.style.display = 'none';

  // lnbMain hover
  lnbMain.forEach(function(item) {
    item.addEventListener('mouseenter', function(){
      GnbSub.style.display = 'block';
      menuBg.style.display = 'block';
    });
    item.addEventListener('mouseleave', function(){
      GnbSub.style.display = 'none';
      menuBg.style.display = 'none';
    });
  });

  // 라디오 가이드
  var radioBtn = document.querySelectorAll('input[type="radio"]');
  var radioGuide = document.querySelector('.radio_guide');

  radioBtn.forEach(function(item) {
    item.addEventListener('change', function(){
      if (document.querySelector('input:radio[class=guide]').checked) {
        radioGuide.style.display = 'block';
      } else {
        radioGuide.style.display = 'none';
      }
    });
  });
});

/* datepicker */
$(function(){
	$('.select_date').datepicker({
		//showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
		//showOn: "button",
		buttonImage:false, // 버튼 이미지
		buttonImageOnly: false, // 버튼에 있는 이미지만 표시한다.
		dateFormat: 'yy-mm',
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
	$('.select_date_day').datepicker({
		//showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
		//showOn: "button",
		buttonImage:false, // 버튼 이미지
		buttonImageOnly: false, // 버튼에 있는 이미지만 표시한다.
		dateFormat: 'yy-mm-dd',
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
$(document).ready(function(){
  $('input.select_time').timepicker({
    timeFormat: 'h:mm p',
    interval: 30,
    // minTime: '10',
    // maxTime: '6:00pm',
    // defaultTime: '00',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });
});

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

/* accordion, accordion FAQ */
$(document).ready(function(){
  const acrdItem = $('.accordion .item, .accordion_body .item'),
    acrdCont = $('.accordion .cnt, .accordion_body .cnt'),
    acrdBtnImg = $('.accordion img, .accordion_body img');
    
  acrdCont.hide();
  // acrdCont.first().show(); /* 'default : 닫혀있음'으로 변경, cp-20240400 */
  $('.accordion_body .cnt').hide();

  acrdItem.click(function(){
    // $(this).next('.cnt').stop().slideDown(300);
    $(this).next('.cnt').stop().slideToggle(1);
    // $(this).parent('li').siblings("li").children(".cnt").slideUp(300);
    
    // 23.01.19 아코디언 이미지 변경
    $(this).find(acrdBtnImg).attr("src", function(index, attr){
      if(attr.match('_on')){
        return attr.replace("_on.png","_off.png");
      }else{
        return attr.replace("_off.png","_on.png");
      }
    });
  });

  // 23.01.12 랜딩 화면 accordion 자동 높이 조절
  const lndngCardNbr = $('.lndng_card > div').length,
    lndngAcrd = $('.lndng_work_flow .accordion'),
    lndngAcrdHght = $('.lndng_work_flow .accordion').outerHeight(),
    acrdHeight = lndngAcrdHght + (lndngCardNbr - 1) * 162;

  if (lndngCardNbr >= 2) {
    lndngAcrd.css("height",acrdHeight)
  }
});

$(document).ready(function(){
  /* randing notice popup(js) *//* cp-20240400 */
  var ntTble = document.getElementById("lndng_notice");
  var ntItems = ntTble ? ntTble.getElementsByTagName("tr") : [];
  for (var i = 1; i < ntItems.length; i++) { // 헤더 제외
    ntItems[i].addEventListener("click", function() {
      var popPath = this.getAttribute("data-popup");
      window.open(popPath,'','width=700,height=635,scrollbars=yes,resizable=yes'); return false;
    });
  }
});

$(document).ready(function(){
  /* table all check(js) *//* cp-20240400 */
  /*
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
  */
  ALLCHK();
});
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

function TABS(){
  $('.cont_tab li a').click(function(){
    var tab_id = $(this).attr('data-tab');  
    $('.cont_tab li a').removeClass('active');
    $('.tab-content').removeClass('active');  
    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  });
}
  /* table context menu(js) *//* cp-20240400 */
  $(document).ready(function(){
    var contextMenus = document.querySelectorAll(".contextmenu");
    contextMenus.forEach(function(menu,index) {
      var table = menu.previousElementSibling;
      function showMenu(e) {
        e.preventDefault();
        contextMenus.forEach(function(otherMenu, otherIndex) {
          otherMenu.style.display=otherIndex===index?"block":"none";
        });
        menu.style.top=e.pageY+"px";
        menu.style.left=e.pageX+"px";
      }
      table.addEventListener("contextmenu", showMenu);
      table.addEventListener("click", function() {
        menu.style.display="none";
      });
      menu.querySelectorAll("li a").forEach(function(item) {
        item.addEventListener("click", function(e) {
          e.preventDefault();
          // 선택된 이벤트 확인 
          console.log("clicked: "+this.textContent);
          menu.style.display="none";
        });
      });
    });
    document.addEventListener("click", function() {
      contextMenus.forEach(function(menu) {
        menu.style.display="none";
      });
    });
  });