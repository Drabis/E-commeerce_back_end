// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
foreingnKey: 'product_id',
onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreingnKey: 'category',
  onDelete: 'CASCADE'
   
});

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through: {
    model: 'product_tag'
  }
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: 'tag'
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
