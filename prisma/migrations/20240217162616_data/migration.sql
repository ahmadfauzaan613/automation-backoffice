-- CreateTable
CREATE TABLE "DataDummy" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "day" TEXT,
    "month" TEXT,
    "year" TEXT,
    "gender" TEXT,
    "username" TEXT,
    "password" TEXT,
    "noTlp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DataDummy_pkey" PRIMARY KEY ("id")
);
