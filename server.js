const express = require('express');
const app = express();
const port= 3011;

//START OF THE PORT (localhost:3010/)
app.get('/', (req, res) => {
    res.send('Hello, its GitPub')
});

//INDEX DRINK
app.get('drink', (req, res) => {
    res.render('drink_index.ejs', {totallDrinks : drinks})
});

//INDEX FOOD
// app.get('food', (req, res) => {
//     res.render('food_index.ejs', {totalFood : food})
// });



//LISTENING TO PORT
app.listen(port, () => {
    console.log(`There is always money in the banana port ${port}`)
})