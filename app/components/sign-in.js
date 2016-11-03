import Ember from 'ember';

export default Ember.Component.extend({
  user: Ember.inject.service(),

  actions: {
    signIn(){
      var params= {
        userName: this.get('signInUserName'),
        password: this.get('signInPassword'),
        user: this.get('user')
      };
      // console.log(params.user.get('email'));
      this.sendAction("signIn", params);
    },
    signOut(){
      this.get('user').signOut();
    }
  }
});
