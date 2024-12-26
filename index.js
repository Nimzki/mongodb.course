var express = require('express');
var router = express.Router();
var UserModel=require('../Models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
  res.render('add');
});


router.post('/add', function(req, res, next) {
var bodydata = {
  uname: req.body.txt1,
  umobile: req.body.txt2,
  ugender: req.body.txt3
  }
var mydata = UserModel(bodydata);
mydata.save(req.body)
.then(data => {
res.send("Record Added");
})
.catch(err => console.log("Error in Query" + err));
});

router.get('/display',function(req,res,next){
UserModel.find()
.then(data=>{
console.log(data);
res.render('display',{mydata:data});
})
.catch(err=>console.log("Error"+err));
});

router.get('/show/:id',function(req,res,next){
  var myid=req.params.id;
  UserModel.findById(myid)
.then(data=>{
res.render('show',{mydata:data});
})
.catch(err=>console.log("Error"+err));
});

router.get('/delete/:id',function(req,res,next){
  var myid=req.params.id;
  UserModel.findByIdAndDelete(myid)
.then(data=>{
res.redirect('/display');
})
.catch(err=>console.log("Error"+err));
});


module.exports = router;
