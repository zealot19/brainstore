export function flatten(obj, prefix = '', out = {}) {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) flatten(v, key, out);
    else out[key] = v;
  }
  return out;
}

export function unflatten(map) {
  const root = {};
  for (const [key, val] of Object.entries(map)) {
    const parts = key.split('.');
    let node = root;
    for (let i = 0; i < parts.length - 1; i++) node = node[parts[i]] ??= {};
    node[parts[parts.length - 1]] = val;
  }
  return root;
}
