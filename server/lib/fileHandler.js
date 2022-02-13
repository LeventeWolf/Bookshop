const fs = require('fs');

function getAllBooks(){
    const rawdata = fs.readFileSync('./database/books.json');
    const result = JSON.parse(rawdata);

    return result;
}

function getUser(username, password){
    const rawdata = fs.readFileSync('./database/users.json')
    const users = JSON.parse(rawdata)

    for (const user of users) {
        if(user.username === username && user.password === password){
            return user
        }
    }

    return undefined
}

module.exports = {getAllBooks, getUser}