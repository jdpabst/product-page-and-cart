-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imageThumbnail" TEXT NOT NULL,
    "imageMobile" TEXT NOT NULL,
    "imageTablet" TEXT NOT NULL,
    "imageDesktop" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);
