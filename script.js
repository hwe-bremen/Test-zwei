
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
     rect.top >= 0 &&
     rect.left >= 0 &&
     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
   }
   
   var elements = document.querySelectorAll(".slidehorizont");

    
   function callbackFunc() {
    for (var i = 0; i < elements.length; i++) {
     if (isElementInViewport(elements[i])) {
    elements[i].classList.add("visible");
   } 
     
   
    /* Else-Bedinung entfernen, um .visible nicht wieder zu löschen, wenn das Element den Viewport verlässt. 
     else { 
      elements[i].classList.remove("visible");
     }*/
    }
   }
    
   window.addEventListener("load", callbackFunc);
   window.addEventListener("scroll", callbackFunc); 
   

 
	function elementSichtbar() {   
    var boxVier = document.getElementById("box4"); 
    boxVier.classList.toggle("sichtbar");
    }
   function elementSichtbar2() { 
	var buttonClick = document.getElementById("button-click"); 
    buttonClick.classList.toggle("buttonstylehover");
     }
	
	var buttonzwei = document.getElementById('button-click')
 	buttonzwei.addEventListener('click', elementSichtbar);
 	buttonzwei.addEventListener('click', elementSichtbar2);
    
     
     

   /*  document.getElementById('nav-click').addEventListener('click', elementSichtbarNav);
     function elementSichtbarNav() {   
     var navMin = document.getElementById("nav");  
     navMin.classList.toggle("sichtbar-nav");
       }*/

	var elemIsVisible = document.querySelector(".box1").offsetHeight;
	window.onscroll = function () {
   	if (elemIsVisible > 0) {
      document.querySelector(".box1a").classList.add("slideright");
       document.querySelector(".box1ab").classList.add("slideright");
         document.querySelector(".box1ac").classList.add("slideright");
   }
   window.onscroll = null;
	}

