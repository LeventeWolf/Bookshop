const router = require("express").Router();
const mainDAO = require("../dao/main_dao");
const DAO = new mainDAO()
const fileHandler = require('../lib/fileHandler');

// Books

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
    } else {
        console.log(`[SIGN-IN] Wrong Username || Password!`)
    }

    return res.status(200).send({user, isAuthenticated: user ? true : false});
});

router.post('/api/registration', async (req, res) =>{
    const userData = req.body;
    return res.status(200).send(userData)
    // return res.send("Working")
})

router.get('/test', async (req, res) =>{
    return res.status(200).send('Working')
})

router.get('/api/profile', (req, res) => {
    return res.status(200).send("Working properly")
})

module.exports = router;
