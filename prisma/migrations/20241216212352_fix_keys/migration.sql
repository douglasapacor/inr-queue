/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Keys` table. All the data in the column will be lost.
  - You are about to drop the column `publicId` on the `Keys` table. All the data in the column will be lost.
  - You are about to drop the column `validUntil` on the `Keys` table. All the data in the column will be lost.
  - Added the required column `active` to the `Keys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Keys" DROP COLUMN "createdAt",
DROP COLUMN "publicId",
DROP COLUMN "validUntil",
ADD COLUMN     "active" BOOLEAN NOT NULL;
