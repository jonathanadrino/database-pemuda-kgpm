'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let data = [{
      name: 'Tesalonika Tanjung Batu',
      cityOrRegency: 'Manado',
      wilayah: 18,
    },
    {
      name: 'Bahtera Ranotana',
      cityOrRegency: 'Manado',
      wilayah: 18,
    },
    {
      name: 'Apostolik Malalayang',
      cityOrRegency: 'Manado',
      wilayah: 18,
    },
    {
      name: 'Anugerah Bahu',
      cityOrRegency: 'Manado',
      wilayah: 18,
    },
    {
      name: 'Eben Haezar Bahu',
      cityOrRegency: 'Manado',
      wilayah: 18,
    },
    {
      name: 'Mesias Ranomuut',
      cityOrRegency: 'Manado',
      wilayah: 18,
    },
    {
      name: 'Bukit Ararat Karombasan',
      cityOrRegency: 'Manado',
      wilayah: 18,
    },
    {
      name: 'Air Hidup Malalayang 1 Timur',
      cityOrRegency: 'Manado',
      wilayah: 19,
    },]

    data.map(e => {
      e.createdAt = new Date()
      e.updatedAt = new Date()
      return e
    })

     await queryInterface.bulkInsert('Sidangs', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Sidangs', null, {});
  }
};
