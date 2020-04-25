const oddLinks = document.querySelectorAll('#navbar li:nth-child(odd)');
console.log(oddLinks);

oddLinks.forEach(function(odd) {
    odd.style.backgroundColor = 'red';
    odd.style.color  = 'white';
});