const express = require('express');
const cors = require('cors');
const path = require("path");
const bodyParser = require('body-parser')
const app = express();

app.use(cors({origin: 'http://localhost:3000'}));

const router = require('./routes/router.js');

const PORT = 3001

app.use(express.static(path.join(__dirname, "./")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: false}));
app.use(router)


app.listen(PORT, () => {
    console.log("App listening at: http://localhost:3001/");
});
