const router = require("express").Router();
const fileHandler = require('../lib/fileHandler');
const main_dao = require('../dao/main_dao');
const dao = new main_dao.dao();

function initQuantity(products) {
    const result = []

    products.forEach(product => {
        product['quantity'] = 1;
        result.push(product)
    })

    return result;
}

router.get("/api/all-books", async (req, res) => {
    const allBooks = await dao.getAllBooks();
    const result = initQuantity(allBooks);

    return res.status(200).send(result);
});

router.get("/api/test", async (req, res) => {
    const result = await dao.getAllBooks();

    return res.status(200).send(result);
});

router.post('/api/signin', async (req, res) => {
    const username = req.body.userData.name;
    const password = req.body.userData.password;
    const user = fileHandler.getUser(username, password)

    if (user) {
        console.log(`[SIGN-IN] Welcome ${username}!`)
        return res.status(200).send({user, isAuthenticated: user});
    } else {
        return res.status(404).send(`[SIGN-IN] Wrong Username || Password!`);
    }

});

router.post('/api/registration', async (req, res) =>{
    const userData = req.body;

    try {
        const result = await dao.registerUser(userData);
        return res.status(200).send(result);
    } catch (error) {
        console.log(`[ROUTER-REGISTER] Error!`);
        console.log(error);
        return res.status(400);
    }
})


// Basket

router.post('/api/checkout', async (req, res) =>{
    const username = req.body.username;
    const products = req.body.products;

    try {
        const result = await dao.checkout(username, products);
        return res.status(200).send(result);
    } catch (error) {
        console.log(`[ROUTER-REGISTER] Error!`);
        console.log(error);
        return res.status(400);
    }
})


// Wishlist

router.post("/api/wishlist", async (req, res) => {
    const username = req.body.username;

    try {
        const products = await dao.getWishlistProducts(username);
        const result = initQuantity(products);
        return res.status(200).send(result);
    } catch (e) {
        console.log(e)
    }
});

router.post("/api/wishlist/add", async (req, res) => {
    const username = req.body.username;
    const productID = req.body.productID;

    try {
        const result = await dao.addProductIDToWishlist(username, productID);
        return res.status(200).send(result);
    } catch (error) {
        console.log(`[ROUTER-WISHLIST-ADD] Error!`);
        console.log(error);
        return res.status(400);
    }
});

router.post("/api/wishlist/remove", async (req, res) => {
    const username = req.body.username;
    const product = req.body.product;

    try {
        const result = await dao.removeProductIDFromWishlist(username, product.id);
        console.log(result)
        return res.status(200).send(`[DB-WISHLIST] ${result}`);
    } catch (error) {
        console.log(`[DB-WISHLIST-REMOVE] Error!`);
        console.log(error);
        return res.status(400);
    }

});

// ProductPage

router.get('/api/product/:id/:productTitle', async (req, res) => {
    const productID = req.params.id;

    try {
        const product = await dao.getProductByID(productID)
        return res.status(200).send(product);
    } catch (error) {
        console.log(`[ROUTER-PRODUCT] Get product error!`)
        console.log(error)
        return res.status(400).send(error);
    }

});

router.get('/api/profile', (req, res) => {
    return res.status(200).send("Working properly")
})

module.exports = router;
