-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "taskName" VARCHAR(500) NOT NULL,
    "payload" VARCHAR(500) NOT NULL,
    "priority" INTEGER NOT NULL,
    "retries" INTEGER NOT NULL,
    "maxRetries" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
