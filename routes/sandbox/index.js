'use strict'

const db=require('~/lib/db')
const sql=require('~/lib/sql')



function sandboxHandler(req, reply){
  (async function(){
    var results= await db.execute(sql.contact_me.getAll);
    console.log(results)
    reply(results)
  })()
    .catch((err)=>{
      throw err
    })
}

function sandboxSearchHandler(req, reply){
  (async function(){
    const slug=req.params.slug;
    console.log('slug: '+slug);
    await sql.contact_me.test(slug);
    let results=await db.execute(sql.contact_me.search, slug);
    //console.log(results);
    reply(results);
  })()
  .catch((err)=>{
    throw err
  })
  //reply(1)
}



module.exports=[
  {
    method:'GET',
    path:'/sandbox',
    handler:sandboxHandler
  },
  {
    method:'GET',
    path:'/sandbox/{slug}',
    handler:sandboxSearchHandler
  }
]
