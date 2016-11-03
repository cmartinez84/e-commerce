import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signIn(){
      var params= {
        userName: this.get('signInUserName'),
        password: this.get('signInPassword')
      };
      this.sendAction("signIn", params);
    }
  }
});
