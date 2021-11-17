const readLine = require('readLine')
//Usamos o require para pegar uma classe que já existe no node.js para pegar os eventos, capturar o que o cliente está digitando
const terminal = readLine.createInterface({
//CreatInterface para poder manipilar o que acontece quando um cliente interagir.
    input: process.stdin,
    //Tudo que sair da minha aplicação será via terminal por isso estou usando p input stdin.
    output: process.stdout
})