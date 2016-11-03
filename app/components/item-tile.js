import Ember from 'ember';

export default Ember.Component.extend({
    cart: Ember.inject.service(),
    actions: {
      addToCart(item){
        this.get('cart').add(item);
      },
      destroyItem(item){
        console.log("success");
        this.sendAction('removeItem', item);
      },
      addCategoryToItem(item){
        var category_id = $("#category_id2"+item.get('id')).val();
        console.log(category_id);
        this.sendAction('addCategoryToItem', item, category_id);
      }
    }
});
