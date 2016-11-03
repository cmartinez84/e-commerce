import Ember from 'ember';

export function dollarSign(params/*, hash*/) {
  var amount = parseInt(params[0]);
  var output;
  if(!isNaN(amount)){
     output= "$" +amount.toFixed(2);
  }
  else{
    output = "mutton";
  }
  return output;
}

export default Ember.Helper.helper(dollarSign);
