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
0 - Sair
1 - Sim! Sou cliente.
2 - Não sou cliente
`
const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1: {
        texto: `Por aqui consigo te ajudar com:
        0 - Problemas técnicos.
        2 - Pagamento ou segunda via de boleto.
        3 - Compra ou alteração de Plano.
        4 - Instalaçao do servico;
        5 - Cacelamento.
        
        O que você precisa?
        `,
        fn: opcao1
    }    
}
function opcao1(msg) {
    const opcao1 = Number(msg)
    if(isNaN(opcao1)) {
        throw new Error('Não é uma opcao valida', msg)
    } 
    switch(opcao1) {
        case 0:
            console.log('Problemas técnicos')
    }
}

terminal.question(
    questoes.opcao1.texto,
    questoes.opcao1.fn
)

function menuInicial(msg) {
    const opcao = Number(msg)
    if(isNaN(opcao)) {
        throw new Error('Não é um número valido', msg)
    }
    switch(opcao) {
        case 0:
                console.log('Saindo...')
                terminal.close()
                break;
        case 1:                        
            console.log('menu inicial')            
            break
        default:
            console.log('Deseja contratar um plano')
            terminal.close()
            break;
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