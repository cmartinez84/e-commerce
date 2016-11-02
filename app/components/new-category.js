import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewCategory(){
      var params = {
        name: this.get('newCategoryName'),
        description: this.get('newCategoryDescription')
      };
      this.sendAction('addNewCategory', params);
    }
  }
});
