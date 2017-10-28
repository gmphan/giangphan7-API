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
    const {postName, postContent} = req.payload;
    var results=await db.execute(sql.post.update, [postName, postContent, req.params.id])
    //console.log(results.insertId);
    reply(results.insertId);

  })()
  .catch((err)=>{
    throw err;
  })
}
/**-------- End handleUpdatePost -----**/

/********* handleInsertPost ************/
function handleInsertPost(req, reply){
  (async function(){
    const {post_name, post_content} = req.payload;
    var results=await db.execute(sql.post.insert, [post_name, post_content]);
    reply();
  })()
  .catch((err)=>{
    throw err;
  })
}
/**------ End handleInsertPost -------**/


module.exports=[
  {
    method:'GET',
    path:'/all-post',
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
  },
  {
    method:'POST',
    path:'/insert/post',
    handler:handleInsertPost
  }
]
