//CALCULAR MÉDIA

const nota1 = document.querySelector("#nota1")
const nota2 = document.querySelector("#nota2")
const botao = document.querySelector("#botaozim")


function calcular_media(nota1, nota2){
    if(media >= 7){
     alert("Aprovado")
    }else{
     alert("Reprovado")
}

}


botao.addEventListener("click", () => console.log(nota1.value))
botao.addEventListener("click", () => console.log(nota2.value))
botao.addEventListener("click", () => {
    const media = (Number(nota1.value) + Number(nota2.value)) / 2
    if(media >= 7){
        alert(`Aprovado com a média ${media.toFixed(1)}`)
    }else{
        alert(`Reprovado com a média ${media.toFixed(1)}`)
    }
})













// DADO A LISTA DE USUÁRIOS
// [
// ["Joao", "joao@email.com", "123456"],
// ["Maria", "maria25@email.com", "deusefiel"],
// ["Ana", "anaJulia@email.com", "456789"],
// ["pedro", "ped@email.com", "pedrimDaTuf"],
// ["AbeL", "abel.jr@email.com", "10081995"],
// ["Amanda", "amandKaroline@email.com", "1ate8"],
// ],
// FAÇA UM PROGRAMA QUE PEDE PARA O USUÁRI DIGITAR UM EMAIL E UMA SENHA.
// FAÇA UMA FUNÇÃO QUE RECEBE ESSE EMAIL E ESSA SENHA E VERIFICA SE É UM LOGIN VÁLIDA E EXIBA UMA MENSAGEM INFORMANDO SE O USUÁRIO CONSEGUIU OU NÃO ENTRAR NO SISTEMA (PARA TER UM LOGIN VÁLIDO ELE TEM QUE TER O EMAIL E A SENHA CADASTRADOS NA LISTA)



// const lista_de_usuarios = [
//     ["Joao", "joao@email.com", "123456"],
//     ["Maria", "maria25@email.com", "deusefiel"],
//     ["Ana", "anaJulia@email.com", "456789"],
//     ["pedro", "ped@email.com", "pedrimDaTuf"],
//     ["AbeL", "abel.jr@email.com", "10081995"],
//     ["Amanda", "amandKaroline@email.com", "1ate8"],
// ]


// function conferirUsuario(email_recebido, senha_recebida){
//     let usuario_valido = false
//     for(let usuario_da_vez of lista_de_usuarios){
//         if(usuario_da_vez[1] === email_recebido && usuario_da_vez[2] === senha_recebida){
//             alert("Foi sal")
//             usuario_valido = true
//         }
//     }
//     if(usuario_valido === false){
//         alert("Deu ruim, email ou senha errados")
//     }
// }

// const email_digitado = prompt("Digite seu e-mail: ")
// const senha_digitada = prompt("Digite sua senha: ")

// conferirUsuario(email_digitado, senha_digitada)






// const titulo_principal = document.getElementsByTagName("h1")
// const subitulo = document.getElementById("subtitulo")
// const minhas_opcoes = document.getElementsByClassName("texto")
// const todos_os_p = document.getElementsByTagName("p")

// console.log(titulo_principal)
// console.log(subitulo)
// console.log(minhas_opcoes)
// console.log(todos_os_p)




// const titulo_principal = document.querySelector("h1")
// const subitulo = document.querySelector("#subtitulo")
// const minhas_opcoes = document.querySelectorAll(".texto")
// const primeiro_P = document.querySelector("p")
// const todos_os_p = document.querySelectorAll("p")

// console.log(titulo_principal)
// console.log(subitulo)
// console.log(minhas_opcoes)
// console.log(primeiro_P)
// console.log(todos_os_p)




// const subitulo = document.querySelector("#subtitulo")

// console.log(subitulo)
// console.log(subitulo.textContent)
// console.log(subitulo.id)







// <!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=], initial-scale=1.0">
//     <title>Checar Login</title>
// </head>
// <body>
//     <h2 id="subtitulo">Meu texto de subtítulo</h2>

//     <label for="senha">Senha</label>
//     <input type="password" id="senha" name="senha" placeholder="*******">

//     <button id="botaozim">Enviar</button>

//     <script src="./script.js"></script>
// </body>
// </html>

// const caixinha = document.querySelector("#senha")
// const botao = document.querySelector("#botaozim")


// function mostrarSenha(){
//     console.log(caixinha.value)
// }

// botao.addEventListener("click", mostrarSenha)





// ARROW FUNCTION
// function cumprimentar(nome){
//     return `Olá ${nome}`
// }

// nome => `Olá ${nome}`






// const caixinha = document.querySelector("#senha")
// const botao = document.querySelector("#botaozim")

// botao.addEventListener("click", () =>  console.log(caixinha.value))



// FAÇA UM SITE QUE PEDE PARA O USUÁRIO DIGITAR DUAS NOTAS E UM BOTÃO
// QUANDO CLICAR NO BOTÃO VOCÊ VAI FAZER UM ALERT MOSTRANDO SE O USUÁRIO FOI APROVADO OU REPROVADO
// (MÉDIA É 7)





// const nota1 = document.querySelector("#n1")
// const nota2 = document.querySelector("#n2")
// const botao = document.querySelector("#botao")


// botao.addEventListener("click", () =>{
//     const media = (Number(nota1.value) + Number(nota2.value)) / 2
//     if(media >= 7){
//         alert(`Aprovado com a média ${media.toFixed(1)}`)
//     }else{
//         alert(`Reprovado com a média ${media.toFixed(1)}`)
//     }
// })





// const nota1 = document.querySelector("#n1")
// const nota2 = document.querySelector("#n2")
// const botao = document.querySelector("#botao")


// botao.addEventListener("click", () => (+nota1.value + +nota2.value) / 2 >= 7 ? alert(`Aprovado`) : alert(`Reprovado`))