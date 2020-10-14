(function () {
  let name;
  name = prompt('Please type your name');
  if (name === '' || name === '0' || name.length < 3|| name > 0 || name === null) {
    window.location.reload();
    alert('Please type your name');
  }
}());
