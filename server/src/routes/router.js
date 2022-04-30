const router = require("express").Router();
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

    return res.status(200).send(allBooks);
});

router.get("/api/all-songs", async (req, res) => {
    const result = await dao.getAllSongs();

    return res.status(200).send(result);
});

router.get("/api/all-films", async (req, res) => {
    const result = await dao.getAllFilms();

    return res.status(200).send(result);
});

router.post('/api/signin', async (req, res) => {
    const username = req.body.userData.name;
    const password = req.body.userData.password;

    try {
        const user = await dao.getUser(username, password);

        if (user) {
            console.log(`[SIGN-IN] Welcome ${username}!`)
            //TODO: Refactor this spaghetti :)
            user['username'] = user.USERNAME;
            delete user.USERNAME;
            user['avatar'] = user.AVATAR;
            delete user.AVATAR;
            user['email'] = user.EMAIL;
            delete user.EMAIL;
            user['firstName'] = user.FIRSTNAME;
            delete user.FIRSTNAME;
            user['lastName'] = user.LASTNAME;
            delete user.LASTNAME;
            user['isMember'] = user.IS_MEMBER;
            delete user.IS_MEMBER;

            return res.status(200).send({user, isAuthenticated: user});
        } else {
            return res.status(404).send(`[SIGN-IN] Wrong Username || Password!`);
        }
    } catch (e) {
        return res.status(400).end();
    }



});

router.post('/api/registration', async (req, res) => {
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

router.post('/api/checkout', async (req, res) => {
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

// ProductPage/RelatedProducts

router.get('/api/related-products/:id/', async (req, res) => {
    const productID = req.params.id;

    let result = [];

    try {
        result = await dao.getRelatedProducts(productID)
    } catch (error) {
        console.error(`[ROUTER-PRODUCT] Get relatedProducts error!`)
        console.error(error)
    }

    return res.status(200).send(result);


});



// Bestsellers

router.get('/api/bestsellers', async (req, res) => {
    const result = await dao.getBestsellers();

    return res.status(200).send(result);
})

// Featuring Products (2022)

router.get('/api/featuring-products', async (req, res) => {
    const result = await dao.getFeaturingProducts();

    return res.status(200).send(result);
})

// Profile

router.post('/api/profile', async (req, res) => {
    const username = req.body.username;
    const result = await dao.getProfile(username);

    return res.status(200).send(result)
})

// User

router.post('/api/user', async (req, res) => {
    const username = req.body.username;
    const result = await dao.getUserByUsername(username);

    console.log(username);

    return res.status(200).send(result)
})

// Update product

router.post('/api/update/product', async (req, res) => {
    let product = req.body.product;

    const result = await dao.updateProduct(product);

    console.log(product);

    return res.status(200).send(result)
})


// Purchases

router.post('/api/purchases', async (req, res) => {
    const username = req.body.username;
    const result = await dao.getPurchasesWithProducts(username);

    return res.status(200).send(result);
})


// Storage delete

router.post('/api/delete/storage', async (req, res) => {
    const storageID = req.body.storageID;

    const result = await dao.deleteStorage(storageID);

    return res.status(200).send(result);
})

// Storage

router.get('/api/storages', async (req, res) => {
    const result = await dao.getStorages();

    return res.status(200).send(result);
})

// Storage Products

router.get('/api/storages/:id', async (req, res) => {
    const result = await dao.getStorageProducts(req.params.id);

    return res.status(200).send(result);
})


module.exports = router;
