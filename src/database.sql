CREATE DATABASE  school
USE school

CREATE TABLE teacher (
    id INT NOT NULL,
    name TEXT NOT NULL,
    email VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    subject TEXT NOT NULL
)

CREATE TABLE student (
     id INT NOT NULL,
    name TEXT NOT NULL,
    email VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    grad TEXT NOT NULL
)

CREATE TABLE grads (
     id INT NOT NULL,
    grad_name TEXT
)

CREATE TABLE subjects (
    id INT NOT NULL,
    name TEXT,
    full_mark INT,
    fail_mark INT
)


CREATE TABLE exam_result(
     id INT NOT NULL,
     name VARCHAR(50) NOT NULL,
     teacher_id INT NOT NULL,
     student_id INT NOT NULL
     );