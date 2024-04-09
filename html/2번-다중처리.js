// 2번 다중처리

/* table context menu *//* cp-20240400 */
$(document).ready(function(){
var contextmenus = document.querySelectorAll(".contextmenu");

contextmenus.forEach(function(menu, index) {
var cTables = menu.previousElementSibling;
console.log(cTables);

cTables.addEventListener("contextmenu", function(e) {
	e.preventDefault();
	contextmenus[index].style.display = "block"; // 해당 인덱스의 컨텍스트 메뉴만 표시
	contextmenus.forEach(function(otherMenu, otherIndex) {
	if (otherIndex !== index) { // 현재 인덱스가 아닌 다른 메뉴는 숨김
		otherMenu.style.display = "none";
	}
	});
	menu.style.left = e.pageX + "px";
	menu.style.top = e.pageY + "px";
});
cTables.addEventListener("click", function() {
	menu.style.display = "none";
});
menu.querySelectorAll("li a").forEach(function(item) {
	item.addEventListener("click", function(e) {
	e.preventDefault();
	console.log("Clicked on: " + this.textContent);
	menu.style.display = "none";
	});
});
});
document.addEventListener("click", function() {
contextmenus.forEach(function(menu) {
	menu.style.display = "none";
});
});
});