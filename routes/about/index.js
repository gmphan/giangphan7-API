'use strict'

const db=require('~/lib/db')
const sql=require('~/lib/sql')

/**++++++handleAbout++++++++++++++**/
function handleAbout(req, reply){
  (async function(){
    var results = await db.execute(sql.about.getAll);
    reply(results)
  })()
  .catch((err)=>{
    throw err;
  })
}
/**-----end handleAbout---------------**/

/**+++++++handleAboutOfId+++++++++++++**/
function handleAboutOfId(req, reply){
  let id=req.params.id;
  (async function(){
    var results = await db.execute(sql.about.search, id);
    reply(results);
  })()
  .catch((err)=>{
    throw err;
  })
}
/**-------end handleAboutOfId-------------**/

/**+++++++handleUpdateAbout+++++++++++++++**/
function handleUpdateAbout(req, reply){
  //console.log('here in handleUpdateAbout');
  const {about_content, updated_by} = req.payload;
  (async function(){
    await db.execute(sql.about.update,[about_content, updated_by, req.params.id]);
    reply({test:'test'})
  })()
  .catch((err)=>{
    throw err;
  })

}
/**-------end handleUpdateAbout-----------**/


module.exports=[
  {
    method:'GET',
    path:'/about',
    handler:handleAbout
  },
  {
    method:'GET',
    path:'/about/{id}',
    handler:handleAboutOfId
  },
  {
    method:'POST',
    path:'/update/about/{id}',
    handler:handleUpdateAbout
  }
]
