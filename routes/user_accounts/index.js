'use strict';
const db=require('~/lib/db');
const sql=require('~/lib/sql');

/******** handleValidateLogin *************/
function handleValidateLogin(req, reply){
  (async function(){
    var results= await db.execute(sql.user_accounts.getAll);
    //console.log(results)
    reply(results)
  })()
    .catch((err)=>{
      throw err
    })
}
/**---- End handleValidateLogin ---------***/

module.exports=[
  {
    method:'GET',
    path:'/validate/login',
    handler:handleValidateLogin
  }
]
