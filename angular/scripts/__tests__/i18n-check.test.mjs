import { test } from 'node:test';
import assert from 'node:assert/strict';
import { diffKeys } from '../i18n-check.mjs';

test('diffKeys reports missing and extra keys against fr', () => {
  const fr = { a: '1', b: '2' };
  const other = { a: '1', c: '3' };
  const d = diffKeys(fr, other);
  assert.deepEqual(d.missing, ['b']);
  assert.deepEqual(d.extra, ['c']);
});

test('diffKeys is clean when key sets match', () => {
  const d = diffKeys({ a: '1' }, { a: 'x' });
  assert.deepEqual(d.missing, []);
  assert.deepEqual(d.extra, []);
});
