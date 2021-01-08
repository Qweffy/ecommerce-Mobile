"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert("products", [
      {
        name: "Huawei P30",
        processor: "Kirin 980",
        screen: "OLED 6,1 pulgadas 19,5:9 1.080 x 2.340 px",
        ram: "6 GB",
        storage: "128 GB",
        camara: "40 MP",
        frontcamara: "32 MP",
        battery: "3.650 mAh",
        others: "Fingerprint, Jack 3,5 mm ",
        dimensions: "71,36 x 149,1 x 7,57 mm 165 gr",
        price: "820",
        stock: "13",
        img: "https://i.ibb.co/jLYT6bj/HUAWEI-P30-PNG.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ASUS ROG Phone 3",
        processor: "Snapdragon 865+",
        screen: "AMOLED 6,59 ",
        ram: "16 GB LPDDR5",
        storage: "512 GB",
        camara: "64 MP",
        frontcamara: "24 MP",
        battery: "6.000 mAh",
        others: "Cooler GameCool 3, Fingerprint",
        dimensions: "171 x 78 x 9,85 mm, 240 g",
        price: "630",
        stock: "2",
        img: "https://i.ibb.co/V0GzPHL/Asus-rogphone-3-PNG.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Galaxy S20",
        processor: "Exynos 990 Octa-core",
        screen: "Dynamic AMOLED 6,2",
        ram: "12 GB LPDDR5",
        storage: "128 GB + MicroSD 1 TB",
        camara: "64 MP",
        frontcamara: "10 MP",
        battery: "4.000 mAh",
        others: "Fingerprint, Facial Recognition",
        dimensions: "151,7 x 69,1 x 7,9 mm, 163 g",
        price: "599",
        stock: "23",
        img: "https://i.ibb.co/xzys7kJ/GALAXY-S20-PNG.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blackview9700",
        processor: "4x 2.1GHz ARM Cortex A73",
        screen: "5.84″ 	LCD IPS",
        ram: "6 GB",
        storage: "128 GB",
        camara: "6  MP + 8 MP",
        frontcamara: "16 MP",
        battery: "4380 mAh",
        others: "IP68",
        dimensions: "283 g 81.3 mm • 165.9 mm • 16.5 mm",
        price: "309",
        stock: "4",
        img: "https://i.ibb.co/dmcFQHH/Blackview-Bv9700-PNG.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete("products", null, {});
  },
};
