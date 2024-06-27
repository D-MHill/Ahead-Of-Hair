// Get all the buttons with the class 'shop'
let shopButtons = document.querySelectorAll(".shop");

// Loop through each button
shopButtons.forEach(function (button) {
	// Add a 'click' event listener to each button
	button.addEventListener("click", function () {
		// Redirect to 'list.html' 
		window.location.href = "list.html";
	});
});
