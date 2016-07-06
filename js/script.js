console.log('you can use ES6 here');

var about = document.querySelector("a[href='#about']");
var target = document.getElementById('about');


aboutLink.addEventListener("click", function(event)){
	if (window.scrollTo) {
		event.preventDefault();
		window.scrollTo({"behavior": "smooth", "top": target.offsetTop});	
	}
	})