









/* table context menu *//* cp-20240400 */
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
        // 선택된 이벤트 확인 console.log("clicked: "+this.textContent);
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