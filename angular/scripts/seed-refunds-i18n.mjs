#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'nav.remboursements':                 ['Remboursements', 'Refunds', 'Reembolsos', 'Reembolsos'],
  'treasury.refunds.title':             ['Remboursements', 'Refunds', 'Reembolsos', 'Reembolsos'],
  'treasury.refunds.subtitle':          ['Rembourser un billet, un colis ou un bagage par référence', 'Refund a ticket, parcel or baggage by reference', 'Reembolsar un billete, paquete o equipaje por referencia', 'Reembolsar um bilhete, encomenda ou bagagem por referência'],
  'treasury.refunds.reference_label':   ['Référence', 'Reference', 'Referencia', 'Referência'],
  'treasury.refunds.reference_ph':      ['Référence du billet, colis ou bagage', 'Ticket, parcel or baggage reference', 'Referencia del billete, paquete o equipaje', 'Referência do bilhete, encomenda ou bagagem'],
  'treasury.refunds.hint':              ['Le remboursement annule l’élément et décaisse depuis votre caisse ouverte selon le taux configuré.', 'The refund cancels the item and disburses from your open cash session at the configured rate.', 'El reembolso anula el elemento y desembolsa desde su caja abierta según la tasa configurada.', 'O reembolso anula o item e desembolsa da sua caixa aberta conforme a taxa configurada.'],
  'treasury.refunds.search':            ['Rechercher', 'Search', 'Buscar', 'Pesquisar'],
  'treasury.refunds.not_found':         ['Aucun billet, colis ou bagage ne correspond à cette référence.', 'No ticket, parcel or baggage matches this reference.', 'Ningún billete, paquete o equipaje coincide con esta referencia.', 'Nenhum bilhete, encomenda ou bagagem corresponde a esta referência.'],
  'treasury.refunds.kind_billet':       ['Billet', 'Ticket', 'Billete', 'Bilhete'],
  'treasury.refunds.kind_colis':        ['Colis', 'Parcel', 'Paquete', 'Encomenda'],
  'treasury.refunds.kind_bagage':       ['Bagage', 'Baggage', 'Equipaje', 'Bagagem'],
  'treasury.refunds.col_reference':     ['Référence', 'Reference', 'Referencia', 'Referência'],
  'treasury.refunds.col_client':        ['Client', 'Customer', 'Cliente', 'Cliente'],
  'treasury.refunds.col_amount_paid':   ['Montant payé', 'Amount paid', 'Importe pagado', 'Montante pago'],
  'treasury.refunds.col_rate':          ['Taux de remboursement', 'Refund rate', 'Tasa de reembolso', 'Taxa de reembolso'],
  'treasury.refunds.col_refund_amount': ['Montant à rembourser', 'Amount to refund', 'Importe a reembolsar', 'Montante a reembolsar'],
  'treasury.refunds.not_refundable':    ['Cet élément est déjà annulé ou livré et ne peut pas être remboursé.', 'This item is already cancelled or delivered and cannot be refunded.', 'Este elemento ya está anulado o entregado y no puede reembolsarse.', 'Este item já foi anulado ou entregue e não pode ser reembolsado.'],
  'treasury.refunds.perform':           ['Effectuer le remboursement', 'Perform refund', 'Realizar el reembolso', 'Efetuar o reembolso'],
  'treasury.refunds.confirm':           ['Confirmer le remboursement ? L’élément sera annulé.', 'Confirm the refund? The item will be cancelled.', '¿Confirmar el reembolso? El elemento será anulado.', 'Confirmar o reembolso? O item será anulado.'],
  'treasury.refunds.done':              ['Remboursement effectué.', 'Refund completed.', 'Reembolso realizado.', 'Reembolso efetuado.'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});
