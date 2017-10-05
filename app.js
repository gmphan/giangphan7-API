'use strict'

require('require-self-ref');

(async function main(){
  await require('~/lib/db').init(); //to kick off the connection pool right away
  await require('~/lib/server').init();
})()
.catch((err)=>{
  throw err
})
