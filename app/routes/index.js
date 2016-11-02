import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      items: this.store.findAll('item'),
    });
  },
    actions: {
      createNewProduct(params){
        var newProduct = this.store.createRecord('item', params);
        newProduct.save();
        this.transitionTo('index');
      }
  }
});
