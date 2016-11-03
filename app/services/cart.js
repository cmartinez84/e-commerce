import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  add(item) {
    this.get('items').pushObject(item);
    var subtotal = parseInt(item.get('price')) * parseInt(item.get('purchaseQuantity'));
    var newTotal = this.get('total') + subtotal;
    this.set("total", newTotal);
  },
  remove(item) {
    var index = this.get('items').indexOf(item);
    this.get('items').splice(index, 1);
    var subtotal = parseInt(item.get('price')) * parseInt(item.get('purchaseQuantity'));
    var newTotal = this.get('total') - subtotal;
    this.set("total", newTotal);
  }

});
