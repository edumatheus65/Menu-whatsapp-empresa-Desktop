const readLine = require('readline')
//Usamos o require para pegar uma classe que já existe no node.js para pegar os eventos, capturar o que o cliente está digitando
const terminal = readLine.createInterface({
//CreatInterface para poder manipilar o que acontece quando um cliente interagir.
    input: process.stdin,
    //Tudo que sair da minha aplicação será via terminal por isso estou usando p input stdin.
    output: process.stdout
})

//Texto do menu

const textoMenu = `
Olá, eu sou o assistente virtual da Desktop estou aqui para te ajduar
Para iniciarmos o atendimento preciso saber, você já é nosso cliente?
1 - Sim! Sou cliente.
2 - Não sou cliente
`
const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    }    
}
function menuInicial(msg) {
    const opcao = Number(msg)
    if(isNaN(opcao)) {
        throw new Error('Não é um número valido', msg)
    }
    switch(opcao) {
        case 0:
                console.log()
    }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)

//console.log('textoMenu', textoMenu)
//const opcao = 2
//switch(opcao) {
//    case 1:
//        console.log('pressionou 1')
//        break;
//    case 2:
//        console.log('pressionou 2')
//        break;
//    default:
//        console.log('opção invalida')
//}