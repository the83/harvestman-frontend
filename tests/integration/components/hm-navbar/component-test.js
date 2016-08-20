import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hm-navbar', 'Integration | Component | hm navbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hm-navbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hm-navbar}}
      template block text
    {{/hm-navbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
