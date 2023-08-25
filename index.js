const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;
    res.render("index", {
        nome: nome,
        lang: lang,
        data: "25/08/2023"
    });
})

// Initiating server
app.listen(8080, function(error){
    if(error){
        console.log("ERROR!");
    } else {
        console.log("SUCCESS!");
    }
});