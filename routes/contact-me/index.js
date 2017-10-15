'use strict'

const db=require('~/lib/db')
const sql=require('~/lib/sql')

/**++++++ handleContactMe ++++++++++++++**/
function handleInsertContact(req, reply){
  (async function(){
    const {name, email, phone, message} = req.payload;
    //when setting from UI to API, I use {} json,
    //from sql in API to the table I use [] array.
    await db.execute(sql.contact_me.insert, [name, email, phone, message]);
    reply(1)
  })()
  .catch((err)=>{
    throw err;
  })
}
/**-----end handleContactMe ---------------**/

/******* handleContactList *****************/
function handleContactList(req, reply){
  (async function(){
    var results=await db.execute(sql.contact_me.getAll);
    reply(results);
  })()
  .catch((err)=>{
    throw err;
  })
}
/**------ end handleContactList -----------**/


module.exports=[
  {
    method:'POST',
    path:'/insert/contact',
    handler:handleInsertContact
  },
  {
    method:'GET',
    path:'/contact/list',
    handler:handleContactList
  }
]
