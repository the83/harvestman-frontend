import BaseRoute from 'harvestman-frontend/product/base/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default BaseRoute.extend(AuthenticatedRouteMixin, {
  actions: {
    deleteImage(image) {
      image.deleteRecord();
      image.save();
    },

    deleteFirmware(firmware) {
      firmware.deleteRecord();
      firmware.save();
    },

    deleteManual(manual) {
      manual.deleteRecord();
      manual.save();
    },
  }
});
