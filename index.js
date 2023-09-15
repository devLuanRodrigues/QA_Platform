const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./db/db");
const questionModel = require("./db/questionModel");

// Database
connection
    .authenticate()
    .then(() => {
        console.log("CONNECTION SUCCESS!");
    })
    .catch((msgError) => {
        console.log(msgError);
    });

// Setting engine view
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Setting body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
app.get("/",(req, res) => {
    questionModel.findAll({ raw: true, order: [
        ['id', 'DESC']
    ]}).then(question => {
        res.render("index", {
            question: question
        });
    });
});

app.get("/questions",(req, res) => {
    res.render("question");
});

app.post("/savequestion", (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    questionModel.create({
        title: title,
        description: description
    }).then(() => {
        res.redirect("/");
    });
});

app.get("/question/:id", (req, res) => {
    let id = req.params.id;
    questionModel.findOne({
        where: {id: id}
    }).then(question => {
        if(question != undefined) {
            res.render("question");
        } else {
            res.redirect("/");
        }
    })
});

// Initiating server
app.listen(8080, function(error){
    if(error){
        console.log("ERROR!");
    } else {
        console.log("SUCCESS!");
    }
});