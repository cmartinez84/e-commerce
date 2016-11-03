import Ember from 'ember';

export default Ember.Component.extend({
    cart: Ember.inject.service(),
    actions: {
      addToCart(item){
        var item_id = item.get("id");
        var quantity  = $("#purchasePurchaseQuantity"+item_id).val();
        item.set('purchaseQuantity', quantity);
        // console.log(item.get("purchaseQuantity"));
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
