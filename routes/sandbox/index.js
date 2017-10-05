'use strict'

const db=require('~/lib/db')
const sql=require('~/lib/sql')


function sandboxHandler(req, reply){
  (async function(){
    var results= await db.execute(sql.contact_me.getAll);
    console.log(results[0].id)
    reply(results)
  })()


}


module.exports=[
  {
    method:'GET',
    path:'/sandbox',
    handler:sandboxHandler
  }
]
