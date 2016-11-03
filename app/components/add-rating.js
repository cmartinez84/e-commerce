
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addRating(toRate, rating){
      console.log(toRate);
      this.sendAction('addRating', toRate, rating);

    }
  }
});
