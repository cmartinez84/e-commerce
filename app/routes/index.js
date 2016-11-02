import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      items: this.store.findAll('item'),
      categories: this.store.findAll('category')
    });
  },
    actions: {
      createNewProduct(params){
        var newItem = this.store.createRecord('item', params);
        console.log(params.category);
        var category = this.store.findRecord('category', params.category).then(function(stuff) {
            stuff.destroyRecord();
        });
        console.log(category);
        category.get('items').addObject(newItem);
        newItem.save();
        this.transitionTo('index');
      },
      addNewCategory(params){
        var newCategory = this.store.createRecord('category', params);
        newCategory.save();
        this.transitionTo('index');
      },
      destroy(item){
        item.destroyRecord();
        this.transitionTo('index');
      }
  }
});
