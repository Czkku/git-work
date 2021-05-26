var express = require('express');
const { createPool } = require('mysql');
var router = express.Router();
var db = require('./db/db.js');

router.get('/', function(req, res , next) {
  db.sql("select * from tab_passage",(err,rows) =>{
    res.render('back',{data:rows});
  })
});

//跳转add页面
router.get('/add',(req,res)=>{
  res.render('add');
})

// router.get('/add',(req,res)=>{
//   if(req.query.createuser !=undefined){
//      db.sqlParam("select * from tab_passage ",[req.query.createuser],(err,row)=>{
//          res.render('add',{row:row[0]});
//      }) 
//   }else{
//       res.render('add');
//   }
// });

//post请求
router.post('/add',(req,res)=>{
  
  db.sqlParam("insert into tab_passage(pid,ptitle,pcontent,createtime,createuser,revisetime) values(?,?,?,?,?,?)",[
    req.body.pid,
    req.body.ptitle,
    req.body.pcontent,
    req.body.createtime,
    req.body.createuser,
    req.body.revisetime
  ],(err,rows)=>{
    res.redirect('/backstage');
  })
})


//删除
router.get('/del/:pid', function (req, res) {
      let pid = req.params.pid;
      db.sqlParam("delete from tab_passage where pid =" + pid, function (err, rows) {
          if (err) {
              res.end('删除失败：' + err)
          } else {
              res.redirect('/backstage');
          }
      });
});


// 修改功能模块
router.get('/update/:pid', function (req, res) {
  var pid = req.params.pid;
  console.log(pid)
      db.sqlParam("select * from tab_passage where pid=" + pid, function (err, rows) {
          console.log(rows)
          if (err) {
              res.end('修改页面跳转失败:' + err);
          } else {
              res.render('update', {datas: rows}); //直接跳转
          }
      });
});
router.post('/update', function (req, res) {
 var pid = req.body.pid;
 var ptitle = req.body.ptitle;
 var pcontent = req.body.pcontent;
 var createtime = req.body.createtime;
 var createuser = req.body.createuser;
 var revisetime = req.body.revisetime;

  console.log(pid)
  console.log(ptitle)
      db.sqlParam(
      "update tab_passage set pid='" + pid + "',ptitle='" + ptitle + "',pcontent='" + pcontent + "',createtime='" + createtime+ "',createuser='" + createuser + "',revisetime='" + revisetime + "' where pid=" + pid
      
      , function (err, rows) {
          if (err) {
              res.end('修改失败:' + err);
          } else {
              res.redirect('/backstage');
          }
         
      });
 
});

// 查询
// router.post('/search',function (req, res) {
//   var name = req.body.ptitle;
//   var age = req.body.s_age;
//   var sql = "select * from userInfo";
//   if (name) {
//       sql += " and name='" + name + "' ";
//   }
//   if (age) {
//       sql += " and age=" + age + " ";
//   }
//   sql = sql.replace("and","where");
//            if (err) {
//                res.end("查询失败：", err)
//            } else {
//                res.render("backstage", {title: 'Express', datas: rows, s_name: name, s_age: age});
//            }
        
// });




module.exports = router;
