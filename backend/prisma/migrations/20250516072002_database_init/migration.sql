-- CreateEnum
CREATE TYPE "EROLE" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "ESlotStatus" AS ENUM ('AVAILABLE', 'OCCUPIED');

-- CreateEnum
CREATE TYPE "ESlotType" AS ENUM ('BIKE', 'CAR', 'EV');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "EROLE" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" TEXT NOT NULL,
    "plate_number" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parking_slots" (
    "id" TEXT NOT NULL,
    "slot_number" TEXT NOT NULL,
    "slot_status" "ESlotStatus" NOT NULL,
    "floor" INTEGER NOT NULL,
    "slot_type" "ESlotType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "parking_slots_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_plate_number_key" ON "vehicles"("plate_number");

-- CreateIndex
CREATE UNIQUE INDEX "parking_slots_slot_number_key" ON "parking_slots"("slot_number");

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
