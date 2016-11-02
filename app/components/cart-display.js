import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),

  actions: {
    removeItem(item) {
      this.get('cart').remove(item);
    }
  }
});
