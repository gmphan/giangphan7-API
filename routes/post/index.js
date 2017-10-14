'use strict';
const db=require('~/lib/db');
const sql=require('~/lib/sql');

/**********handleBlog*************/
function handleBlog(req, reply){
  (async function(){
    var results=await db.execute(sql.post.getAll);
    reply(results);
  })()
  .catch((err)=>{
    throw err;
  })
}
/**-----end handleBlog----------**/

/******** handlePost ***************/
function handlePost(req, reply){
  (async function(){
    var results=await db.execute(sql.post.search, req.params.id);
    reply(results);
  })()
  .catch((err)=>{
    throw err;
  })
}
/**------ End handlePost --------***/

/********** handleUpdatePost ********/
function handleUpdatePost(req, reply){
  (async function(){
    const {postContent} = req.payload;
    var results=await db.execute(sql.post.update, [postContent, req.params.id])
    reply(results);

  })()
  .catch((err)=>{
    throw err;
  })
}
/**-------- End handleUpdatePost -----**/


module.exports=[
  {
    method:'GET',
    path:'/blog',
    handler:handleBlog
  },
  {
    method:'GET',
    path:'/post/{id}',
    handler:handlePost
  },
  {
    method:'POST',
    path:'/update/post/{id}',
    handler:handleUpdatePost
  }
]
