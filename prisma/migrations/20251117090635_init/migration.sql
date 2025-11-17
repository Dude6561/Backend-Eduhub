/*
  Warnings:

  - The primary key for the `Semester` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Subject` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `courseId` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the column `semesterName` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the `SubDetail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `semesterId` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."SubDetail" DROP CONSTRAINT "SubDetail_subjectName_semesterName_courseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Subject" DROP CONSTRAINT "Subject_semesterName_courseId_fkey";

-- AlterTable
ALTER TABLE "Semester" DROP CONSTRAINT "Semester_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Semester_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_pkey",
DROP COLUMN "courseId",
DROP COLUMN "semesterName",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "semesterId" INTEGER NOT NULL,
ADD CONSTRAINT "Subject_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "public"."SubDetail";

-- CreateTable
CREATE TABLE "Year" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "Year_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "url1" TEXT NOT NULL,
    "url2" TEXT,
    "yearId" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Year" ADD CONSTRAINT "Year_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
