$("#switch").on("click", () => {
  if ($("body").hasClass("slow-wind")) {
    $("body").removeClass("slow-wind");
    $("#switch").removeClass("switched");
  } else {
    $("body").addClass("slow-wind");
    $("#switch").addClass("switched");
  }
});
