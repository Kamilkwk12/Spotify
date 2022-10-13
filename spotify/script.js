function menuClick() {
    document.getElementById("my-dropmenu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.settings-btn, .drake, .arrow, .text')) {
    var dropdowns = document.getElementsByClassName("dropmenu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

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