import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    doChange() {
      this.get('didChange')(...arguments);
    }
  }
});
