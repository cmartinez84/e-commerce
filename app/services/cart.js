import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  add(item) {
    this.get('items').pushObject(item);
    // console.log(item.get('name'));
    var newTotal = this.get('total') + parseInt(item.get('price'));
    this.set("total", newTotal);
  },
  remove(item) {
    var index = this.get('items').indexOf(item);
    this.get('items').splice(index, 1);
    var newTotal = this.get('total') - parseInt(item.get('price'));
    this.set("total", newTotal);
  }

});
