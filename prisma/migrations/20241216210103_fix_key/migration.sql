/*
  Warnings:

  - Added the required column `publicId` to the `Keys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Keys" ADD COLUMN     "publicId" VARCHAR(30) NOT NULL;
