'use strict';

const {UserSchema, USER_TABLE} = require('../user.model')



module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role )
  },

  async down (queryInterface) {
   await queryInterface.removeColumn(USER_TABLE, 'role', UserSchema.role )
  }
};
