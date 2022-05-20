//EXPRESS ROUTE
const express = require('express');
const app = express();
const drinks = require('./models/drinks')
const port= 3011;

//START OF THE PORT TEST (localhost:3011/)
app.get('/', (req, res) => {
    res.send('Hello, its GitPub')
});

//INDEX DRINK (Setting up your index view to show your drinks data)
app.get('/drink', (req, res) => {
    res.render('drink_index.ejs', {totallDrinks : drinks})
});

//INDEX FOOD (Setting up your index view to show your food data)
// app.get('food', (req, res) => {
//     res.render('food_index.ejs', {totalFood : food})
// });

// SHOW DRINK (Setting up show route)
// app.get('/drinks/:id', (req,res) => {
//     res.render(req.params.id);
// });

// SHOW FOOD (Setting up show route)
// app.get('/food/:id', (req,res) => {
//     res.render(req.params.id);
// });

// RENDER DRINK ()
// app.get('/drinks/:id', (req, res) => {
//     res.render('drinks_show.ejs', {drinks: drinks[req.params.id]});
// });

// RENDER FOOD ()
// app.get('/food/:id', (req, res) => {
//     res.render('food.ejs', {foods: foods[req.params.id]});
// });

//LINKING DRINK SHOW AND INDEX ()
// app.get('/drinks/:id', (req, res) => {
//     res.render('drinks_show.ejs', {drink: drinks[req.params.id]});
// });

//LINKING FOOD SHOW AND INDEX ()
// app.get('/food/:id', (req, res) => {
//     res.render('food_show.ejs', {food: foods[req.params.id]});
// });

//LISTENING TO PORT
app.listen(port, () => {
    console.log(`There is always money in the banana port ${port}`)
});