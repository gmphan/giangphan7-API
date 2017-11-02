'use strict';
const db=require('~/lib/db');
const sql=require('~/lib/sql');

/********** handleReminders *************/
function handleReminder(req, reply){
  (async function(){
    var results=await db.execute(sql.reminder.getAll);
    reply(results);
  })()
  .catch((err)=>{
    throw err;
  })
}
/***------ handleReminders --------****/
module.exports=[
  {
    method:'GET',
    path:'/reminder',
    handler:handleReminder
  }
]
