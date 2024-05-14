// JavaScript code to create an alert when the page loads
window.onload = function() {
    alert("Welcome to Mary Rose's Portfolio Website!");
};

// JavaScript code for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
