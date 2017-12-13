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
    //getAll: 'SELECT id, post_name, post_content, DATE_FORMAT(created_date, "%b  %d %Y") as created_date FROM post',
    getAll: 'SELECT * FROM post',
    search: 'SELECT * FROM post WHERE id=?',
    update: 'UPDATE post SET post_name=?, post_content=? WHERE id=?',
    insert: 'INSERT INTO post SET post_name=?, post_content=?'
  },
  contact_me:{
    getAll: 'SELECT * FROM contact_me',
    search: 'SELECT * FROM about WHERE id=?',
    insert: 'INSERT INTO contact_me SET name=?, email=?, phone=?, message=?'
  },
  about:{
    getAll: 'SELECT * FROM about',
    search: 'SELECT * FROM about WHERE id=?',
    update: 'UPDATE about SET about_content=?, updated_by=? WHERE id=?'
  },
  user_accounts:{
    getAll: 'SELECT * FROM user_accounts'
  },
  reminder:{
    getAll: 'SELECT * FROM reminder',
    insert: 'INSERT INTO reminder SET reminder_name=?, reminder_quote=?, written_by=?'
  },
  project:{
    getAll: 'SELECT * FROM project',
    insert: 'INSERT INTO project SET project_name=?, due_date=?, state=?, description=?',
    search: 'SELECT * FROM project WHERE id=?',
  },
  task:{
    add: 'INSERT INTO task SET prj_id=?, task_name=?, state=?, description=?',
    search: 'SELECT a.* FROM task a JOIN project b ON b.id = a.prj_id AND b.id=?',
    search_note:'SELECT * FROM activity WHERE id=?'
  }
}

module.exports=SQL
