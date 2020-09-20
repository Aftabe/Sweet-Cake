(function () {
  let name;
  name = prompt('Please type your name');
  if (name === '' || name === '0' || name > 0 || name === null) {
    window.location.reload();
  }
}());



$(".jQuery-btn").click(function () {
  $(".jQuery-text").css("color", "green").slideUp(2000).slideDown(2000);
});