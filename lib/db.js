'use strict'

const mysql=require('mysql');
const conConfig=require('~/lib/config')

let conn;

module.exports={
  init: function(){


    // console.log(conConfig.ocbuuDB)
     return mysql.createConnection(conConfig.ocbuuDB)
  }
}
