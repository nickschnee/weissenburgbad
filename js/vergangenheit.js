$(document).ready(function() {

  $(".history_content_scroll").scroll(function(){
    // console.log($(".history_content_scroll").scrollTop());

    var scrollposition = $(".history_content_scroll").scrollTop();
    console.log(scrollposition);

    if (scrollposition > 4000){
      currentSlide(5);

    } else if (scrollposition > 3000){
      currentSlide(4);

    } else if (scrollposition > 2000){
      currentSlide(3);

    } else if (scrollposition > 1200){
      currentSlide(2);

    } else if (scrollposition > 500){
      currentSlide(1);
    }

  });

});

var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";

}

function home(){
  window.location.href = "index.html";
}

function showmap(){
  window.location.href = "wandern.html";

}

function verein(){
  window.location.href = "verein.html";

}
