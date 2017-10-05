'use strict'

const mysql=require('mysql');
const config=require('~/lib/config')

let pool;
module.exports={
  /**++++creating connection pool
creating connection pool here doesn't mean connecting to more than one
databases at the same time, but mean creating a pool of connection on
one databases - everytime someone request a connection to that database
through this pool, the connection will be added to the pool, so that we
don't have to create separate connection for every connetion.
This should be created when the app starting up.
  **/
  init: function(){
     return(async function(){
       pool= await mysql.createPool(config.ocbuuDB)
       console.log("Connection Pool was created")
    })()
  },
  execute: function(sql){
    return new Promise(function(resolve,reject){
      pool.getConnection(function(err, conn){
        if(err){
          throw err
        }else{
          conn.query(sql, function(err, rows){
            if(err){
              throw err
            }else{
              resolve(rows);
            }
            //close the individual connection
            conn.release();
          })
        }
      })
    })
  }
}
