import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | store/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:store/detail');
    assert.ok(route);
  });
});
