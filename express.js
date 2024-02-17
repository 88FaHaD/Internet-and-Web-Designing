// routes and middleewere

const express= require('express');
const app=express()
app.get('/',function(req,res)
{
    res.send('hello world bye bye');

})

//middlewere
app.use(function(req,res,next){
    console.log('hello from middlewere ');
    next();
});

app.get('/profile',function(req,res){
    res.send('my profile')
})

app.listen(3000)

