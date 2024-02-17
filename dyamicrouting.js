const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use(function(req, res, next){
    console.log('hello from middleware'); // corrected the typo in "middleware"
    next();
});


app.get('/',function(req,res,next){
    res.send('hello ');
});


app.get('/profile/:username',function(req,res){
    res.send(`hello from ${req.params.username}`)
});

app.listen(4000)