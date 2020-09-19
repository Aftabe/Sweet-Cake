(function(){
    let name,
    outLine;
    name = prompt('Please type your name');
    if(name === '' || name === '0' || name === null || name > 0){
        window.location.reload();
    } else{
        outLine = alert('Welcome dears');
    }
}());


$(document).ready(function(){
    $(".jQuery-btn").click(function(){
      $(".jQuery-text").css("color", "green").slideUp(2000).slideDown(2000);
    });
  });



  let doc = document.getElementsByTagName('a');

doc.addEventListners('click', functionDo(e){
e.preventDefault();
})