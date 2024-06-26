
    // Add event listeners to all buttons with class 'shop'
    document.querySelectorAll('.shop').forEach(button => {
      button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        // Redirect to list.html with the selected category as a URL parameter
        window.location.href = `list.html?category=${category}`;
      });
    });
  
