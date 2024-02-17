const express=require('express');
const app= express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index',{name:'best company in the world'});
});

app.get('/aboutus',function(req,res){
    res.render('about',{age : 12})
})

app.listen(3000)