import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | store/edit-product', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:store/edit-product');
    assert.ok(route);
  });
});
