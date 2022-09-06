'use strict';

const bcrypt = require('bcryptjs')

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
      username: 'admin1',
      password: bcrypt.hashSync('12345')
    },{
      username: 'admin2',
      password: bcrypt.hashSync('12345')
    },{
      username: 'admin3',
      password: bcrypt.hashSync('12345')
    },]

    data.map(e => {
      e.createdAt = new Date()
      e.updatedAt = new Date()
      return e
    })

     await queryInterface.bulkInsert('Users', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
