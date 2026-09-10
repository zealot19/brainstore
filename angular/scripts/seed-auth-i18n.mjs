#!/usr/bin/env node
// Seeds auth.* : signin, forgot-password, reset-password, lock-screen, two-step.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // signin
  'auth.signin_title': ['Connexion', 'Sign in', 'Iniciar sesión', 'Iniciar sessão'],
  'auth.signin_subtitle': ['Accédez à votre tableau de bord avec votre email et votre mot de passe.', 'Access your dashboard using your email and password.', 'Acceda a su panel con su correo y contraseña.', 'Aceda ao seu painel com o seu e-mail e palavra-passe.'],
  'auth.email': ['Email', 'Email', 'Correo electrónico', 'E-mail'],
  'auth.password': ['Mot de passe', 'Password', 'Contraseña', 'Palavra-passe'],
  'auth.remember_me': ['Se souvenir de moi', 'Remember me', 'Recordarme', 'Lembrar-me'],
  'auth.forgot_password': ['Mot de passe oublié ?', 'Forgot password?', '¿Contraseña olvidada?', 'Esqueceu-se da palavra-passe?'],
  'auth.signin_btn': ['Se connecter', 'Sign in', 'Iniciar sesión', 'Iniciar sessão'],

  // forgot-password
  'auth.forgot_title': ['Mot de passe oublié ?', 'Forgot password?', '¿Contraseña olvidada?', 'Esqueceu-se da palavra-passe?'],
  'auth.forgot_subtitle': ['Saisissez votre email et nous vous enverrons les instructions pour réinitialiser votre mot de passe.', "Enter your email and we'll send you instructions to reset your password.", 'Introduzca su correo y le enviaremos instrucciones para restablecer su contraseña.', 'Introduza o seu e-mail e enviar-lhe-emos instruções para repor a sua palavra-passe.'],
  'auth.email_sent': ['Email envoyé ! Vérifiez votre boîte de réception.', 'Email sent! Check your inbox.', '¡Correo enviado! Revise su bandeja de entrada.', 'E-mail enviado! Verifique a sua caixa de entrada.'],
  'auth.send_reset': ['Envoyer le lien', 'Send reset link', 'Enviar el enlace', 'Enviar a ligação'],
  'auth.return_to': ['Retour à la', 'Return to', 'Volver a', 'Voltar ao'],
  'auth.login_word': ['connexion', 'login', 'inicio de sesión', 'início de sessão'],

  // reset-password
  'auth.reset_title': ['Réinitialiser le mot de passe', 'Reset password', 'Restablecer contraseña', 'Repor palavra-passe'],
  'auth.reset_subtitle': ['Saisissez votre nouveau mot de passe ci-dessous.', 'Enter your new password below.', 'Introduzca su nueva contraseña a continuación.', 'Introduza a sua nova palavra-passe abaixo.'],
  'auth.pwd_updated': ['Mot de passe mis à jour. Redirection vers la connexion...', 'Password updated. Redirecting to login...', 'Contraseña actualizada. Redirigiendo al inicio de sesión...', 'Palavra-passe atualizada. A redirecionar para o início de sessão...'],
  'auth.new_password': ['Nouveau mot de passe', 'New password', 'Nueva contraseña', 'Nova palavra-passe'],
  'auth.min_chars': ['Minimum 8 caractères.', 'Minimum 8 characters.', 'Mínimo 8 caracteres.', 'Mínimo 8 caracteres.'],
  'auth.confirm_password': ['Confirmer le mot de passe', 'Confirm password', 'Confirmar contraseña', 'Confirmar palavra-passe'],
  'auth.pwd_mismatch': ['Les mots de passe ne correspondent pas.', 'Passwords do not match.', 'Las contraseñas no coinciden.', 'As palavras-passe não coincidem.'],
  'auth.change_password': ['Changer le mot de passe', 'Change password', 'Cambiar contraseña', 'Alterar palavra-passe'],

  // lock-screen
  'auth.welcome_back': ['Bon retour !', 'Welcome back!', '¡Bienvenido de nuevo!', 'Bem-vindo de volta!'],
  'auth.password_ph': ['Saisissez votre mot de passe', 'Enter your password', 'Introduzca su contraseña', 'Introduza a sua palavra-passe'],
  'auth.login_btn': ['Se connecter', 'Log in', 'Iniciar sesión', 'Iniciar sessão'],

  // two-step
  'auth.twostep_title': ['Vérification en 2 étapes', '2-step verification', 'Verificación en 2 pasos', 'Verificação em 2 passos'],
  'auth.twostep_subtitle': ["Saisissez le code à 6 chiffres de votre application d'authentification.", 'Enter the 6-digit code from your authenticator app.', 'Introduzca el código de 6 dígitos de su aplicación de autenticación.', 'Introduza o código de 6 dígitos da sua aplicação de autenticação.'],
  'auth.verify': ['Vérifier', 'Verify', 'Verificar', 'Verificar'],
};

const LANGS = ['fr', 'en', 'es', 'pt'];
function setDeep(root, dotted, value) {
  const parts = dotted.split('.');
  let node = root;
  for (let i = 0; i < parts.length - 1; i++) node = node[parts[i]] ??= {};
  node[parts[parts.length - 1]] = value;
}
LANGS.forEach((lang, idx) => {
  const path = `public/i18n/${lang}.json`;
  const json = JSON.parse(readFileSync(path, 'utf8'));
  for (const [key, vals] of Object.entries(T)) setDeep(json, key, vals[idx]);
  writeFileSync(path, JSON.stringify(json, null, 2) + '\n');
  console.log(`${lang}: +${Object.keys(T).length} keys -> ${path}`);
});
