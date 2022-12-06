
let email = document.getElementById('email');
let form = document.querySelector('form');
let textEmail = document.getElementById('textEmail')
let textform = document.getElementById('textform')

form.addEventListener('submit' , (e)=>{
    if(email.value == ''){
        textEmail.textContent = 'você precisa preencher todos os campos!'

    }
    else{
        console.log(email.value);
        textEmail.textContent.changecolor('yellow') = "a tua menssagem foi enviada"
        
    }
    
    
    e.preventDefault()
})


