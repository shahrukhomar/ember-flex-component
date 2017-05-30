import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('i-ps-wrapper', 'Integration | Component | i ps wrapper', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{i-ps-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#i-ps-wrapper}}
      template block text
    {{/i-ps-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
