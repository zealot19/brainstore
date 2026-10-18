// L'API tourne sur le port 8000 de la MEME machine qui sert l'interface.
// On derive l'hote depuis l'URL du navigateur : en local => 127.0.0.1, depuis
// un autre PC du reseau => l'IP du serveur (ex http://192.168.1.50:4200 =>
// API http://192.168.1.50:8000). Evite l'erreur "l'app appelle 127.0.0.1 = soi-meme".
const apiHost =
  (typeof window !== 'undefined' && window.location && window.location.hostname)
    ? window.location.hostname
    : '127.0.0.1';

export const environment = {
  production: false,
  apiUrl: `http://${apiHost}:8000/api/v1`,
  // Institution servie par la PWA de réservation en ligne (remplacer par un id réel).
  onlineCompanyId: '00000000-0000-0000-0000-000000000000',
};
