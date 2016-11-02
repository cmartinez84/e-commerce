import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      items: this.store.findAll('item'),
      categories: this.store.findAll('category')
    });
  },
  actions: {
  }
});
