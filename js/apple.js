const footer = $(".footer-links-wrapper h3");

footer.on("click", function () {
  if ($(window).width() < 768) {
    $(this).next("ul").slideToggle(600); // toggle up and down with delay of 600ms affected ul
    $(this).toggleClass("active"); // Toggle the active class for icon change
  }
});
