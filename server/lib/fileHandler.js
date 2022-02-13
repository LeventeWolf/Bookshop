const fs = require('fs');

function getAllBooks(){
    const rawdata = fs.readFileSync('./database/books.json');
    const result = JSON.parse(rawdata);

    return result;
}

function authenticateUser(name, password){
    const rawdata = fs.readFileSync('./database/users.json')
    const result = JSON.parse(rawdata)
    for (const user of result) {
        if(user.name === name && user.password === password && name === undefined && password===undefined){
            return true
        }
    }
    return false
}

module.exports = {getAllBooks, authenticateUser}