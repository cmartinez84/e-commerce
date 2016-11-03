import Ember from 'ember';

export default Ember.Service.extend({
  authenticated: false,
  userName: "chris",
  email: "email",
    signIn(params){
      console.log(params);
      this.set('authenticated', true);
      this.set('email', params.email);
      this.set('userName', params.userName);
    },
    signOut(){
      this.set('authenticated', false);
      this.set('email', null);
      this.set('userName', null);
    }
});
