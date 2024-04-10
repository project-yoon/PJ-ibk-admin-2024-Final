









document.querySelectorAll("table").forEach(function(table) {
    var tbody = table.querySelector("tbody");
    if (!tbody) return; // tbody가 없는 경우 스킵
  
    var contextMenu = tbody.nextElementSibling;
  
    function showMenu(e) {
      e.preventDefault();
      contextMenu.style.top = e.pageY + "px";
      contextMenu.style.left = e.pageX + "px";
      contextMenu.style.display = "block";
    }
  
    table.addEventListener("contextmenu", showMenu);
  
    document.addEventListener("click", function(e) {
      if (!table.contains(e.target)) {
        contextMenu.style.display = "none";
      }
    });
  
    contextMenu.querySelectorAll("li a").forEach(function(item) {
      item.addEventListener("click", function(e) {
        e.preventDefault();
        // 선택된 이벤트 확인
        console.log("clicked: " + this.textContent);
        contextMenu.style.display = "none";
      });
    });
  });