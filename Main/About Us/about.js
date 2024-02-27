const colors = [
  "",
  "lightCyan",
  "darkSkyBlue",
  "aquamarine",
  "electricBlue",
  "darkcyan",
];

const sections = [...document.querySelectorAll("section")];

window.addEventListener("scroll", function () {
  const scrollFromTop = window.pageYOffset;

  for (let i = 0; sections.length > i; i++) {
    if (scrollFromTop <= sections[i].offsetTop) {
      document.body.className = colors[i];
      break;
    }
  }
});

var btnContainer = document.getElementById("nav");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
