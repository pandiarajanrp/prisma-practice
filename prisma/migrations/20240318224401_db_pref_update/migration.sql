/*
  Warnings:

  - You are about to drop the column `preferences` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserPreference` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[preferenceId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserPreference" DROP CONSTRAINT "UserPreference_userId_fkey";

-- DropIndex
DROP INDEX "UserPreference_userId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "preferences",
ADD COLUMN     "preferenceId" TEXT;

-- AlterTable
ALTER TABLE "UserPreference" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "User_preferenceId_key" ON "User"("preferenceId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_preferenceId_fkey" FOREIGN KEY ("preferenceId") REFERENCES "UserPreference"("id") ON DELETE SET NULL ON UPDATE CASCADE;
