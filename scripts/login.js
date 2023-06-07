function logar() {

    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

    if(login == "Admin" && senha == "123456"){
        alert('Logado com sucesso!')
        location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021"
    }else{
        alert('Credenciais incorretas')
    }
}