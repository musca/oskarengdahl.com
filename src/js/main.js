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
    
    function alignContent() {
      var headerContent = document.querySelector(".header-content");
      var margin = headerContent.offsetHeight / 2;
      headerContent.style.marginTop = "-"+margin+"px";
    }
    
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
        pauseVideo();
      }
      if (didResize) {
        setHeaderHeight();
      }
    }, 1000);
  }
  
  document.getElementById("content").addEventListener('complete', function(event){
   var grid = document.getElementById('grid');
   salvattore.recreateColumns(grid);
   setTimeout(bLazy.revalidate, 50);
   getData()
  }, false);
  
  o("body").addClass('loaded');
  
  // Open side menu
  $(".open-side-menu, .close-side-menu").click(function(event) {
    event.preventDefault();
    $("body").toggleClass("side-menu-showing");
    $(".overlay-holder").toggleClass("overlay");
  });
  
  // Close side menu and overlay 
  $(".overlay-holder").click(function() {
    closeOverlay();
  });
  
  function closeOverlay() {
    $(".overlay-holder, .side-menu, body")
    .removeClass("overlay side-menu-showing");
  }
  
  function isRoot() {
      return location.pathname == "/";
  }
  
  (function () {

  })();
});