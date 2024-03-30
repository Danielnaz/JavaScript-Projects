function countdown() { // this is a countdown function that allows you to set a number/or timer to countdown in seconds
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1; // assigning a value to a variable
        timer.innerHTML = seconds; // applying the already established variable to another variable to then return that variable on screen
        var time = setTimeout(tick, 1000); // the "1000" means it pauses for 1000 milliseconds or 1 second
        if (seconds == -1) { // sets the default starting number equal to -1
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = ""; // returns the number on screen
        }
    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
