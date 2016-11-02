import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("number"),
  image: DS.attr("string"),
  description: DS.attr("string"),
  // category: DS.belongsTo("category", {async: true}),
  // feedback: DS.belongsTo("category", {async: true})
});
