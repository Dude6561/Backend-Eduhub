-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Semester" (
    "name" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Semester_pkey" PRIMARY KEY ("name","courseId")
);

-- CreateTable
CREATE TABLE "Subject" (
    "name" TEXT NOT NULL,
    "semesterName" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("name","semesterName","courseId")
);

-- CreateTable
CREATE TABLE "SubDetail" (
    "id" SERIAL NOT NULL,
    "qn" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "subjectName" TEXT NOT NULL,
    "semesterName" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "SubDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_semesterName_courseId_fkey" FOREIGN KEY ("semesterName", "courseId") REFERENCES "Semester"("name", "courseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubDetail" ADD CONSTRAINT "SubDetail_subjectName_semesterName_courseId_fkey" FOREIGN KEY ("subjectName", "semesterName", "courseId") REFERENCES "Subject"("name", "semesterName", "courseId") ON DELETE RESTRICT ON UPDATE CASCADE;
