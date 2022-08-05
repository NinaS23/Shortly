CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE TABLE "sessions" (
    id integer NOT NULL,
    closeat TIMESTAMP WITHOUT TIME ZONE,
    "createdAt" TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW() NOT NULL ,
    "userId"INTEGER NOT NULL REFERENCES "users"("id"),
    token TEXT NOT NULL
);


CREATE TABLE "urls" (
    "id" SERIAL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "createdAt" TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW() NOT NULL,
    "views" INTEGER DEFAULT 0,
);

CREATE TABLE "shortUrl" (
    "id" SERIAL PRIMARY KEY,
    "shortUrl" VARCHAR(10) NOT NULL,
    "urlId" INTEGER NOT NULL REFERENCES "urls"("id"),
    "createdAt" TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW() NOT NULL
);