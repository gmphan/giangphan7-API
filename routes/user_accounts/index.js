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
      throw err;
    })
}
/**---- End handleValidateLogin ---------***/

/********* handleSignin *******/
function handleSignin(req, reply){
  (async function(){
    var results =await db.execute(sql.user_accounts.getAll);
    reply(results);
  })()
  .catch((err)=>{
    throw err;
  });
}
/***---- End handleSignin ---******/


module.exports=[
  {
    method:'GET',
    path:'/validate/login',
    handler:handleValidateLogin
  },
  {
    method:'GET',
    path:'/sign-in',
    handler:handleSignin
  }
]
