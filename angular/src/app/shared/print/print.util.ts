/**
 * Impression côté client d'un document généré côté serveur, sans ouvrir d'onglet
 * visible : on charge le document dans un <iframe> caché puis on déclenche
 * l'impression au chargement. Le navigateur ouvre alors sa boîte d'impression
 * (imprimante par défaut / connectée). Pas d'impression réellement silencieuse
 * possible depuis un navigateur.
 */

function _printFrame(src: string, revoke: boolean): void {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;';
  iframe.onload = () => {
    try {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    } catch { /* le blocage éventuel n'empêche pas l'affichage du document */ }
    // Nettoyage différé : l'impression est asynchrone (dialogue navigateur).
    setTimeout(() => {
      if (revoke) { try { URL.revokeObjectURL(src); } catch { /* noop */ } }
      iframe.remove();
    }, 60_000);
  };
  iframe.src = src;
  document.body.appendChild(iframe);
}

/** Imprime un Blob (PDF, etc.) via un iframe caché. */
export function printBlob(blob: Blob): void {
  _printFrame(URL.createObjectURL(blob), true);
}

/** Imprime un document HTML (billet, reçu, étiquette) via un iframe caché. */
export function printHtml(html: string): void {
  printBlob(new Blob([html], { type: 'text/html' }));
}
