import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    doAdd() {
      this.get('onAdd')(this.get('value'));
    }
  }
});
