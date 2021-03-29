import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | gestionStock', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:gestion-stock');
    assert.ok(route);
  });
});
