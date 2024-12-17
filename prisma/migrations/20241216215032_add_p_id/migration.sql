/*
  Warnings:

  - Added the required column `pId` to the `Keys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Keys" ADD COLUMN     "pId" INTEGER NOT NULL;
