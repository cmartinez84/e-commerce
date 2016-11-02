import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createNewProduct(){
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        image: this.get('image'),
        description: this.get('description')
      };
      this.sendAction("createNewProduct", params);
    }
  }
});
