const fs = require('fs');

function getAllBooks(){
    const rawdata = fs.readFileSync('./database/books.json');
    const result = JSON.parse(rawdata);

    return result;
}

function authenticateUser(username, password){
    const rawdata = fs.readFileSync('./database/users.json')
    const users = JSON.parse(rawdata)

    for (const user of users) {
        if(user.name === username && user.password === password){
            return true
        }
    }

    return false
}

module.exports = {getAllBooks, authenticateUser}