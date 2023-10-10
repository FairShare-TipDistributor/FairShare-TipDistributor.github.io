CREATE TABLE "tips_date" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "tip_total" INT,
    "cash_tips" INT,
    "cc_tips" INT
);

CREATE TABLE "tips" (
    "id" SERIAL PRIMARY KEY,
    "date_id" INT REFERENCES "tips_date"("id"),
    "name" VARCHAR(100),
    "share" INT
);


-- Test inserts. When we insert date and tip total, we can return tips_date.id to insert into tips.date_id and reference tip information per date

INSERT INTO "tips_date" ("date", "tip_total")
VALUES ('1999-01-01', 500)
RETURNING "id";

INSERT INTO "tips" ("date_id", "name", "share")
VALUES (2, 'Tim', 250);

SELECT "name", "share"
FROM "tips"
JOIN "tips_date" on "date_id" = "tips_date"."id";
