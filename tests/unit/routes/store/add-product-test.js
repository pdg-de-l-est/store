import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | store/addProduct', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:store/add-product');
    assert.ok(route);
  });
});
