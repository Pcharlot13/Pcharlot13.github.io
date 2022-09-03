// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
//adadas
// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the image
}

// Randomly displays a quote on the home page
showRandomQuote();

function showRandomQuote() {
    const quotesBank = [
        `<p><q>The number one benefit of information technology is that it empowers people to do what they want to do.<br>It lets people be creative. It lets people be productive.<br>It lets people learn things they didn't think they could learn before, and so in a sense it is all about potential.</q>&ndash; Steve Ballmer</p>`,
        `<p><q>Languages evolve; ideas blend together. In computer technology, we all stand on others' shoulders.</q>&ndash; Paul Allen</p>`,
        `<p><q>Intelligence is the ability to avoid doing work, yet getting the work done.</q>&ndash; Linus Torvalds</p>`,
        `<p><q>If you love what you do and are willing to do what it takes, it's within your reach. And it'll be worth every minute you spend alone at night, thinking and thinking about what it is you want to design or build. It'll be worth it, I promise.</q>&ndash; Steve Wozniak</p>`
    ];

    const quote = quotesBank[Math.floor(Math.random() * quotesBank.length)];

    document.getElementById('home-page-quote').innerHTML = quote;
}