// ==UserScript==
// @name     Fix Youtube Layout
// @version  1
// @grant    none
// @include      https://www.youtube.com
// @include      https://www.youtube.com/*
// @run-at       document-start
// @noframes
// ==/UserScript==

(function(){

  //for correcting on navigation to a new video
  window.addEventListener("spfdone", function(e){
    if(!document.getElementById("content").classList.contains('content-alignment')){
        document.getElementById('content').classList.add('content-alignment');
    }
  });

  //for when you load a video directly
  window.addEventListener("load", function(event) {
    if(!document.getElementById("content").classList.contains('content-alignment')){
      document.getElementById('content').classList.add('content-alignment');
    }
  });

})();