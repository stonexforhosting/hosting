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

function parseQuery ( query ) {
   var Params = new Object ();
   if ( ! query ) return Params; // return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) continue;
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

var scripts = document.getElementsByTagName('script');
$(document).ready(() => {
 
  //var myScript = scripts[ scripts.length - 1 ];
  var myScript = document.getElementsById('floating-bar-external-js');
  var queryString = myScript.src.replace(/^[^\?]+\??/,'');

  var params = parseQuery( queryString );
  
  addSideBarLi();
  addSideBarLi();
  debugger;
  console.log(params);
});


