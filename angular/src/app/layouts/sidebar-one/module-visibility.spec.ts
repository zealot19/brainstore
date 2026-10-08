import { moduleAllowed } from './module-visibility';

describe('moduleAllowed', () => {
  const has = (m: string) => m === 'voyage';            // seul 'voyage' souscrit

  it('autorise un item sans module', () => {
    expect(moduleAllowed(undefined, false, has)).toBe(true);
  });
  it('autorise un item dont le module est souscrit', () => {
    expect(moduleAllowed('voyage', false, has)).toBe(true);
  });
  it('masque un item dont le module n’est pas souscrit', () => {
    expect(moduleAllowed('colis', false, has)).toBe(false);
  });
  it('le superadmin voit tout', () => {
    expect(moduleAllowed('colis', true, has)).toBe(true);
  });
});
