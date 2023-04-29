CREATE DATABASE transports_db;

CREATE TABLE staffs(
  staff_id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  username VARCHAR UNIQUE NOT NULL,
  birth_date DATE NOT NULL,
  gender VARCHAR(20) NOT NULL,
  branch VARCHAR REFERENCES branches(branch_id) ON DELETE CASCADE
);

CREATE TABLE branches(
  branch_id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  branch_name VARCHAR UNIQUE NOT NULL,
  created_date TIMESTAMP(0) DEFAULT current_timestamp,
  branch_address VARCHAR(100) NOT NULL
);

CREATE TABLE transports(
  transport_id  VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  model VARCHAR UNIQUE NOT NULL,
  branch VARCHAR NOT NULL REFERENCES branches(branch_id) ON DELETE CASCADE,
  color VARCHAR(50) NOT NULL,
  created_date TIMESTAMP(0) DEFAULT current_timestamp
);

CREATE TABLE images(
  image_id  VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  transport_id VARCHAR UNIQUE NOT NULL REFERENCES transports(transport_id) ON DELETE CASCADE,
  image_url VARCHAR NOT NULL,
  size NUMERIC
);

CREATE TABLE permissions(
  staff_id VARCHAR UNIQUE NOT NULL REFERENCES staffs(staff_id) ON DELETE CASCADE,
  create_p BOOLEAN DEFAULT false,
  read_P BOOLEAN DEFAULT false,
  update_p BOOLEAN DEFAULT false,
  delete_p BOOLEAN DEFAULT false,
  transport_module BOOLEAN DEFAULT false,
  branch_module BOOLEAN DEFAULT false,
  permission_module BOOLEAN DEFAULT false
);




INSERT INTO branches(branch_name, branch_address) VALUES ('Andijon filiali', 'Andijon sh., Nurafshon ko"chasi, 45-b');


CREATE TABLE jwt(
  staff_id VARCHAR,
  token VARCHAR UNIQUE
);

ALTER TABLE jwt
DROP CONSTRAINT jwt_staff_id_key (staff_id);




