const fs = require('fs');

function getAllBooks(){
    const rawdata = fs.readFileSync('./database/books.json');
    const result = JSON.parse(rawdata);

    return result;
}

module.exports = {getAllBooks}