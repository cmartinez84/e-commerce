import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),
  user: Ember.inject.service(),

  actions: {
    removeItem(item) {
      this.get('cart').remove(item);
      this.set('cart', null);
      this.set('cart', Ember.inject.service());
    }
  }
});
