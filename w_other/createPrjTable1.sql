
use oc_buu;
select DATE_FORMAT(created_date, "%b  %d %Y") as created_date from post;
select * from post;

CREATE TABLE project (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
project_name varchar(99),
state varchar(30),
due_date date,
completion_date date,
description text,
added_date timestamp,
added_by VARCHAR(30),
delete_status tinyint(1)
);
CREATE TABLE task (
    id int auto_increment NOT NULL,
    prj_id int(6) unsigned NOT NULL,
    task_name varchar(99),
    state varchar(30),
    description text,
    added_date timestamp not null,
    added_by varchar(30),
    delete_status tinyint,
    PRIMARY KEY (id),
    FOREIGN KEY (prj_id) REFERENCES project(id)
);
CREATE TABLE activity(
	id int auto_increment NOT NULL,
    tsk_id int NOT NULL,
    note text,
    added_date timestamp not null,
    added_by varchar(30),
    delete_status tinyint,
    PRIMARY KEY (id),
    FOREIGN KEY (tsk_id) REFERENCES task(id)
);


select * from activity;

ALTER TABLE task DROP COLUMN image_path;

insert into project (project_name, state, due_date, description) values ('testing', 'Open', sysdate(), 'It is better to remain silent and be thought a fool than to speak out and remove all doubt.');
select * from favorite_quotes;

select * from gpweb_note_content;
ALTER TABLE projects
MODIFY COLUMN percent_complete varchar(30);




select * from task where prj_id=2;




