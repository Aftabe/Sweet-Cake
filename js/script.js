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
