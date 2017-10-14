'use strict'

const db=require('~/lib/db')
const sql=require('~/lib/sql')



function sandboxHandler(req, reply){
  (async function(){
    var results= await db.execute(sql.sandbox.getAll);
    //console.log(results)
    reply(results)
  })()
    .catch((err)=>{
      throw err
    })
}

function sandboxSearchHandler(req, reply){
  (async function(){
    const id=req.params.id;
    console.log('id: '+id);
    //await sql.sandbox.test(id);
    let results=await db.execute(sql.sandbox.search, id);
    //console.log(results);
    reply(results);
  })()
  .catch((err)=>{
    throw err
  })
  //reply(1)  [editedPost, new Date, postId]
}

function handleUpdateSandbox(req, reply){
  (async function(){
    const id=req.params.id;
    console.log('post id: '+id)
    console.log(req.payload.biography)
    const {biography, update_by} = req.payload
    let results=await db.execute(sql.sandbox.update,[biography, update_by, id])
  })()
  .catch((err)=>{
    throw err;
  })
  reply(1)
}

module.exports=[
  {
    method:'GET',
    path:'/sandbox',
    handler:sandboxHandler
  },
  {
    method:'GET',
    path:'/sandbox/{id}',
    handler:sandboxSearchHandler
  },
  {
    method:'POST',
    path:'/update/sandbox/{id}',
    handler:handleUpdateSandbox
  }
]
