

export const contactRequest=(name, email, phone, message,callback)=>
{

    let headers = new Headers();

    headers.append('Content-Type', 'application/json'); 
    headers.append('accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://jeamshiv.epizy.com');
    headers.append('Access-Control-Allow-Credentials', 'true'); 
   
    fetch('http://jeamshiv.epizy.com/contact/contact.php?name='+name+'&email='+email+"&phone="+phone+"&message="+message, { headers })
    .then((response)=>callback(response)) 
    .catch((error)=>{console.log(error)})


}


