function carregar() {

}

function btnLogin() {
    var email = document.querySelector('#email')
    var senha = document.querySelector('#senha')
    var pzinho = document.querySelector('#pzinho')

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"email":"${email.value}","senha":"${senha.value}"}`
    };

    fetch('http://localhost:3000/usuarioLogin', options)
        .then(response => response.status)
        .then(response => {
            if (response == 201) {
                window.location.href = "../home/index.html"
            } if(email != undefined && senha != undefined){
                pzinho.innerHTML="Dados incorretos digite novamente!"
            }
        })
    
}