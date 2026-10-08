/** Entitlement par item de menu : autorisé si aucun module requis, superadmin,
 *  ou module inclus dans l'offre. L'admin d'institution NE contourne PAS (hasModule le gère). */
export function moduleAllowed(
  module: string | undefined,
  isSuperAdmin: boolean,
  hasModule: (m: string) => boolean,
): boolean {
  return !module || isSuperAdmin || hasModule(module);
}
