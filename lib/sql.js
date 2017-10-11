'use strict'




const SQL={

  post:{
    getAll: 'SELECT * FROM post'
  },
  contact_me:{
    getAll: 'SELECT * FROM contact_me',
    search: 'SELECT * FROM about WHERE id=?',
    test: function(slug){
      console.log('slug is '+slug)
    }
  },
  about:{
    getAll: 'SELECT * FROM about',
    search: 'SELECT * FROM about WHERE id=?'
  }
}

module.exports=SQL
