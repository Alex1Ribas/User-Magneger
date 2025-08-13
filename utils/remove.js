const users = require('./users')
const prompt = require('./prompt')
const list = require('./list')

function remove(){
    list()

let escolha = prompt('Selecione um ID que desja apagar: ')
for(let i =0; i< users.length;i++)
    if(users[i].id === escolha){
       let confirma = prompt('Deseja realmente apagar o id' + escolha + '?(s/n)')}
       else if (confirma.toLowerCase() === 's'){
        users.splice(escolha, 1)
       }

}