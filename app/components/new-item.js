import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createNewProduct(){
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        image: this.get('image'),
        description: this.get('description'),
        quantityInStock: this.get('quantityInStock'),
        category: $("#category_id").val(),
        purchaseQuantity: 0,
      };
      console.log(params);
      this.sendAction("createNewProduct", params);
    }
  }
});
