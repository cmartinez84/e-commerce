import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    var index = this.get('items').indexOf(item);
    this.get('items').splice(index, 1);
  }
});
