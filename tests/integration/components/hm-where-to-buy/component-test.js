import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hm-where-to-buy', 'Integration | Component | hm where to buy', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hm-where-to-buy}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hm-where-to-buy}}
      template block text
    {{/hm-where-to-buy}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
