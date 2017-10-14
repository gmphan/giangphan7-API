'use strict'




const SQL={
  sandbox:{
    getAll:'SELECT * FROM sandbox',
    search:'SELECT * FROM sandbox WHERE id=?',
    update:'UPDATE sandbox SET biography=?, update_by=? WHERE id=?',
    test: function(id){
      console.log('id is '+id)
    }
  },
  post:{
    getAll: 'SELECT * FROM post',
    search: 'SELECT * FROM post WHERE id=?',
    update:'UPDATE post SET post_content=? WHERE id=?'
  },
  contact_me:{
    getAll: 'SELECT * FROM contact_me',
    search: 'SELECT * FROM about WHERE id=?'
  },
  about:{
    getAll: 'SELECT * FROM about',
    search: 'SELECT * FROM about WHERE id=?',
    update: 'UPDATE about SET about_content=?, updated_by=? WHERE id=?'
  }
}

module.exports=SQL
