import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | dashboard/detail-commande', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:dashboard/detail-commande');
    assert.ok(controller);
  });
});
