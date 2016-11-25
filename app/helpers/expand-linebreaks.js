import Ember from 'ember';

export function expandLinebreaks(text) {
  return text[0].replace(/\r+|\n+/g, '<br />');
}

export default Ember.Helper.helper(expandLinebreaks);
