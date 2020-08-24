(function(){
    let name,
    medium,
    outLine;
    name = prompt('What\s your name?');
    if(name === '' || name === '0' || name === null || name > 0){
        window.location.reload();
    } else if(name === 'Ali' || name === 'Haje' || name === 'Khan'){
      medium = 'Welcome dear';  
    }else{
        outLine = 'Welcome dear';
    }
}());
