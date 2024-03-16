
CREATE TABLE "employees" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100)
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "emp_id" INT REFERENCES "employees"("id"),
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (255)
);

CREATE TABLE "date" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "hours_total" NUMERIC,
    "tip_total" NUMERIC,
    "cash_tips" NUMERIC,
    "cc_tips" NUMERIC
);

CREATE TABLE "tips" (
    "id" SERIAL PRIMARY KEY,
    "date_id" INT REFERENCES "date"("id"),
    "emp_id" INT REFERENCES "employees"("id"),
    "hours" NUMERIC,
    "share_total" NUMERIC,
    "share_cash" NUMERIC,
    "share_cc" NUMERIC
);

------ Test Data -----
INSERT INTO "date" ("date", "tip_total", "cash_tips", "cc_tips") 
VALUES ('1999-01-01', 400, 200, 200);

INSERT INTO "employees" ("name")
VALUES ('Dave'), ('Joshua'), ('Mike'), ('Brendan');

INSERT INTO "tips" ("date_id", "emp_id", "share_total", "share_cash", "share_cc")
VALUES (1, 1, 100, 50, 50), (1, 2, 100, 50, 50), (1, 3, 100, 50, 50), (1, 4, 100, 50, 50); 

-- Test admin and employee users --
INSERT INTO "user" ("emp_id", "username", "password", "email")
VALUES
	(1, 'admin1', '$2a$10$f4pIRStoYUPa7..hc1QEnu0grt/GX5AEMZbf.njAHx6zeKDsNvITq','admin1@gmail.com' ),  -- password is admin1
	(2, 'employee1', '$2a$10$.bWzkvOOeikAUZPFuWL25u0pspjzVuApHgVJ3Fb.BezjbCqdrX.lO', 'employee1@gmail.com'),  -- password is employee1
	(3, 'user1', '$2a$10$P/D2xUNJdR6WIZ1antQBl.YWTipLqoLXuhNBCBWHdnH5QxwYTTjK', 'user1@gmail.com');  -- password is user1

