var express = require('express');
var router = express.Router();
const { createPool } = require('mysql');
var db = require('./db/db.js');
var connection = require('./database.js');


router.get('/',(req,res)=>{
  res.render('add');
})

router.post('/', function(req, res, next) {
  console.log("here");
  // 1读取提交的参数
  // 2写数据库
  // 3提示
  // 4跳转
  db.sqlParam("insert into tab_passage(pid,ptitle,pcontent,createtime,createuser,revisetime) values(?,?,?,?,?,?)",[
    req.body.pid,
    req.body.ptitle,
    req.body.pcontent,
    req.body.createtime,
    req.body.createuser,
    req.body.revisetime
  ],(err,rows)=>{
    console.log("ERROR===",err)
    res.redirect('/backstage');
  })
  
  });
module.exports = router;