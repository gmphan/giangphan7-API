'use strict'

const Hapi=require('hapi');
const path=require('path');
const dir =require('node-dir');
const Good=require('good')

const server=new Hapi.Server()
server.connection({
  host:'0.0.0.0',
  port:8000
})

/**++++++++ Register Good for logging+++++++++++++++++++++++**/
server.register({
  register:Good,
  options:{
    reporters:{
      console:[
        {
          module: 'good-squeeze',
          name: 'Squeeze',
          args:[
            {
              response:'*',
              log:'*'
            }
          ]
        },
        {
          module: 'good-console'
        },
        'stdout'
      ]
    }
  }
},
  (err)=>{
    if (err) {
        throw err; // something bad happened loading the plugin
    }
  })

/**--------end Register Good--------------------**/



/***++++++++ getting, concating, and inserting routes, and starting server++**/
function getPaths2AllDirs(){
  return new Promise((resolve,reject)=>{
    const path2RoutesDir = path.join(__dirname, '..','routes')
    dir.files(path2RoutesDir, (err, paths2AllDirArray)=>{
      if(err){
        return reject(err)
      }else{
        console.log('path: '+paths2AllDirArray)
        resolve(paths2AllDirArray)
      }
    })
  })
}

function concatRoutes(paths2AllDirArray){
  return new Promise((resolve,reject)=>{
    let routes=[];
    for(let i=0; i<paths2AllDirArray.length; i++){
      const routesExportFromModules=require(paths2AllDirArray[i]);
      //console.log(routesExportFromModules)
      routes=routes.concat(routesExportFromModules);
      if(i===paths2AllDirArray.length - 1){
        console.log(routes)
        resolve(routes)
      }
    }
  })
}

function serverGetRoutes(routes){
  return new Promise((resolve,reject)=>{
    server.route(routes)
    resolve()
  })
}

function startServer(){
  server.start((err)=>{
    if(err){
      throw err;
    }else{
      console.log('server running at: '+ server.info.uri)
      //log.info('server running at: ', server.info.uri)
    }
  })
}
/***-----end getting, concating, and inserting routes, and starting server--**/



module.exports={
  init:function(){
    return new Promise((resolve,reject)=>{
      getPaths2AllDirs()
        .then(concatRoutes)
        .then(serverGetRoutes)
        .then(startServer)

    })
  }
}
