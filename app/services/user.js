import Ember from 'ember';

export default Ember.Service.extend({
  authenticated: false,
  userName: null,
  email: null,

  actions:{
    signIn(params){
      this.set('authenticated', true);
      this.set('authenticated', params.email);
      this.set('authenticated', params.name);
    },
    signOut(){
      this.set('authenticated', false);
      this.set('authenticated', null);
      this.set('authenticated', null);
    }
  }
});
