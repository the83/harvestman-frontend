import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteImage(image) {
      this.sendAction('deleteImage', image);
    }
  }
});
