'use strict';
const db=require('~/lib/db');
const sql=require('~/lib/sql');

/****** handleProjects *******/
function handleProjects(req, reply){
  (async function(){
    var results=await db.execute(sql.project.getAll);
    reply(results);
  })()
  .catch((err)=>{
    throw err;
  })
}
/****-- end handleProjects --***/
module.exports=[
  {
    method:'GET',
    path:'/projects',
    handler:handleProjects
  }
]
