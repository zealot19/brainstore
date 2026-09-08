import { test } from 'node:test';
import assert from 'node:assert/strict';
import { flatten, unflatten } from '../lib/flatten.mjs';

test('flatten nests dotted keys', () => {
  assert.deepEqual(flatten({ shared: { actions: { save: 'S' } } }), { 'shared.actions.save': 'S' });
});

test('unflatten is the inverse of flatten', () => {
  const obj = { shared: { actions: { save: 'S', cancel: 'C' } } };
  assert.deepEqual(unflatten(flatten(obj)), obj);
});
