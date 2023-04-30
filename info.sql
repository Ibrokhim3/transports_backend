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

CREATE TABLE transport_permissions(
  staff_id VARCHAR UNIQUE NOT NULL REFERENCES staffs(staff_id) ON DELETE CASCADE,
  create_p BOOLEAN DEFAULT false,
  read_P BOOLEAN DEFAULT false,
  update_p BOOLEAN DEFAULT false,
  delete_p BOOLEAN DEFAULT false

);

CREATE TABLE branch_permissions(
  staff_id VARCHAR UNIQUE NOT NULL REFERENCES staffs(staff_id) ON DELETE CASCADE,
  create_p BOOLEAN DEFAULT false,
  read_P BOOLEAN DEFAULT false,
  update_p BOOLEAN DEFAULT false,
  delete_p BOOLEAN DEFAULT false

);

CREATE TABLE permission_permissions(
  staff_id VARCHAR UNIQUE NOT NULL REFERENCES staffs(staff_id) ON DELETE CASCADE,
  create_p BOOLEAN DEFAULT false,
  read_P BOOLEAN DEFAULT false,
  update_p BOOLEAN DEFAULT false,
  delete_p BOOLEAN DEFAULT false

);




INSERT INTO branches(branch_name, branch_address) VALUES ('Andijon filiali', 'Andijon sh., Nurafshon ko"chasi, 45-b');


CREATE TABLE jwt(
  staff_id VARCHAR,
  token VARCHAR UNIQUE
);

ALTER TABLE jwt
DROP CONSTRAINT jwt_staff_id_key (staff_id);

INSERT INTO branch_permissions(staff_id) VALUES ('6f1986ac-4e04-41ba-b868-0e763fd92e2d')

UPDATE permission_pms SET create_p=true, read_p=true, update_p=true, delete_p=true where staff_id = '41355d0e-4a9d-4b57-8ba8-c2393b09bba9';


ALTER TABLE transport_permissions RENAME TO transport_pms;


