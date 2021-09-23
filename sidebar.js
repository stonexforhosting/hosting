function addSideBarLi() {
  var ul = document.getElementById("floating-bar-ul");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Four"));
  ul.appendChild(li);
}

$(document).ready(() => {
        addSideBarLi();
});
