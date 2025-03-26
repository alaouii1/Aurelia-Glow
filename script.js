// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Improved image loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.product-card img');
    
    images.forEach(img => {
        // Set initial opacity to 1 to prevent flickering
        img.style.opacity = '1';
        
        // Add error handling
        img.onerror = function() {
            this.src = 'placeholder.jpg'; // Fallback image if loading fails
            console.error('Image failed to load:', this.src);
        };
        
        // Add loading state
        img.onload = function() {
            this.style.opacity = '1';
        };
    });
}); 