-- use database: react_student_list

-- create table
CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	github_name varchar(255)
);

INSERT INTO students ("github_name") VALUES ('cmdornfeld');
INSERT INTO students ("github_name") VALUES ('BenStretar');
INSERT INTO students ("github_name") VALUES ('elmiabdirahman');
INSERT INTO students ("github_name") VALUES ('pwielgos');