var express = require('express');
var router = express.Router();

const userModel= require('./users'); 

router.get('/g1', async function(req, res, next) {
  const user1 = await userModel.create({
    username: 'jinx vapor',
    name: 'Sahil',
    age: 23
  });
  res.send(user1)
});

router.get('/g2',async function(req,res,next){
  const user2=await userModel.create({
    username:'hectorplp ',
    name:'fahad',
    age:21
  });
  res.send(user2)
});

router.get('/g3', async function(req,res,next){
  const user3=await userModel.create({
    username:'deleteman',
    name:'deleteMe',
    age:0
  })
  res.send(user3)
});

router.get('/f',async function(req,res){
  const allusers=await userModel.find();
  res.send(allusers)
})

router.get('/f1',async function(req,res,next){
  const find1=await userModel.findOne({
    username:'hectorplp '
  });
  res.send(find1)
});

router.get('/d',async function(req,res){
  const deleteduser= await userModel.findOneAndDelete({
    username:'deleteman'
  })
  res.send(deleteduser)
})


router.get('/full',async function(req,res){
  const allusers=await userModel.find();
  res.send(allusers)
})

//session
router.get('/ses', function (req, res) {
  req.session.ban = true;
  res.send('Hello World');
});

router.get('/ban', function (req, res) {
  if (req.session.ban === true) {
    res.send('You are banned');
  } else {
    res.send('You are not banned');
  }
});

router.get('/removeban',function(req,res){
  req.session.destroy(function(err){
    if (err) throw err;
    res.send('ban removed');
  })
})

//sending cookie creation to frontend
/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('age',30)
  res.render('index');
});

// reading the data fromcookies
router.get('/read', function(req, res, next) {
  console.log(req.cookies.age)
  res.send('hello')
});

router.get('/delcokie',function(req,res){
 res.clearCookie('age')
 res.send('cookiedeleted')
})

module.exports = router;
