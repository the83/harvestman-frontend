import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hm-footer', 'Integration | Component | hm footer', {
  integration: true
});

test('it displays the copyright', function(assert) {
  this.render(hbs`{{hm-footer}}`);
  assert.ok((this.$().text().trim()).match(/©/));
});
