import Ember from 'ember';

export function firmwareName(params/*, hash*/) {
  const firmware = params[0];
  return firmware.get('name') || firmware.get('firmware.url');
}

export default Ember.Helper.helper(firmwareName);
