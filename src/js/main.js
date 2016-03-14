//= require includes/*.js
//= require vendor/*.js
'use strict';
var o = $;
$(document).ready(function() {
  var didScroll = false;
  var didResize = false;
  var bLazy = new Blazy();  
  var header = document.querySelector(".intro");
  var video = document.querySelector("video");

  if (header) {
    
    setHeaderHeight();
    // alignContent();

    function setHeaderHeight() {
      header.style.height = verge.viewportH()+"px";
    }
  
    function pauseVideo() {
      if (verge.inViewport(video, -verge.viewportH() / 2)) {
        if (video.paused) video.play();    
      } else {
        video.pause();
      }
    }
  
    window.onscroll = function() {
      didScroll = true;
    };
    
    window.onresize = function() {
      didResize = true;
    };
  
    setInterval(function() {
      if (didScroll) {
        didScroll = false;
        // Check header position and then
        //pauseVideo();
      }
      if (didResize) {
        setHeaderHeight();
      }
    }, 1000);
  }
  
  
  o("body").addClass('loaded');
  
});