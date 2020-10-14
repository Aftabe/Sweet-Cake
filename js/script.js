(function () {
  let name;
  name = prompt('Please type your name');
  if (name === '' || name === '0' || name > 0 || name === null) {
    window.location.reload();
    alert('Please type your name');
  }
}());
