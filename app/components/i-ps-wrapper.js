import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['test'],
  hasSelect: true,
  actions: {
    didChange() {
      console.log('did change', arguments);
    },

    didClear() {
      this.set('selected', null);
    },
    didAdd(value) {
      this.get('options').pushObject(value);
    }
  }
});


