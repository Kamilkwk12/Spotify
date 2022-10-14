// kod odpowiedzialny za wyświetlanie menu ustawień po 
// kliknięniu w przycisk w lewym górnym rogu strony
var arrowDown = document.getElementById("arrow-down");
var myDropmenu = document.getElementById("my-dropmenu");
var arrowUp = document.getElementById("arrow-up")

function menuClick() {
    myDropmenu.classList.toggle("show");
    arrowDown.classList.toggle("hide-arrow");
    arrowUp.classList.toggle("show-arrow")
}

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
    console.log(scroll);
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
timer.innerHTML = slider.value;

slider.oninput = function() {
  timer.innerHTML = slider.value;
}