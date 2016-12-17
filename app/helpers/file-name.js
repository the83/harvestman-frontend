import Ember from 'ember';

export function fileName(params/*, hash*/) {
  const model = params[0];
  const type = params[1];
  return model.get('name') || model.get(type).get('url');
}

export default Ember.Helper.helper(fileName);
