import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dashboard/detail-commande', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dashboard/detail-commande');
    assert.ok(route);
  });
});
