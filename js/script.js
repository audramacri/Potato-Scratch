/*
Made some edits to this section of JS code from 6/5
class, but Caniuse.com shows the scroll-behavior rule
in CSS as only being supported in FF at the moment.
*/
var about = document.querySelector("a[href='#about']");
var target = document.getElementById('about');

aboutLink.addEventListener("click", function(event) {
	if (window.scrollTo) {
		event.preventDefault();
		window.scrollTo({"behavior": "smooth", "top": target.offsetTop});
	}
});

// Another attempt at smooth-scrolling Nav items in JS

// About menu item smooth scroll
function aboutScroll () {
	var aboutNavScroll = document.getElementById('about');
	aboutNavScroll.scrollTop = 50;
};
