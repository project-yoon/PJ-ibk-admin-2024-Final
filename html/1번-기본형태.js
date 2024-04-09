// 1번-기본형태

/* table cMenu Menu *//* cp-20240400 */
$(document).ready(function(){
  var cMenu = document.getElementById("cMenu");
  var cRows = document.querySelectorAll("table tr");

  cRows.forEach(function(row) {
    row.addEventListener("cMenu", function(e) {
      e.preventDefault(); // 오른쪽 클릭 기본 이벤트 방지
      cMenu.style.display = "block";
      cMenu.style.left = e.pageX + "px";
      cMenu.style.top = e.pageY + "px";
    });

    row.addEventListener("click", function() {
      cMenu.style.display = "none";
    });
  });

  var cItems = document.querySelectorAll("#cMenu li a");
  cItems.forEach(function(item) {
    item.addEventListener("click", function(e) {
      e.preventDefault(); // 링크 클릭 시 기본 이벤트 방지
      console.log("Clicked on: " + this.textContent);
      // 여기에 각 메뉴 항목에 대한 동작을 추가하세요.
      cMenu.style.display = "none"; // 메뉴 항목을 클릭한 후에 메뉴를 숨김
    });
  });

  // 다른 곳을 클릭하면 메뉴를 숨김
  document.addEventListener("click", function() {
    cMenu.style.display = "none";
  });
});