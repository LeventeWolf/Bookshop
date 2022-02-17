const router = require("express").Router();
const mainDAO = require("../dao/main_dao");
const DAO = new mainDAO()
const fileHandler = require('../lib/fileHandler');

router.get("/api/all-books", async (req, res) => {
    // const allBooks = await DAO.getAllBooks();
    const allBooks = fileHandler.getAllBooks();

    return res.status(200).send(allBooks);
});

router.post('/api/signin', async (req, res) => {
    const username = req.body.userdata.name;
    const password = req.body.userdata.password;
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
    if(req.body.username === 'edem46'){
        return res.status(200).send(true)
    }else{
        // JSON formaban kell vissza amelyinel problema annal true legyen
        return res.status(400).json({username: true, password: false, email: false})
    }
})

router.post("/api/wishlist", async (req, res) => {
    const username = req.body.username;

    const products = fileHandler.getWishlistProducts(username);

    return res.status(200).send(products);
});

router.get('/test', async (req, res) =>{

router.get('/api/product/:productTitle', async (req, res) => {
    const productTitle = req.params.productTitle;

    const product = fileHandler.get

    return res.status(200).send('Working')
});

router.get('/api/profile', (req, res) => {
    return res.status(200).send("Working properly")
})

module.exports = router;
