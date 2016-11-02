import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      items: this.store.findAll('item'),
      categories: this.store.findAll('category')
    });
  },
    actions: {
      createNewProduct(params){
        var newProduct = this.store.createRecord('item', params);
        newProduct.save();
        this.transitionTo('index');
      },
      addNewCategory(params){
        var newCategory = this.store.createRecord('category', params);
        newCategory.save();
        this.transitionTo('index');
      }
  }
});
