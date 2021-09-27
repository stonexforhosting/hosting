function addSideBarLi() {
  var ul = document.getElementById("floating-bar-ul");
  var li = document.createElement("li");
  var a = document.createElement('a');
  a.href="http://www.wp.pl";
  a.target="_blank";
  var img = document.createElement('img');
  img.src ="https://www.jsjt-apac.com/zh-cn/~/media/forex/images/global/icons/icon-OpenLiveAccount-bluewhite.svg";
  a.appendChild(img);
  li.appendChild(a);
  ul.appendChild(li);
}
var currentScript = $('script').last();
$(document).ready(() => {
        addSideBarLi();
        addSideBarLi();
  debugger;
  console.log(currentScript);
});
