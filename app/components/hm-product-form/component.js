import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.sendAction();
    },

    deleteImage(image) {
      this.sendAction('deleteImage', image);
    },

    deleteFirmware(firmware) {
      this.sendAction('deleteFirmware', firmware);
    },

    deleteManual(manual) {
      this.sendAction('deleteManual', manual);
    }
  }
});
