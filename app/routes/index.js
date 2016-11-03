import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service(),

  model(){
    return Ember.RSVP.hash({
      items: this.store.findAll('item'),
      categories: this.store.findAll('category'),

    });
  },
    actions: {
      createNewProduct(params){
        var _this = this;
        var newItem = this.store.createRecord('item', params);
        this.store.findRecord('category', params.category).then(function(category) {
          category.get('items').addObject(newItem);
          newItem.save();
          category.save();
          _this.transitionTo('index');
        });
      },
      addNewCategory(params){
        var newCategory = this.store.createRecord('category', params);
        newCategory.save();
        this.transitionTo('index');
      },
      removeItem(item){

        var thisScope = this;
        var allItemCategories = [];
        item.get('categories').forEach(function(category){
          allItemCategories.push(category.get('id'));
        });
        allItemCategories.forEach(function(category_id){
          this.store.findRecord('category', category_id).then(function(category){
            category.get('items').forEach(function(category_item){
            if(category_item.get('id') === item.get('id')){
              var temp = category.get('items');
              temp.removeObject(item);
            }
            })
            category.save();
          });
        }, this);
        console.log(allItemCategories);
        item.destroyRecord();
        this.transitionTo('index');
      },
      addCategoryToItem(item, category_id){
        this.store.findRecord('category',category_id).then(function(category){
         item.get('categories').addObject(category);
          category.get('items').addObject(item)

          item.save();
          category.save();
        });
      },
      createNewUser(params){
        var newUser = this.store.createRecord('user', params);
        newUser.save();
      },
      signIn(params){
        var _this = this;
        this.store.query('user', {
          orderBy:'userName',
          equalTo: params.userName
          }).then(function(record){
            var password = record.get('firstObject').get('password');
            if(password === params.password){
              alert("you are logged in");
              var params2 = {
                userName: record.get('firstObject').get('userName'),
                email: record.get('firstObject').get('email')
              };
              _this.get('user').signIn(params2);
            }
            else{
              alert("you are not logged in");
            }
        });
      },
      addRating(toRate, rating){
        // console.log("third");
        toRate.get("rating").push(rating);
        toRate.save();
    },
  }
});
