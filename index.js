const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000 ;

const categories = require('./data/categories.json');
const recipes = require('./data/card.json')

app.use(cors());

app.get('/',(req, res)=>{
  res.send('I am very very happy')
});

app.get('/categories',(req, res)=>{
    console.log(categories);
    res.send(categories);
});

app.get('/recipes',(req,res)=>{
  console.log(recipes);
  res.send(recipes);
})

app.listen(port,()  =>{
    console.log(`Data is running on port: ${port}`)
})
