'use strict'

const db=require('~/lib/db')
const sql=require('~/lib/sql')



function slashHandler(req, reply){
  (async function(){
    var results= await db.execute(sql.about.getAll);
    //console.log(results)
    reply(results)
  })()
}


module.exports=[
  {
    method:'GET',
    path:'/',
    handler:slashHandler
  }
]
