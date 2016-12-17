import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteManual(manual) {
      this.sendAction('deleteManual', manual);
    }
  }
});
