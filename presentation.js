document.addEventListener('DOMContentLoaded', function() {
    let slideImage = document.getElementById('slideImage');
    let backButton = document.getElementById('backButton');
    let nextButton = document.getElementById('nextButton');
    let imageUrls = [
        'slide1.jpg',
        'slide2.jpg',
        'slide3.jpg',
        'slide4.jpg',     
        'slide5.jpg',      
        'slide6.jpg',
    ];
    let currentIndex = 0;
  
    backButton.addEventListener('click', function() {
        if (currentIndex === 0) {
            currentIndex = imageUrls.length - 1;
        } else {
            currentIndex = currentIndex - 1;
        }
        slideImage.src = imageUrls[currentIndex];
    });
  
    nextButton.addEventListener('click', function() {
        if (currentIndex === imageUrls.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex = currentIndex + 1;
        }
        slideImage.src = imageUrls[currentIndex];
    });
});
