import Ember from 'ember';

export default Ember.Component.extend({
    cart: Ember.inject.service(),
    actions: {
      addToCart(item){
        this.get('cart').add(item);
      },
      destroyItem(item){
        this.sendAction('destroy1', item);
      },
      addCategoryToItem(item){
        var category_id = $("#category_id2").val();
        console.log(category_id);
        this.sendAction('addCategoryToItem', item, category_id);
      }
    }
});
