const express=require('express');
const app= express();

app.set('view engine','ejs');
app.use(express.static('./public'))

app.get('/',function(req,res){
    res.render('index',{name:'best company in the world'});
});

app.get('/error',function(req,res,next){
    throw Error('something went wrong')
 })

app.get('/aboutus',function(req,res){
    res.render('about',{age : 12})
});




function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  }

app.use(errorHandler);

app.listen(4000)