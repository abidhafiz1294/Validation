let verify=document.querySelectorAll('a');



function verification(e){
    
    var option=e.target.attributes.option.value;
     
    var text=prompt(`Enter Ur text for ${e.target.innerHTML}`)
    
    const email=/\S+@\S+\.\S+/;
    const postCode=/[0-9]{4}$/;
    const mobile=/^01[0-9]{9}$/;
    var result;

   

    switch(option){
    
        case '1':result=email.test(text);
        break;

        case '2':result=mobile.test(text);
        break;
        case '3':result=postCode.test(text);
        break;
            
    }
    
    
    if(result== true){
        alert(`${e.target.innerHTML} is Success`);
          
      } else{
          alert('Not Valid');
         
      }  
       
      
}


//Add Listener

verify.forEach(item=>
    {addEventListener('click',verification);})