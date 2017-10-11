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

function editAboutHandler(req,reply){
  let idOfReqOnAbout=req.params.param;
  (async function(){
    var results= await db.execute(sql.about.search, idOfReqOnAbout);
    //console.log(results)
    reply(results)
  })()
  .catch((err)=>{
    throw err
  })
}


module.exports=[
  {
    method:'GET',
    path:'/',
    handler:slashHandler
  },
  {
    method:'GET',
    path:'/edit/about/{param*}',
    handler:editAboutHandler
  }
]
