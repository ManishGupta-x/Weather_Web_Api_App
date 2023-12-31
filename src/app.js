const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 8000;


const staticpath = path.join(__dirname, "../public");


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.use(express.static(staticpath));
app.get("", (req, res) => {

    res.render('index');
});

app.get("/weather", (req, res) => {

    res.render('weather');
});

app.get("/about", (req, res) => {

    res.render('about');
});

app.get("*", (req, res) => {

    res.render('404err', {

        errorMsg: 'Oops! Page Not Found'
    });
});

app.listen(port, () => {
    
    console.log(`Server is up on port ${port}`);
})