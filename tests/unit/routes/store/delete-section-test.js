import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | store/delete-section', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:store/delete-section');
    assert.ok(route);
  });
});
