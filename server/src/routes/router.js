const router = require("express").Router();
const fileHandler = require('../lib/fileHandler');
const dao = require('../dao/main_dao');

router.get("/api/all-books", async (req, res) => {
    const allBooks = await dao.getAllBooks();

    return res.status(200).send(allBooks);
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

// Wishlist

router.post("/api/wishlist", async (req, res) => {
    const username = req.body.username;

    const products = fileHandler.getWishlistProducts(username);

    return res.status(200).send(products);
});

router.post("/api/wishlist/add", async (req, res) => {
    const username = req.body.username;
    const product = req.body.product;

    fileHandler.addProductToWishlist(username, product);

    return res.status(200).send(`[DB-WISHLIST] Add '${product.title}'`);
});

router.post("/api/wishlist/remove", async (req, res) => {
    const username = req.body.username;
    const product = req.body.product;

    fileHandler.removeProductFromWishlist(username, product);

    return res.status(200).send(`[DB-WISHLIST] Removed '${product.title}'`);
});



router.get('/api/product/:productTitle', async (req, res) => {
    const productTitle = req.params.productTitle;
    const product = fileHandler.getProductByTitle(productTitle)

    return res.status(200).send(product);
});

router.get('/api/profile', (req, res) => {
    return res.status(200).send("Working properly")
})

module.exports = router;
