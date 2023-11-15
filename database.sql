CREATE TABLE "employees" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100)
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "emp_id" INT REFERENCES "employees"("id"),
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "date" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "hours_total" INT,
    "tip_total" INT,
    "cash_tips" INT,
    "cc_tips" INT
);

CREATE TABLE "tips" (
    "id" SERIAL PRIMARY KEY,
    "date_id" INT REFERENCES "date"("id"),
    "emp_id" INT REFERENCES "employees"("id"),
    "hours" INT,
    "share_total" INT,
    "share_cash" INT,
    "share_cc" INT
);

-- test data

INSERT INTO "date" ("date", "tip_total", "cash_tips", "cc_tips") 
VALUES ('1999-01-01', 400, 200, 200);

INSERT INTO "employees" ("name")
VALUES ('Dave'), ('Joshua'), ('Mike'), ('Brendan');

INSERT INTO "tips" ("date_id", "emp_id", "share_total", "share_cash", "share_cc")
VALUES (1, 1, 100, 50, 50), (1, 2, 100, 50, 50), (1, 3, 100, 50, 50), (1, 4, 100, 50, 50); 

-- test SQL queries

SELECT "name", "date", "share_total", "share_cash", "share_cc"
FROM "tips" 
JOIN "date" on "tips"."date_id" = "date"."id"
JOIN "employees" ON "tips"."emp_id" = "employees"."id";

SELECT "name", "date", "share_total", "share_cash", "share_cc"
FROM "tips" 
JOIN "date" on "tips"."date_id" = "date"."id"
JOIN "employees" ON "tips"."emp_id" = "employees"."id"
WHERE "employees"."id" = 1;
