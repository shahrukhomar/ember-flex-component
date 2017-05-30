import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('i-ps-wrapper/i-ps-select', 'Integration | Component | i ps wrapper/i ps select', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{i-ps-wrapper/i-ps-select}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#i-ps-wrapper/i-ps-select}}
      template block text
    {{/i-ps-wrapper/i-ps-select}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
