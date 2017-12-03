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

/****** handleInsertPrj ********/
function handleInsertPrj(req, reply){
  (async function(){
    const {proj_name, due_date, state, description} = req.payload;
    var results=await db.execute(sql.project.insert, [proj_name, due_date, state, description]);
    reply();
  })()
  .catch((err)=>{
    throw err;
  })
}
/*****-- end handleInsertPrj ---*****/

module.exports=[
  {
    method:'GET',
    path:'/projects',
    handler:handleProjects
  },
  {
    method:'POST',
    path:'/insert/project',
    handler:handleInsertPrj
  }
]
