// kod odpowiedzialny za wyświetlanie menu ustawień po 
// kliknięniu w przycisk w prawym górnym rogu strony
var arrowDown = document.getElementById("arrow-down");
var myDropmenu = document.getElementById("my-dropmenu");
var arrowUp = document.getElementById("arrow-up")

function menuClick() {
  myDropmenu.classList.toggle("show");
  arrowDown.classList.toggle("hide-arrow");
  arrowUp.classList.toggle("show-arrow")
}


//zamykanie menu ustawień przy kliknięciu poza niego
window.onclick = function(event) {
  if (!event.target.matches('.settings-btn, .drake, .arrow-down, .text')) {
    var dropdowns = document.getElementsByClassName("dropmenu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        arrowUp.classList.toggle('show-arrow');
        arrowDown.classList.toggle('hide-arrow');
      }
    }
  }
}


// kod odpowiedzialny za zmianę koloru headera przy przewijaniu strony
var header = document.getElementById("header-div");

function whereIsSiteOnScroll() {
  var scroll = document.documentElement.scrollTop;
  return scroll;
}

window.onscroll = function() {
  if (whereIsSiteOnScroll() > 100) {
    header.classList.add("header-background")
  }
  else {
    header.classList.remove("header-background")
  }
}

//kod odpowiedzialny za timer przy player-sliderze
var timer = document.getElementById("timer");
var slider = document.getElementById("play-slider");
var minutes;
var seconds;

slider.oninput = function() {
  var minutesValue = slider.value/60000;
  var secondsValue = slider.value/1000;
  minutes = Math.floor(minutesValue);
  seconds = Math.floor(secondsValue);
  if(seconds>59){
     var sliderValue = slider.value - 60000;
     secondsValue = sliderValue/1000;
     seconds = Math.floor(secondsValue);
     if(seconds>59){
       var sliderValue2 = slider.value - 120000;
       secondsValue = sliderValue2/1000;
       seconds = Math.floor(secondsValue);
     }
       if(seconds>59){
         var sliderValue3 = slider.value - 180000;
         secondsValue = sliderValue3/1000;
         seconds = Math.floor(secondsValue);
       }
   }
   timer.innerHTML = minutes + "." + seconds
}


var button = document.getElementById("playbtn");
var img = document.getElementById("playerbtn1");

button.onclick = function() {
  img.classList.toggle("play");
  img.classList.toggle("pause");
}
