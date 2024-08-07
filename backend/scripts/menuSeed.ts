import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
 await prisma.menu.createMany({
  data: [
   {
    "imageThumbnail": "./assets/images/image-waffle-thumbnail.jpg",
    "imageMobile": "./assets/images/image-waffle-mobile.jpg",
    "imageTablet": "./assets/images/image-waffle-tablet.jpg",
    "imageDesktop": "./assets/images/image-waffle-desktop.jpg",
    "name": "Waffle with Berries",
    "category": "Waffle",
    "price": 6.50
   },
   {
    "imageThumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
    "imageMobile": "./assets/images/image-creme-brulee-mobile.jpg",
    "imageTablet": "./assets/images/image-creme-brulee-tablet.jpg",
    "imageDesktop": "./assets/images/image-creme-brulee-desktop.jpg",
    "name": "Vanilla Bean Crème Brûlée",
    "category": "Crème Brûlée",
    "price": 7.00
   },
   {
    "imageThumbnail": "./assets/images/image-macaron-thumbnail.jpg",
    "imageMobile": "./assets/images/image-macaron-mobile.jpg",
    "imageTablet": "./assets/images/image-macaron-tablet.jpg",
    "imageDesktop": "./assets/images/image-macaron-desktop.jpg",
    "name": "Macaron Mix of Five",
    "category": "Macaron",
    "price": 8.00
   },
   {
    "imageThumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
    "imageMobile": "./assets/images/image-tiramisu-mobile.jpg",
    "imageTablet": "./assets/images/image-tiramisu-tablet.jpg",
    "imageDesktop": "./assets/images/image-tiramisu-desktop.jpg",
    "name": "Classic Tiramisu",
    "category": "Tiramisu",
    "price": 5.50
   },
   {
    "imageThumbnail": "./assets/images/image-baklava-thumbnail.jpg",
    "imageMobile": "./assets/images/image-baklava-mobile.jpg",
    "imageTablet": "./assets/images/image-baklava-tablet.jpg",
    "imageDesktop": "./assets/images/image-baklava-desktop.jpg",
    "name": "Pistachio Baklava",
    "category": "Baklava",
    "price": 4.00
   },
   {
    "imageThumbnail": "./assets/images/image-meringue-thumbnail.jpg",
    "imageMobile": "./assets/images/image-meringue-mobile.jpg",
    "imageTablet": "./assets/images/image-meringue-tablet.jpg",
    "imageDesktop": "./assets/images/image-meringue-desktop.jpg",
    "name": "Lemon Meringue Pie",
    "category": "Pie",
    "price": 5.00
   },
   {
    "imageThumbnail": "./assets/images/image-cake-thumbnail.jpg",
    "imageMobile": "./assets/images/image-cake-mobile.jpg",
    "imageTablet": "./assets/images/image-cake-tablet.jpg",
    "imageDesktop": "./assets/images/image-cake-desktop.jpg",
    "name": "Red Velvet Cake",
    "category": "Cake",
    "price": 4.50
   },
   {
    "imageThumbnail": "./assets/images/image-brownie-thumbnail.jpg",
    "imageMobile": "./assets/images/image-brownie-mobile.jpg",
    "imageTablet": "./assets/images/image-brownie-tablet.jpg",
    "imageDesktop": "./assets/images/image-brownie-desktop.jpg",
    "name": "Salted Caramel Brownie",
    "category": "Brownie",
    "price": 4.50
   },
   {
    "imageThumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
    "imageMobile": "./assets/images/image-panna-cotta-mobile.jpg",
    "imageTablet": "./assets/images/image-panna-cotta-tablet.jpg",
    "imageDesktop": "./assets/images/image-panna-cotta-desktop.jpg",
    "name": "Vanilla Panna Cotta",
    "category": "Panna Cotta",
    "price": 6.50
   }
  ]

 });
}

main()
 .catch(e => {
  console.error(e);
  process.exit(1);
 })
 .finally(async () => {
  await prisma.$disconnect();
 });
