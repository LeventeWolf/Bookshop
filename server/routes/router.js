const router = require("express").Router();
const mainDAO = require("../dao/main_dao");
const DAO = new mainDAO()


// Books

router.post("/api/all-books", async (req, res) => {
    const allBooks = await DAO.getAllBooks();

    return res.status(200).send(allBooks);
});


module.exports = router;
