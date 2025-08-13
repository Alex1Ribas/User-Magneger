const prompt = require('./prompt')
const users = require('./users')

function update(){
    list()
    
let opcao = prompt('Qual Usuario deseja atualizar: ')

let novoNome = prompt('Nome Atualizado: ')

let novoEmail= prompt('E-mail Atualizado: ')
for (let i = 0; i < users.length; i++)
    if (users[i].email === novoEmail){console.log('Este e-mail já esta em uso: '); return}

let novoNumero = prompt('Numero Atualizado: ')

users[opcao].push({
        nome : novoNome,
        email: novoEmail,
        numero: novoNumero
    })


}

module.exports = update