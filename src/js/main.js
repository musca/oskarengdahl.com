//= require vendor/*.js
'use strict';
var o = $;
$(document).ready(function() {
  var didScroll = false;
  var didResize = false;
  var bLazy = new Blazy();  
  var header = document.querySelector(".intro");
  var video = document.querySelector("video");
  
  var greeting = document.querySelector(".greeting"),
      now = new Date(),
      h = now.getHours();
  // Show Greeting
  if (h >= 0 && h < 4) {
    greeting.innerHTML = 'Greetings night owl,';
  } else if (h >= 4 && h < 12) {
    greeting.innerHTML = 'Good morning,';
  } else if (h >= 12 && h < 18) {
    greeting.innerHTML = 'Good afternoon,';
  } else {
    greeting.innerHTML = 'Good evening,';
  }

  if (header) {   
    setHeaderHeight();
    // alignContent();

    function setHeaderHeight() {
      header.style.height = verge.viewportH()+"px";
    }
  
    function pauseVideo() {
      if (verge.inViewport(video, - verge.viewportH() / 2)) {
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
    }, 100);
  } 
  o("body").addClass('loaded');
  document.documentElement.removeAttribute("id");
  o("a").on("click", function(e) {
    o("html").attr("id","loading");
  });
});