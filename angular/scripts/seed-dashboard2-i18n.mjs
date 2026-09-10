#!/usr/bin/env node
// Seeds extra dash.* keys for the redesigned home dashboard (header + charts).
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  'dash.hello': ['Bonjour', 'Hello', 'Hola', 'Olá'],
  'dash.chart_activity': ['Activité — 14 derniers jours', 'Activity — last 14 days', 'Actividad — últimos 14 días', 'Atividade — últimos 14 dias'],
  'dash.chart_cashflow': ['Recettes & dépenses — 14 j', 'Income & expenses — 14 days', 'Ingresos y gastos — 14 días', 'Receitas e despesas — 14 dias'],
  'dash.s_bookings': ['Réservations', 'Bookings', 'Reservas', 'Reservas'],
  'dash.s_revenue': ['Recette', 'Revenue', 'Ingresos', 'Receita'],
  'dash.s_income': ['Recettes', 'Income', 'Ingresos', 'Receitas'],
  'dash.s_expense': ['Dépenses', 'Expenses', 'Gastos', 'Despesas'],
  'dash.revenue_month': ['Recette du mois', 'Month revenue', 'Ingresos del mes', 'Receita do mês'],
  'dash.no_activity': ["Pas encore d'activité à afficher.", 'No activity to show yet.', 'Aún no hay actividad que mostrar.', 'Ainda não há atividade para mostrar.'],
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
