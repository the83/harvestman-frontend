import { expandLinebreaks } from 'harvestman-frontend/helpers/expand-linebreaks';
import { module, test } from 'qunit';

module('Unit | Helper | expand linebreaks');

// Replace this with your real tests.
test('it replaces newlines with linebreaks', function(assert) {
  const result = expandLinebreaks(['foo \n bar \r baz']);
  assert.equal(result, 'foo <br /> bar <br /> baz');
});
