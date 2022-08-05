CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "urls" (
    "id" SERIAL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "createdAt" TIMESTAMP DEFAULT NOW(),
    "views" INTEGER DEFAULT 0,
);

CREATE TABLE "shortUrl" (
    "id" SERIAL PRIMARY KEY,
    "shortUrl" VARCHAR(10) NOT NULL,
    "urlId" INTEGER NOT NULL REFERENCES "urls"("id"),
    "createdAt" TIMESTAMP DEFAULT NOW()
);