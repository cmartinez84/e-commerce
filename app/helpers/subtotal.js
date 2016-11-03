import Ember from 'ember';

export function subtotal(params/*, hash*/) {
 var purchaseQuantity = params[0].get('purchaseQuantity');
 var price = params[0].get('price');
 var output = "$" + (price * purchaseQuantity).toFixed(2);
  return output;
}

export default Ember.Helper.helper(subtotal);
