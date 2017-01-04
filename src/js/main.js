//= require vendor/*.js
'use strict';
var o = $;
$(function() {
	document.documentElement.removeAttribute("id");
	
  var didScroll = false;
  var didResize = false;
	  var bLazy = new Blazy({
		success: function(ele) {
			o(ele).parent().addClass("loaded");
	  }
	});
  var header = document.querySelector(".content > header");
  var greeting = document.querySelector(".greeting"),
      now = new Date(),
      h = now.getHours();
	
  // Show Greeting
  if (h >= 0 && h < 4) {
    greeting.innerHTML = 'Greetings night owl';
		header.className = "night";
  } else if (h >= 4 && h < 12) {
    greeting.innerHTML = 'Good morning';
		header.className = "morning";
  } else if (h >= 12 && h < 18) {
    greeting.innerHTML = 'Good afternoon';
		header.className = "afternoon";
  } else {
    greeting.innerHTML = 'Good evening';
		header.className = "evening";
  }

  if (header) {     
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
        
      }
    }, 100);
  }
  o(document.body).addClass('DOM-loaded');  
  o("a").on("click", function(e) {
    document.documentElement.setAttribute("id","loading");
  });
	$(window).bind('pageshow', function(event) {
	    if (event.originalEvent.persisted) {
	        window.location.reload() 
	    }
	});
});