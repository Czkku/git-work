var express = require('express');
var router = express.Router();
var db = require('./db/db.js');

router.get('/', function(req,res) {
  res.render("show")

  // console.log("能查看数据");
})

  router.get("/show",function(req,res){
  var b1 = [];
  var b2 = [] ;
  db.sql("select * from tab_team",(err,rows) =>{
    b1 = rows ;
    db.sql('select * from tab_upcomingshow ',(err,result)=>{
      b2 = result;
      console.log(b1);
      console.log(b2);
      res.json({"data1":b1,"data2":b2});
    })
  })
})
  // db.sql("select * from tab_upcomingshow",(err,rows) =>{
  //   console.log("能查看数据",rows);
  //   res.render('index',{upcomingshow_data:rows});
  // })

// router.get('/', function(req, res , next) {
//   console.log("能查看数据");
  
// });

module.exports = router;
