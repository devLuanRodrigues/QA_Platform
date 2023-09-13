const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/",(req, res) => {
    res.render("index");
});

app.get("/question",(req, res) => {
    res.render("question");
});

app.post("/savequestion", (req, res) => {
    res.send("Formulário recebido!");
});

// Initiating server
app.listen(8080, function(error){
    if(error){
        console.log("ERROR!");
    } else {
        console.log("SUCCESS!");
    }
});