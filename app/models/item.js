import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("number"),
  image: DS.attr("string"),
  description: DS.attr("string"),
  quantityInStock: DS.attr(),
  purchaseQuantity: DS.attr(),
  categories: DS.hasMany("category", {async: true}),
  rating: DS.attr(),
  // feedback: DS.belongsTo("category", {async: true})
});
