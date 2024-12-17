-- CreateTable
CREATE TABLE "Keys" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "key" VARCHAR(700) NOT NULL,
    "validUntil" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Keys_pkey" PRIMARY KEY ("id")
);
