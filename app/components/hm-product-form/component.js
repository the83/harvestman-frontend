import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.sendAction();
    },

    deleteImage(image) {
      this.sendAction('deleteImage', image);
    }
  }
});
