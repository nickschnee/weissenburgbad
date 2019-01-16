function condition_swap(){
  document.getElementsByClassName('active1').display = 'block';
  document.getElementsByClassName('inactive1').display = 'none';
  console.log("worked");
};

function updatemember(type){
  $(".member-weiss").removeClass("hidden");
  $(".member-blau").addClass("hidden");

  if (type == 1){
    $("#member-einzeln-weiss").addClass("hidden");
    $("#member-einzeln-blau").removeClass("hidden");
    $("#tarif").html("30 CHF")

  } else if (type == 2){
    $("#member-ehepaar-weiss").addClass("hidden");
    $("#member-ehepaar-blau").removeClass("hidden");
    $("#tarif").html("40 CHF")

  }else if (type == 3){
    $("#member-jurist-weiss").addClass("hidden");
    $("#member-jurist-blau").removeClass("hidden");
    $("#tarif").html("70 CHF")

  }else if (type == 4){
    $("#member-goenner-weiss").addClass("hidden");
    $("#member-goenner-blau").removeClass("hidden");
    $("#tarif").html("50 CHF")

  }

};

function home(){
  window.location.href = "index.html";
}

function showmap(){
  window.location.href = "wandern.html";

}

function learnmore(){
  window.location.href = "vergangenheit.html";
}
