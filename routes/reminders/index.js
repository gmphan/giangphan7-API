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

/******* handleInsertReminder **********/
function handleInsertReminder(req, reply){
  (async function(){
    const {reminder_name, reminder_quote, written_by} = req.payload;
    var results=await db.execute(sql.reminder.insert, [reminder_name, reminder_quote, written_by]);
    reply();
  })()
  .catch((err)=>{
    throw err;
  })
}
/***---- end handleInsertReminder---***/

module.exports=[
  {
    method:'GET',
    path:'/reminder',
    handler:handleReminder
  },
  {
    method:'POST',
    path:'/insert/reminder',
    handler:handleInsertReminder
  }
]
