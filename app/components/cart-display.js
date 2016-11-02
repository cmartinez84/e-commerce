import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),
  refresh: true,
  actions: {
    removeItem(item) {
      this.get('cart').remove(item);
      this.set('cart', null);
      this.set('cart', Ember.inject.service());
    }
  }
});
