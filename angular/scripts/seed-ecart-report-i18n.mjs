#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'treasury.session.report':   ['Rapport', 'Report', 'Informe', 'Relatório'],
  'treasury.session.closed_at':['Clôturée le', 'Closed at', 'Cerrada el', 'Fechada em'],
  'treasury.ecart.hint':       ['En cas d’écart, indiquez le motif (obligatoire).', 'If there is a discrepancy, give the reason (required).', 'Si hay diferencia, indique el motivo (obligatorio).', 'Em caso de diferença, indique o motivo (obrigatório).'],
  'treasury.ecart.reason':     ['Motif d’écart', 'Discrepancy reason', 'Motivo de la diferencia', 'Motivo da diferença'],
  'treasury.ecart.no_reason':  ['— Aucun (pas d’écart) —', '— None (no discrepancy) —', '— Ninguno (sin diferencia) —', '— Nenhum (sem diferença) —'],
  'treasury.ecart.note':       ['Précision', 'Note', 'Detalle', 'Detalhe'],
  'treasury.ecart.r_rendu':        ['Erreur de rendu de monnaie', 'Change-making error', 'Error al dar cambio', 'Erro no troco'],
  'treasury.ecart.r_encaissement': ['Erreur d’encaissement', 'Collection error', 'Error de cobro', 'Erro de recebimento'],
  'treasury.ecart.r_depense':      ['Dépense oubliée', 'Forgotten expense', 'Gasto olvidado', 'Despesa esquecida'],
  'treasury.ecart.r_comptage':     ['Erreur de comptage', 'Counting error', 'Error de conteo', 'Erro de contagem'],
  'treasury.ecart.r_perte':        ['Perte / vol', 'Loss / theft', 'Pérdida / robo', 'Perda / roubo'],
  'treasury.ecart.r_autre':        ['Autre', 'Other', 'Otro', 'Outro'],
  'treasury.report.print':     ['Imprimer', 'Print', 'Imprimir', 'Imprimir'],
  'treasury.report.summary':   ['Résumé financier', 'Financial summary', 'Resumen financiero', 'Resumo financeiro'],
  'treasury.report.income':    ['Total encaissements', 'Total income', 'Total ingresos', 'Total de receitas'],
  'treasury.report.expense':   ['Total décaissements', 'Total expenses', 'Total gastos', 'Total de despesas'],
  'treasury.report.expected':  ['Solde théorique', 'Expected balance', 'Saldo teórico', 'Saldo teórico'],
  'treasury.report.counted':   ['Montant compté', 'Counted amount', 'Importe contado', 'Montante contado'],
  'treasury.report.ecart':     ['Écart', 'Discrepancy', 'Diferencia', 'Diferença'],
  'treasury.report.payments':  ['Ventilation des paiements', 'Payment breakdown', 'Desglose de pagos', 'Repartição dos pagamentos'],
  'treasury.report.mode':      ['Moyen de paiement', 'Payment method', 'Medio de pago', 'Meio de pagamento'],
  'treasury.report.billetage': ['Billetage de fermeture', 'Closing cash count', 'Arqueo de cierre', 'Contagem de fecho'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});
