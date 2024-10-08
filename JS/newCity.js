/*
$(document).ready(function(){
  
   $('#btn-menu').click(() => {
   	$(".barMe").toggleClass("barOpend")
   	$(".barMe").toggleClass("barClosed")
   })
 
});
*/

 
video = document.getElementById("vid");
function playVideo() {
	video.paused ? video.play() : video.pause();
}

video.onended = function(){
	document.querySelector(".fa-play").classList.remove("d-none");
	document.querySelector(".fa-pause").classList.add("d-none");
}
document.querySelector(".btn-play-video").addEventListener("click", function(){
		playVideo();
		document.querySelector(".fa-play").classList.toggle("d-none");
		document.querySelector(".fa-pause").classList.toggle("d-none");
	});



//Start Slider  Services

const sliderItems = document.querySelectorAll(".slider-item");

let currentSlide = 0;

function showSlide() {
  sliderItems[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % sliderItems.length;
  sliderItems[currentSlide].classList.add("active");
}

setInterval(showSlide, 3000);

const ser = document.querySelector(".slider-item");
const wind = document.querySelector(".window");
ser.style.height = wind.style.height;
// End Slider Services
/*
const swiper = new Swiper( ".swiper" , {
  // Optional parameters
  direction:  "horizontal" ,
  loop: true,

  // If we need pagination
  pagination: {
    el:  ".swiper-pagination" ,
  },

  // Navigation arrows
  navigation: {
    nextEl:  ".swiper-button-next" ,
    prevEl:  ".swiper-button-prev" ,
  },

  // And if we need scrollbar
  scrollbar: {
    el:  ".swiper-scrollbar" ,
  },
  autoplay : {
  	delay : 3000,
  },
  
  
  
  
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  
  slidesPerView: 1,
  spaceBetween: 10,
  /*
  // using "ratio" endpoints
  breakpoints: {
     '@0.75' : {
      slidesPerView: 2,
      spaceBetween: 20,
    },
     '@1.00' : {
      slidesPerView: 3,
      spaceBetween: 40,
    },
     '@1.50' : {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  
  
  */
/*  effect:  "creative" ,
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: ['100%', 0, 0],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: [ 0 , 0, '-100%'],
    },
  },
  
  */
  /*
  effect: "creative",
    creativeEffect: {
        prev: {
            translate: [ '100%' ,-200,-1000], //([horizontal, vertical, depth])
        },
        next: {
            translate: [ '-100%' ,200,-1000], //([horizontal, vertical, depth])
        },
    }
  
  
});
*/
 //Start Our Values
const numList = Array.from(document.querySelectorAll(".numList"));
const headValues = Array.from(document.querySelectorAll(".value .partShow"));
const iconValues = Array.from(document.querySelectorAll(".value .iconValue"));

let textValues = Array.from(document.querySelectorAll(" .text"));
function removeValueActive(ind) {
	for (let i = 0; i < textValues.length; i++) {
		if(i=== ind){
			textValues[i].classList.toggle("show");
		} else {
			textValues[i].classList.remove("show");
		}
	}
	for (let i = 0; i < textValues.length; i++) {
		if (textValues[i].classList.contains("show")) {
			textValues[i].style.height = textValues[i].scrollHeight + "px";
			iconValues[i].classList.add("rot");
			numList[i].classList.add("shw");
		} else {
			textValues[i].style.height =  "60px" ;
			iconValues[i].classList.remove("rot");
			numList[i].classList.remove("shw");
		}
	}
}

for (let i = 0; i < numList.length; i++) {
	numList[i].addEventListener("click" , function(){
		removeValueActive(i);
	});
}

for (let i = 0; i < headValues.length; i++) {
	headValues[i].addEventListener("click" , function(){
		removeValueActive(i);
	});
}

//End Our Values

   // Start Stats
 /*
   let stats = document.querySelector(".stats");
   let statHours = document.querySelector(".stat-hours .number");
   let statDesignes = document.querySelector(".stat-designes .number");
   let statCustomers = document.querySelector(".stat-customers .number");
   let statProjects = document.querySelector(".stat-projects .number");
   

   function plus() {
   	if(statHours.innerHTML < 24) {
    	statHours.innerHTML++;
   	}
   	if(statDesignes.innerHTML < 45) {
    	statDesignes.innerHTML++;
   	}
   	if(statCustomers.innerHTML < 20) {
    	statCustomers.innerHTML++;
   	}
   	if(statProjects.innerHTML < 100) {
    	statProjects.innerHTML++;
   	 }
 }
 const observerStats = new IntersectionObserver((entries) => {
	entries.forEach(el => {
		if(el.isIntersecting) {
			 setInterval(plus,30);
		}
	});
 });
 observerStats.observe(stats);
 */
 
let nums = document.querySelectorAll(".stats .number");
let sectionStats = document.querySelector(".stats");
let started = false;
window.onscroll = function() {
	if (window.scrollY >= (sectionStats.offsetTop + 100)) {
		if (!started) {
			nums.forEach((num) => startCount(num));
		}
		started = true;
	}
};
console.log(window.scrollY)
function startCount(el) {
	let limit = el.getAttribute("limit");
	let count = setInterval(() => {
		el.textContent++;
		if(el.textContent == limit) {
			clearInterval(count);
		}
	},50 / limit);
}

console.log(nums[0].getAttribute("limit"));