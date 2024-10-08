let bar = document.querySelector(".barMe");
document.querySelector("#btn-menu").onclick = function() {
	bar.classList.toggle("barOpened");
	document.querySelector(".btnOpen").classList.toggle("d-none");
	document.querySelector(".btnClose").classList.toggle("d-none");
}

const intersections = Array.from(document.querySelectorAll(".intersection"));
const options = {
	root : null,
	rootMargin: "0px 0px -50px 0px"
};
const observerElement = new IntersectionObserver((entries) => {
	entries.forEach(el => {
		if (el.isIntersecting) {
			el.target.classList.toggle("intersecting");
			observerElement.unobserve(el.target);
		}
	});
 },options);
	intersections.forEach(e => {
 	observerElement.observe(e);
 });
 
 
 $(document).ready(function(){
  
   $("#flip").click(function(){


 
$("#panel").slideToggle(500);
 $("#panel").animate({
 left: '100px',
 opacity: '0.5',
 width: "200px",
 height: "200px",
 "border-radius": "0"
 });

 });
 
});
