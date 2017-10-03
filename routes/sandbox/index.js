'use strict'

function sandboxHandler(req, reply){
  //want to reply all the notes in json format
  
  reply(1)
}

module.exports=[
  {
    method:'GET',
    path:'/sandbox',
    handler:sandboxHandler
  }
]
