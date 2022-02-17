const fs = require('fs');

const books = JSON.parse(fs.readFileSync('./database/books.json'));
const users = JSON.parse(fs.readFileSync('./database/users.json'));
const wishlist = JSON.parse(fs.readFileSync('./database/wishlist.json'));


function getAllBooks(){
    return books;
}

function getUser(username, password){
    return users.find(user => user.username === username && user.password === password)
}

function getWishlistProducts(username) {
    const products = [];

    try {
        const userWishlistTitles = wishlist[username];

        for (const title of userWishlistTitles) {
            products.push(getProductByTitle(title))
        }
    } catch (err) {
        // Handle errors
    }

    return products;
}

function getProductByTitle(title) {
    return books.find(book => book.title === title);
}

function addProductToWishlist(username, product) {
    if (wishlist[username].includes(product.title)) return;

    wishlist[username].push(product.title);
}

function removeProductFromWishlist(username, product) {
    wishlist[username] = wishlist[username].filter(productTitle => productTitle !== product.title);
}


module.exports = {getAllBooks, getUser, getProductByTitle,
    getWishlistProducts, addProductToWishlist, removeProductFromWishlist}