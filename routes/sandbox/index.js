'use strict'

const mysqlCon=require('~/lib/db')
const sql=require('~/lib/sql')


function sandboxHandler(req, reply){
  //want to reply all the notes in json format



  openCon().then(function(connectedCon){
    queryFrom(connectedCon)
  })





  reply(1)
}

const openCon = function(){
  return new Promise(function(resolve, reject){
    const connectedCon = mysqlCon.init();
    resolve(connectedCon)
  })
}

const queryFrom = function(connectedCon){
  return new Promise(function(resolve, reject){
    connectedCon.query(sql.contact_me.getAll, function(err, rows){
      if(err){
        throw err
      }else{
        console.log(rows[0].id)
      }
    })
  })
}

module.exports=[
  {
    method:'GET',
    path:'/sandbox',
    handler:sandboxHandler
  }
]
