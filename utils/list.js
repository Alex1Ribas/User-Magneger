const users = require("./users");

function list(){
    if( users.length <= 0){
        console.log("Nenhum usuario encontrado...");}
console.log(users);
}

module.exports = list