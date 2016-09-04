import Ember from 'ember';

export function expandLinebreaks(text) {
  return text[0].replace(/\n\r?/g, '<br />');
}

export default Ember.Helper.helper(expandLinebreaks);
