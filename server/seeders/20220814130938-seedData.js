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
      name: 'Geraldy Dalos',
      SidangId: 1,
      birthDate: '2000-01-17',
      birthPlace: 'Manado'
    },
    {
      name: 'Timothy Kakambong',
      SidangId: 1,
      birthDate: '2000-02-17',
      birthPlace: 'Manado'
    },
    {
      name: 'Yosua Oroh',
      SidangId: 1,
      birthDate: '2000-03-17',
      birthPlace: 'Manado'
    },
    {
      name: 'Teguh Timporok',
      SidangId: 1,
      birthDate: '2000-04-17',
      birthPlace: 'Manado'
    },
    {
      name: 'Timotheos Liow',
      SidangId: 8,
      birthDate: '2000-05-17',
      birthPlace: 'Manado'
    },
    {
      name: 'Roy Liow',
      SidangId: 8,
      birthDate: '2000-06-17',
      birthPlace: 'Manado'
    },
    {
      name: 'Yoshua Ua',
      SidangId: 8,
      birthDate: '2000-07-17',
      birthPlace: 'Manado'
    },
  ]

    data.map(e => {
      e.createdAt = new Date()
      e.updatedAt = new Date()
      return e
    })

     await queryInterface.bulkInsert('Data', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Data', null, {});
  }
};
