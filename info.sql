CREATE DATABASE transports_db;

CREATE TABLE staffs(
  staff_id VARCHAR UNIQUE NOT NULL gen_random_uuid(),
  username VARCHAR UNIQUE NOT NULL,
  birth_date DATE NOT NULL,
  gender VARCHAR(20) NOT NULL,
  branch VARCHAR REFERENCES branches(branch_id) ON DELETE CASCADE
)

CREATE TABLE branches(
  branch_id VARCHAR UNIQUE NOT NULL gen_random_uuid(),
  branch_name VARCHAR UNIQUE NOT NULL,
  created_date TIMESTAMP(0) DEFAULT current_timestamp,
  branch_address VARCHAR(100) NOT NULL,
)





