import BaseRoute from 'harvestman-frontend/post/base/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default BaseRoute.extend(AuthenticatedRouteMixin,  {
  actions: {
    deleteImage(image) {
      image.deleteRecord();
      image.save();
    }
  }
});
