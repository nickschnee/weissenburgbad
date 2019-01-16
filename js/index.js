$(document).ready(function() {

  if (localStorage.getItem("currentpage") === null) {
    //do nothing

  } else {
    console.log("Currentpage in Localstorage: " + localStorage.getItem('currentpage'));
    currentSlide(localStorage.getItem('currentpage'));
  }

});


/* IMAGE SLIDER */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  updatemap(n);

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
  dots[slideIndex-1].className += " active";

  console.log(n);
  updatemap(n);

}

function condition_swap(){
  var inactive = document.getElementsByClassName("active");
  var active = document.getElementsByClassName("inactive");
  console.log("worked")
}

function updatemap(n){
  // Make all blue invisible
  $(".pin-blau").addClass("hidden");

  // Make all white visible
  $(".pin-weiss").removeClass("hidden");

  if (n == 1){
    $("#pin-bahnhof-weiss").addClass("hidden");
    $("#pin-bahnhof-blau").removeClass("hidden");

  } else if (n == 2){
    $("#pin-brunnen-weiss").addClass("hidden");
    $("#pin-brunnen-blau").removeClass("hidden");
  } else if (n == 3){
    $("#pin-turbine-weiss").addClass("hidden");
    $("#pin-turbine-blau").removeClass("hidden");

  } else if (n == 4){
    $("#pin-vorderesbad-weiss").addClass("hidden");
    $("#pin-vorderesbad-blau").removeClass("hidden");

  } else if (n == 5){
    $("#pin-hinteresbad-weiss").addClass("hidden");
    $("#pin-hinteresbad-blau").removeClass("hidden");

  }else if (n == 6){
    $("#pin-teufelsbruecke-weiss").addClass("hidden");
    $("#pin-teufelsbruecke-blau").removeClass("hidden");

  }else if (n == 7){
    $("#pin-bruecke-weiss").addClass("hidden");
    $("#pin-bruecke-blau").removeClass("hidden");

  }else if (n == 8){
    $(".strecke").addClass("hidden");

    $("#pin-wandern-leicht-weiss").addClass("hidden");
    $("#pin-wandern-leicht-blau").removeClass("hidden");

    $("#pin-wandern-strecke-leicht").removeClass("hidden");

  }else if (n == 9){
    $(".strecke").addClass("hidden");

    $("#pin-wandern-mittel-weiss").addClass("hidden");
    $("#pin-wandern-mittel-blau").removeClass("hidden");

    $("#pin-wandern-strecke-mittel").removeClass("hidden");


  }else if (n == 10){
    $(".strecke").addClass("hidden");

    $("#pin-wandern-schwer-weiss").addClass("hidden");
    $("#pin-wandern-schwer-blau").removeClass("hidden");

    $("#pin-wandern-strecke-schwer").removeClass("hidden");

  }
}

function timewarp(n){
  console.log(n);

  if(window.location.href.indexOf("wandern") > -1) {
    localStorage.setItem('currentpage', n);

    window.location.href = "geschichte.html";

  } else {
    localStorage.setItem('currentpage', n);
    window.location.href = "wandern.html";
    var currentpage = localStorage[n];
  }

}

function home(){
  window.location.href = "index.html";
}

function learnmore(){
  window.location.href = "vergangenheit.html";
}

function showmap(){
  window.location.href = "wandern.html";

}

function verein(){
  window.location.href = "verein.html";

}
