import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createNewUser(){
      var params = {
        name: this.get('newUserName'),
        userName: this.get('newUserUserName'),
        email: this.get('newUserEmail'),
        password: this.get('newUserPassword'),
      };
      this.sendAction("createNewUser", params);
    }
  }
});
