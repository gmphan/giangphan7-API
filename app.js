'use strict'

require('require-self-ref');

(async function main(){
  await require('~/lib/server').init();
})()
.catch((err)=>{
  throw err
})
