import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    didClick() {
      this.get('onClear')();
    }
  }
});
