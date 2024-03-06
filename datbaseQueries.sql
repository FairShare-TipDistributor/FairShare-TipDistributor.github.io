
-- test data

SELECT "name", "date", "share_total", "share_cash", "share_cc"
FROM "tips" 
JOIN "date" on "tips"."date_id" = "date"."id"
JOIN "employees" ON "tips"."emp_id" = "employees"."id";

SELECT "name", "date", "share_total", "share_cash", "share_cc"
FROM "tips" 
JOIN "date" on "tips"."date_id" = "date"."id"
JOIN "employees" ON "tips"."emp_id" = "employees"."id"
WHERE "employees"."id" = 1;


SELECT * FROM "employees";

SELECT * FROM "tips";

SELECT * FROM "user";

SELECT * FROM "date";

---- DELETE TABLES ----
-- DROP TABLE "employees";
-- DROP TABLE "tips";
-- DROP TABLE "user";
-- DROP TABLE "tips";
-- DROP TABLE "date";
---- DELETE TABLES ----