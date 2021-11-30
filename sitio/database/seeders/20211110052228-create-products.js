'use strict';

const faker = require('faker');
const products = [];

for (let i = 0; i < 400; i++) {
  
  var product = {
    name : faker.commerce.productName(),
    description : faker.commerce.productDescription(),
    price : faker.datatype.number({min:100,max:799}),
    priceRegular : faker.datatype.number({min:200,max:999}),
    discount : faker.datatype.number({min : 0,max : 30}),
    categoryId : faker.datatype.number({min:1,max:9}),
    createdAt : new Date,
    updatedAt : null,
    deletedAt : null,
  }

  products.push(product)
  
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Products',products, {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Products', null, {});
     
  }
};
