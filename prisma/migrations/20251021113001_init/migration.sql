/*
  Warnings:

  - The primary key for the `SubDetail` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `SubDetail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SubDetail" DROP CONSTRAINT "SubDetail_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "SubDetail_pkey" PRIMARY KEY ("courseId", "semesterName", "subjectName", "year", "qn");
