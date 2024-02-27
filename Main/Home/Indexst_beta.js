function checkScreenSize() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth <= 768) {
    window.location.href = "../404/index.html";
  }
}

checkScreenSize();

window.addEventListener("resize", checkScreenSize);
