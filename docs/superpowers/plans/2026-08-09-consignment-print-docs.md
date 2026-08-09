# Documents d'impression Colis & Bagages + verso billet — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corriger le verso du billet (colonne gauche vierge alignée sur le talon) et ajouter trois documents thermiques 80 mm — reçu colis, ticket bagage (×2), étiquette bagage — imprimables depuis l'interface.

**Architecture:** On réutilise l'architecture d'impression des billets : des fonctions Python construisent des chaînes HTML complètes (`@page` fixe), une vue DRF les renvoie en `{"html": …}`, le frontend Angular ouvre une fenêtre, y écrit le HTML et appelle `print()`. Le billet gagne une taille configurable (défaut boarding-pass 203×82,55 mm). Un nouveau module `doc_render.py` isole le rendu colis/bagages ; il réutilise l'entête société via `TicketTemplate`.

**Tech Stack:** Django 5.1 + DRF, pytest (`config.settings.local`), Angular 21 standalone, HTML/CSS d'impression.

## Global Constraints

- Dépôt git : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — toujours `git -C <repo>`).
- Branche : `feature/consignment-print-docs` (déjà créée depuis `origin/master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude).
- Python : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master/env/bin/python` ; exécuter depuis `.../ERP-master/backend`.
- Français partout (libellés, commentaires). Pas d'import treasury/tiers. Aucune nouvelle dépendance.
- Images = FileField (Pillow absent). Rendu robuste : échappement HTML (`html.escape`), aucune 500 si champ vide.
- Billet : `@page{size:<w>mm <h>mm landscape;margin:0}`, défauts 203 / 82.55, talon ~52 mm, bande ~14 mm.
- Docs colis/bagages : `@page{size:80mm auto;margin:3mm}`. Ticket bagage en 2 exemplaires séparés par un pointillé. Pas de QR/code-barres.
- Vérif finale : `manage.py check`, migration, smoke-render, `npx ng build`.

**Convention de test :** les fonctions de rendu sont testées en **pur Python** (aucune DB). On instancie des modèles Django **non sauvegardés** et on affecte les relations en mémoire (ex. `p.origin_point = ServicePoint(name="YAOUNDE")`) — l'affectation d'une FK non sauvegardée est autorisée tant qu'on n'appelle pas `.save()`. Fichiers `tests.py` récupérés par pytest. Commande type :
`cd .../ERP-master/backend && ../env/bin/python -m pytest apps/<app>/tests.py -v`

---

### Task 1: Champs `TicketTemplate` (taille billet + textes documents) + migration + serializer

**Files:**
- Modify: `backend/apps/voyages_config/models/ticket.py`
- Modify: `backend/apps/voyages_config/config_api/serializers.py:305-333` (classe `TicketTemplateSerializer`)
- Create: `backend/apps/voyages_config/migrations/0008_ticket_doc_fields.py` (via `makemigrations`)
- Test: `backend/apps/voyages_config/tests.py` (créer si absent)

**Interfaces:**
- Produces: `TicketTemplate.ticket_width_mm` (Decimal, défaut `203`), `TicketTemplate.ticket_height_mm` (Decimal, défaut `82.55`), `TicketTemplate.parcel_receipt_terms` (Text), `TicketTemplate.baggage_ticket_note` (Char 255). Constantes `DEFAULT_PARCEL_RECEIPT_TERMS`, `DEFAULT_BAGGAGE_TICKET_NOTE`. Ces champs sont lisibles/écrivables via `TicketTemplateSerializer`.

- [ ] **Step 1: Écrire le test (échoue)**

Dans `backend/apps/voyages_config/tests.py` :

```python
from decimal import Decimal
from apps.voyages_config.models.ticket import (
    TicketTemplate, DEFAULT_PARCEL_RECEIPT_TERMS, DEFAULT_BAGGAGE_TICKET_NOTE,
)


def test_ticket_template_has_doc_fields_with_defaults():
    t = TicketTemplate()
    assert t.ticket_width_mm == Decimal("203")
    assert t.ticket_height_mm == Decimal("82.55")
    assert t.parcel_receipt_terms == DEFAULT_PARCEL_RECEIPT_TERMS
    assert t.baggage_ticket_note == DEFAULT_BAGGAGE_TICKET_NOTE
```

- [ ] **Step 2: Lancer le test (doit échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_config/tests.py -v`
Expected: FAIL (ImportError sur `DEFAULT_PARCEL_RECEIPT_TERMS` / AttributeError).

- [ ] **Step 3: Ajouter les constantes + champs au modèle**

Dans `backend/apps/voyages_config/models/ticket.py`, après `DEFAULT_VERSO_CONDITIONS` :

```python
DEFAULT_PARCEL_RECEIPT_TERMS = (
    "Par sa signature, le client declare avoir lu et accepte "
    "les conditions definies par l'agence."
)
DEFAULT_BAGGAGE_TICKET_NOTE = "Merci de votre confiance. Bon voyage !"
```

Dans la classe `TicketTemplate`, section « Textes » (après `agencies_list`) :

```python
    # ── Documents colis & bagages ─────────────────────────────────────────────
    parcel_receipt_terms = models.TextField(_("mention conditions (recu colis)"),
                                             blank=True, default=DEFAULT_PARCEL_RECEIPT_TERMS)
    baggage_ticket_note  = models.CharField(_("note (ticket bagage)"), max_length=255,
                                            blank=True, default=DEFAULT_BAGGAGE_TICKET_NOTE)
```

Dans la section « Couleurs »/format (après `color_band`) ajouter la taille configurable :

```python
    # ── Format billet (mm) ────────────────────────────────────────────────────
    ticket_width_mm  = models.DecimalField(_("largeur billet (mm)"), max_digits=6, decimal_places=2, default=Decimal("203"))
    ticket_height_mm = models.DecimalField(_("hauteur billet (mm)"), max_digits=6, decimal_places=2, default=Decimal("82.55"))
```

Et en haut du fichier ajouter l'import : `from decimal import Decimal`.

- [ ] **Step 4: Générer et appliquer la migration**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py makemigrations voyages_config
../env/bin/python manage.py migrate
```
Expected: crée `0008_…`, applique OK. Renommer si besoin le fichier en `0008_ticket_doc_fields.py` (facultatif).

- [ ] **Step 5: Exposer les champs dans le serializer**

Dans `backend/apps/voyages_config/config_api/serializers.py`, `TicketTemplateSerializer.Meta.fields`, insérer après `"verso_conditions", "agencies_list",` :

```python
                  "ticket_width_mm", "ticket_height_mm",
                  "parcel_receipt_terms", "baggage_ticket_note",
```

- [ ] **Step 6: Relancer le test + `check`**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_config/tests.py -v && ../env/bin/python manage.py check`
Expected: PASS + `System check identified no issues` (warnings staticfiles/sage tolérés).

- [ ] **Step 7: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_config/models/ticket.py backend/apps/voyages_config/config_api/serializers.py backend/apps/voyages_config/migrations/ backend/apps/voyages_config/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(billets): champs taille billet + textes docs colis/bagages"
```

---

### Task 2: Verso billet (colonne vierge) + taille configurable dans `ticket_render`

**Files:**
- Modify: `backend/apps/voyages_config/ticket_render.py` (`build_recto`, `build_verso`, `render_document`)
- Test: `backend/apps/voyages_config/tests.py` (append)

**Interfaces:**
- Consumes: `TicketTemplate.ticket_width_mm`, `ticket_height_mm` (Task 1).
- Produces: `build_verso(tpl)` rend une rangée `[.cut (52mm, bordure pointillée) | .content]`. `build_recto(tpl, tokens, *, logo_url, bg_url)` et `render_document(list)` utilisent la taille du template. Signatures inchangées.

- [ ] **Step 1: Écrire le test (échoue)**

Append dans `backend/apps/voyages_config/tests.py` :

```python
from apps.voyages_config import ticket_render


def test_build_verso_has_blank_cut_column_52mm():
    t = TicketTemplate(slogan="NOUS PARTONS ENSEMBLE", color_ink="#1a1a1a", color_accent="#e6a817")
    t.agencies_list = [{"name": "YAOUNDE", "location": "OLEMBE", "phone": "690000000"}]
    html = ticket_render.build_verso(t)
    assert 'class="cut"' in html          # colonne vierge gauche
    assert "52mm" in html                 # largeur alignee sur le talon du recto
    assert "Nos Agences" in html and "YAOUNDE" in html


def test_render_document_uses_template_size():
    t = TicketTemplate()  # defauts 203 x 82.55
    doc = ticket_render.render_document(["<div>x</div>"], tpl=t)
    assert "203" in doc and "82.55" in doc and "landscape" in doc
```

- [ ] **Step 2: Lancer le test (doit échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_config/tests.py -k "verso or document" -v`
Expected: FAIL (`class="cut"` absent ; `render_document` n'accepte pas `tpl`).

- [ ] **Step 3: Réécrire `build_verso`**

Remplacer la fonction `build_verso` par :

```python
def build_verso(tpl):
    e = _html.escape
    conds = "".join(f"<p>{e(l.strip())}</p>" for l in (tpl.verso_conditions or "").splitlines() if l.strip())
    cards = []
    for a in (tpl.agencies_list or []):
        if not isinstance(a, dict):
            continue
        name = (a.get("name") or "").strip()
        loc = (a.get("location") or "").strip()
        phone = (a.get("phone") or "").strip()
        if not (name or loc or phone):
            continue
        cards.append(
            f"<div class='ag'><div class='ag-name'>{e(name)}</div>"
            f"<div class='ag-loc'>{e(loc)}</div><div class='ag-tel'>{e(phone)}</div></div>")
    ags = "".join(cards) or f"<div class='ag'><div class='ag-loc'>{e(tpl.address)}</div></div>"
    w = tpl.ticket_width_mm or 203
    h = tpl.ticket_height_mm or 82.55
    return f"""<style>
  .tkv{{display:flex;width:{w}mm;height:{h}mm;box-sizing:border-box;
       font-family:Arial,Helvetica,sans-serif;color:{tpl.color_ink};font-size:7pt;line-height:1.3}}
  .tkv .cut{{width:52mm;flex:none;border-right:1px dashed #999}}
  .tkv .content{{flex:1;padding:4mm;display:flex;flex-direction:column;overflow:hidden}}
  .tkv h3{{color:{tpl.color_accent};text-align:center;font-style:italic;font-weight:800;margin:0 0 3px;font-size:9pt}}
  .tkv .cond{{flex:1}}
  .tkv .cond p{{margin:2px 0}}
  .tkv .agencies{{margin-top:2mm;border-top:2px solid {tpl.color_accent};padding-top:2mm}}
  .tkv .agencies h4{{color:{tpl.color_accent};text-align:center;margin:0 0 3px;font-size:9pt;font-style:italic;font-weight:800}}
  .tkv .agencies .row{{display:flex;justify-content:space-around;gap:4mm;text-align:center}}
  .tkv .agencies .ag{{flex:1}}
  .tkv .agencies .ag-name{{font-weight:800;font-size:10pt;letter-spacing:1px}}
  .tkv .agencies .ag-loc{{color:#555}}
  .tkv .agencies .ag-tel{{font-weight:700}}
</style>
<div class="tkv">
  <div class="cut"></div>
  <div class="content">
    <h3>&laquo; {e(tpl.slogan)} &raquo;</h3>
    <div class="cond">{conds}</div>
    <div class="agencies"><h4>Nos Agences</h4><div class="row">{ags}</div></div>
  </div>
</div>"""
```

- [ ] **Step 4: Rendre la taille du recto et du document configurable**

Dans `build_recto`, remplacer dans le bloc `<style>` la ligne `.tk{{…width:190mm;min-height:95mm;…}}` par une largeur/hauteur issues du template. Juste avant le `return f"""<style>` ajouter :

```python
    w = tpl.ticket_width_mm or 203
    h = tpl.ticket_height_mm or 82.55
```

puis dans le CSS `.tk{{…}}` remplacer `width:190mm;min-height:95mm;` par `width:{w}mm;height:{h}mm;`.

Remplacer `render_document` par (ajout du paramètre `tpl` optionnel) :

```python
def render_document(inner_html_list, *, tpl=None):
    w = (tpl.ticket_width_mm if tpl else None) or 203
    h = (tpl.ticket_height_mm if tpl else None) or 82.55
    body = "".join(f'<div class="tk-page">{h_}</div>' for h_ in inner_html_list)
    return (
        '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Billets</title>'
        f'<style>@page{{size:{w}mm {h}mm landscape;margin:0}}'
        'body{margin:0;font-family:Arial,Helvetica,sans-serif}'
        '.tk-page{page-break-after:always}</style>'
        f'</head><body>{body}</body></html>'
    )
```

- [ ] **Step 5: Mettre à jour l'appelant de `render_document`**

Dans `backend/apps/voyages_booking/config_api/views.py:370`, remplacer :
`return success_response({"html": ticket_render.render_document(pages)})`
par :
`return success_response({"html": ticket_render.render_document(pages, tpl=tpl)})`

- [ ] **Step 6: Lancer les tests (doivent passer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_config/tests.py -v`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_config/ticket_render.py backend/apps/voyages_booking/config_api/views.py backend/apps/voyages_config/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(billets): verso avec colonne vierge alignee talon + taille configurable"
```

---

### Task 3: Module `doc_render.py` (reçu colis, ticket bagage, étiquette bagage)

**Files:**
- Create: `backend/apps/voyages_consignment/doc_render.py`
- Test: `backend/apps/voyages_consignment/tests.py` (créer)

**Interfaces:**
- Consumes: `TicketTemplate` (Task 1), `apps.voyages_config.ticket_render._abs`.
- Produces:
  - `company_header(tpl, *, logo_url="", agency_line="")` → `str` (HTML entête).
  - `build_parcel_receipt(parcel, tpl, *, agent="", logo_url="")` → `str` (HTML complet 80 mm).
  - `build_baggage_ticket(baggage, tpl, *, agent="", logo_url="")` → `str` (HTML complet, 2 exemplaires).
  - `build_baggage_label(baggage, tpl, *, agent="")` → `str` (HTML complet étiquette).
  - `render_80mm(inner_html_list)` → `str` (enveloppe `@page{size:80mm auto;margin:3mm}`).

- [ ] **Step 1: Écrire les tests (échouent)**

Créer `backend/apps/voyages_consignment/tests.py` :

```python
from datetime import datetime
from apps.voyages_config.models.ticket import TicketTemplate
from apps.voyages_config.models import ServicePoint
from apps.voyages_consignment.models import Parcel, Baggage
from apps.voyages_consignment import doc_render


def _tpl():
    return TicketTemplate(brand_name="BLUEBIRD EXPRESS", niu="M09151", rccm="RCCM/DLA/2015",
                          phone="699 62 74 80", color_ink="#111", color_accent="#e6a817")


def test_render_80mm_page_size():
    doc = doc_render.render_80mm(["<div>x</div>"])
    assert "80mm auto" in doc and "<!DOCTYPE html>" in doc


def test_parcel_receipt_contains_key_fields():
    p = Parcel(reference="COL-00012", sender_name="LONGTIO", sender_phone="678015230",
               recipient_name="MASSOU", recipient_phone="693009981",
               description="test123456", quantity=1, amount_due=1000, declared_value=1)
    p.destination_point = ServicePoint(name="AYOS")
    p.origin_point = ServicePoint(name="BERTOUA")
    html = doc_render.build_parcel_receipt(p, _tpl(), agent="NOUROUDDINE")
    for token in ["COL-00012", "LONGTIO", "MASSOU", "AYOS", "1 000", "NOUROUDDINE",
                  "Signature Client", "80mm auto"]:
        assert token in html, token


def test_baggage_ticket_has_two_copies():
    b = Baggage(tag_number="BAG-00003", sender_name="LONGTIO", sender_phone="678015230",
                description="valise", quantity=1, amount_due=2000)
    html = doc_render.build_baggage_ticket(b, _tpl(), agent="Admin")
    assert html.count("Ticket de bagage") == 2  # 2 exemplaires
    assert "LONGTIO" in html and "2 000" in html


def test_baggage_label_payant_flag():
    b = Baggage(tag_number="BAG-9", sender_name="X", amount_due=2000, quantity=1)
    assert "PAYANT" in doc_render.build_baggage_label(b, _tpl(), agent="Admin")
    b0 = Baggage(tag_number="BAG-0", sender_name="X", amount_due=0, quantity=1)
    assert "GRATUIT" in doc_render.build_baggage_label(b0, _tpl(), agent="Admin")
```

- [ ] **Step 2: Lancer les tests (doivent échouer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_consignment/tests.py -v`
Expected: FAIL (`No module named doc_render`).

- [ ] **Step 3: Écrire `doc_render.py`**

Créer `backend/apps/voyages_consignment/doc_render.py` :

```python
"""Rendu HTML des documents colis/bagages (thermique 80 mm)."""
import html as _html
from django.utils import timezone


def _money(v):
    try:
        return f"{float(v or 0):,.0f}".replace(",", " ")
    except (TypeError, ValueError):
        return "0"


def _dt(v=None):
    v = v or timezone.now()
    try:
        return timezone.localtime(v).strftime("%d/%m/%Y %H:%M")
    except (ValueError, TypeError):
        return v.strftime("%d/%m/%Y %H:%M")


def _safe(obj, path, default=""):
    """Accès défensif 'a.b.c' sans requête DB pour les relations non chargées."""
    cur = obj
    for part in path.split("."):
        cur = getattr(cur, part, None)
        if cur is None:
            return default
    return cur


def company_header(tpl, *, logo_url="", agency_line=""):
    e = _html.escape
    logo = f'<img src="{logo_url}" alt="" style="height:12mm">' if logo_url else ""
    ids = []
    if tpl.rccm:
        ids.append(f"RCCM: {e(tpl.rccm)}")
    if tpl.niu:
        ids.append(f"NIU: {e(tpl.niu)}")
    if tpl.phone:
        ids.append(f"Tel: {e(tpl.phone)}")
    ag = f'<div class="agency">{e(agency_line)}</div>' if agency_line else ""
    return (f'<div class="hdr">{logo}<div class="co"><b>{e(tpl.brand_name)}</b>'
            f'<div class="ids">{"<br>".join(ids)}</div>{ag}</div></div>')


def _trajet(baggage):
    route = _safe(baggage, "trip.route", None)
    code = getattr(route, "code", "") if route else ""
    dest = _safe(baggage, "trip.destination.name", "")
    return _html.escape(code or ""), _html.escape(dest or "")


_STYLE_80 = """<style>
  @page{size:80mm auto;margin:3mm}
  *{box-sizing:border-box}
  body{margin:0;font-family:Arial,Helvetica,sans-serif;color:#111;font-size:9pt;width:74mm}
  .doc{width:74mm}
  .hdr{display:flex;gap:2mm;align-items:center;text-align:center;flex-direction:column;margin-bottom:2mm}
  .hdr .co b{font-size:11pt}
  .hdr .ids{font-size:7pt;line-height:1.2}
  .hdr .agency{font-weight:700;margin-top:1mm}
  h2{text-align:center;font-size:10pt;margin:2mm 0;border-top:1px solid #111;border-bottom:1px solid #111;padding:1mm 0}
  .box{border:1px solid #111;padding:1.5mm;margin-bottom:1.5mm}
  .box b{font-weight:700}
  .terms{font-size:8pt;margin:1.5mm 0}
  .sign{display:flex;justify-content:space-between;border:1px solid #111;padding:1mm;font-weight:700;font-size:8pt}
  .sign div{width:48%;min-height:12mm}
  .foot{font-size:7pt;font-style:italic;margin-top:1mm}
  .cutline{border-top:1px dashed #111;margin:3mm 0;text-align:center;font-size:7pt;color:#777}
</style>"""


def render_80mm(inner_html_list):
    body = "".join(inner_html_list)
    return (f'<!DOCTYPE html><html><head><meta charset="utf-8">{_STYLE_80}'
            f'</head><body>{body}</body></html>')


def build_parcel_receipt(parcel, tpl, *, agent="", logo_url=""):
    e = _html.escape
    agency = _safe(parcel, "origin_point.name", "")
    dest = _safe(parcel, "destination_point.name", "")
    hdr = company_header(tpl, logo_url=logo_url,
                         agency_line=(f"Agence de {agency}" if agency else ""))
    when = _dt(getattr(parcel, "created_at", None))
    inner = f"""<div class="doc">
      {hdr}
      <h2>Recu d'Expedition N&deg; {e(parcel.reference)}</h2>
      <div class="box"><b>Exp</b>: {e(parcel.sender_name)}<br><b>Tel</b>: {e(parcel.sender_phone)}</div>
      <div class="box"><b>Dest</b>: {e(parcel.recipient_name)}<br><b>Tel</b>: {e(parcel.recipient_phone)}</div>
      <div class="box">
        <b>Destination</b>: {e(dest)}<br>
        <b>Colis</b>: {e(parcel.description)}<br>
        <b>Valeur</b>: {_money(parcel.declared_value)} frs<br>
        <b>Qte</b>: {parcel.quantity} &nbsp; <b>Montant</b>: {_money(parcel.amount_due)} frs<br>
        <b>Par</b>: {e(agent)} <b>le</b>: {when}
      </div>
      <div class="terms">{e(tpl.parcel_receipt_terms)}</div>
      <div class="sign"><div>Signature Client</div><div>Signature de l'agent</div></div>
    </div>"""
    return render_80mm([inner])


def _baggage_copy(baggage, tpl, *, agent, logo_url):
    e = _html.escape
    trajet, dest = _trajet(baggage)
    bus = _safe(baggage, "trip.vehicle.license_plate", "")
    name = baggage.owner_name if getattr(baggage, "ticket_id", None) else baggage.sender_name
    hdr = company_header(tpl, logo_url=logo_url)
    return f"""<div class="doc">
      {hdr}
      <h2>Ticket de bagage N&deg; {e(baggage.tag_number)}</h2>
      <div class="box">
        <b>Passager</b>: {e(name or "")}<br>
        <b>Tel</b>: {e(baggage.sender_phone)} &nbsp; <b>N&deg; CNI</b>: {e(baggage.id_number)}<br>
        <b>Trajet</b>: {trajet} &nbsp; <b>Destination</b>: {dest}<br>
        <b>Bus</b>: {e(bus)} &nbsp; <b>Qte</b>: {baggage.quantity} &nbsp; <b>Montant</b>: {_money(baggage.amount_due)}<br>
        <b>Description</b>: {e(baggage.description)}
      </div>
      <div class="terms"><b>Note</b>: {e(tpl.baggage_ticket_note)}</div>
      <div class="foot">Imprime le : {_dt()} par {e(agent)}</div>
    </div>"""


def build_baggage_ticket(baggage, tpl, *, agent="", logo_url=""):
    copy = _baggage_copy(baggage, tpl, agent=agent, logo_url=logo_url)
    cut = '<div class="cutline">- - - - - - decouper - - - - - -</div>'
    return render_80mm([copy, cut, copy])


def build_baggage_label(baggage, tpl, *, agent=""):
    e = _html.escape
    trajet, dest = _trajet(baggage)
    name = baggage.owner_name if getattr(baggage, "ticket_id", None) else baggage.sender_name
    payant = "PAYANT" if (baggage.amount_due or 0) > 0 else "GRATUIT"
    inner = f"""<div class="doc">
      <div class="hdr"><div class="co"><b>{e(tpl.brand_name)}</b>
        <div class="ids">Tel: {e(tpl.phone)}</div></div></div>
      <div class="box" style="text-align:center;font-size:10pt">
        <b>Ticket N&deg;</b>: {e(baggage.tag_number)}<br>
        <b>Nom</b>: {e(name or "")}<br>
        <b>Tel</b>: {e(baggage.sender_phone)} &nbsp; <b>CNI</b>: {e(baggage.id_number)}<br>
        <b>{payant}</b><br>
        <b>Trajet</b>: {trajet} &nbsp; <b>Destination</b>: {dest}
      </div>
      <div class="foot">Imprime le : {_dt()} par {e(agent)}</div>
    </div>"""
    return render_80mm([inner])
```

- [ ] **Step 4: Lancer les tests (doivent passer)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/voyages_consignment/tests.py -v`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_consignment/doc_render.py backend/apps/voyages_consignment/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(colis/bagages): rendu HTML recu colis, ticket bagage x2, etiquette"
```

---

### Task 4: Endpoints d'impression colis/bagages

**Files:**
- Modify: `backend/apps/voyages_consignment/config_api/views.py`
- Modify: `backend/apps/voyages_consignment/urls.py`

**Interfaces:**
- Consumes: `doc_render.*` (Task 3), `ticket_render.get_or_create_template`, `ticket_render._abs`.
- Produces: 3 vues renvoyant `{"html": …}` :
  - `ParcelReceiptView.get(request, pk)` → route `parcels/<uuid:pk>/receipt/`
  - `BaggageTicketView.get(request, pk)` → route `baggage/<uuid:pk>/ticket/`
  - `BaggageLabelView.get(request, pk)` → route `baggage/<uuid:pk>/label/`

- [ ] **Step 1: Ajouter les vues**

À la fin de `backend/apps/voyages_consignment/config_api/views.py` :

```python
from apps.voyages_config import ticket_render
from apps.voyages_consignment import doc_render


def _agent(user):
    return (user.get_full_name() or user.username) if user else ""


class ParcelReceiptView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, pk):
        p = (Parcel.objects.filter(is_deleted=False, company=request.user.company, id=pk)
             .select_related("origin_point", "destination_point").first())
        if not p:
            return error_response("Introuvable.", status_code=404)
        tpl = ticket_render.get_or_create_template(request.user.company)
        logo_url = ticket_render._abs(request, tpl.logo)
        html = doc_render.build_parcel_receipt(p, tpl, agent=_agent(request.user), logo_url=logo_url)
        return success_response({"html": html})


class BaggageTicketView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, pk):
        b = (Baggage.objects.filter(is_deleted=False, company=request.user.company, id=pk)
             .select_related("trip", "trip__route", "trip__destination", "trip__vehicle",
                             "ticket", "ticket__passenger").first())
        if not b:
            return error_response("Introuvable.", status_code=404)
        tpl = ticket_render.get_or_create_template(request.user.company)
        logo_url = ticket_render._abs(request, tpl.logo)
        html = doc_render.build_baggage_ticket(b, tpl, agent=_agent(request.user), logo_url=logo_url)
        return success_response({"html": html})


class BaggageLabelView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, pk):
        b = (Baggage.objects.filter(is_deleted=False, company=request.user.company, id=pk)
             .select_related("trip", "trip__route", "trip__destination",
                             "ticket", "ticket__passenger").first())
        if not b:
            return error_response("Introuvable.", status_code=404)
        tpl = ticket_render.get_or_create_template(request.user.company)
        html = doc_render.build_baggage_label(b, tpl, agent=_agent(request.user))
        return success_response({"html": html})
```

- [ ] **Step 2: Ajouter les routes**

Dans `backend/apps/voyages_consignment/urls.py`, ajouter après `parcels/<uuid:pk>/cancel/` et les routes baggage :

```python
    path("parcels/<uuid:pk>/receipt/", v.ParcelReceiptView.as_view()),
    path("baggage/<uuid:pk>/ticket/", v.BaggageTicketView.as_view()),
    path("baggage/<uuid:pk>/label/", v.BaggageLabelView.as_view()),
```

- [ ] **Step 3: Vérifier le chargement des URLs**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python manage.py check`
Expected: `no issues` (warnings tolérés). Aucune ImportError.

- [ ] **Step 4: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_consignment/config_api/views.py backend/apps/voyages_consignment/urls.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(colis/bagages): endpoints impression recu/ticket/etiquette"
```

---

### Task 5: Config billets — formulaire (taille + textes documents)

**Files:**
- Modify: `backend/apps/voyages_config/config_api/serializers.py` (déjà fait Task 1 — vérifier)
- Modify: `angular/src/_api/services/voyages-config/ticket-template.service.ts` (interface `TicketTemplate`)
- Modify: `angular/src/_api/pages/voyages-config/ticket-template/ticket-template.component.ts` (`buildFd`)
- Modify: `angular/src/_api/pages/voyages-config/ticket-template/ticket-template.component.html`

**Interfaces:**
- Consumes: champs serializer `ticket_width_mm`, `ticket_height_mm`, `parcel_receipt_terms`, `baggage_ticket_note` (Task 1).
- Produces: le formulaire Config billets lit/écrit ces 4 champs.

- [ ] **Step 1: Étendre l'interface TS**

Dans `angular/src/_api/services/voyages-config/ticket-template.service.ts`, interface `TicketTemplate`, ajouter après `verso_conditions: string; agencies_list: TicketAgency[];` :

```typescript
  ticket_width_mm: number | string; ticket_height_mm: number | string;
  parcel_receipt_terms: string; baggage_ticket_note: string;
```

- [ ] **Step 2: Ajouter les champs dans `buildFd`**

Dans `angular/src/_api/pages/voyages-config/ticket-template/ticket-template.component.ts`, dans le tableau `fields` de `buildFd()`, ajouter les 4 clés :

```typescript
      'ticket_width_mm', 'ticket_height_mm', 'parcel_receipt_terms', 'baggage_ticket_note',
```
(les insérer dans la liste existante `const fields: (keyof TicketTemplate)[] = [ … ]`).

- [ ] **Step 3: Ajouter les sections au formulaire**

Dans `angular/src/_api/pages/voyages-config/ticket-template/ticket-template.component.html`, dans la carte « Textes » (après le bloc agences, avant `</div></div></div>`), ajouter :

```html
        <div class="col-md-3 mb-3"><label class="form-label">Largeur billet (mm)</label>
          <input type="number" step="0.01" class="form-control" [(ngModel)]="m.ticket_width_mm" [ngModelOptions]="{standalone:true}" /></div>
        <div class="col-md-3 mb-3"><label class="form-label">Hauteur billet (mm)</label>
          <input type="number" step="0.01" class="form-control" [(ngModel)]="m.ticket_height_mm" [ngModelOptions]="{standalone:true}" /></div>
        <div class="col-12 mb-3"><label class="form-label">Mention conditions (reçu colis)</label>
          <textarea class="form-control" rows="2" [(ngModel)]="m.parcel_receipt_terms" [ngModelOptions]="{standalone:true}"></textarea></div>
        <div class="col-12 mb-3"><label class="form-label">Note (ticket bagage)</label>
          <input class="form-control" [(ngModel)]="m.baggage_ticket_note" [ngModelOptions]="{standalone:true}" /></div>
```

- [ ] **Step 4: Build Angular**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: `Application bundle generation complete` (warnings existants tolérés).

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/services/voyages-config/ticket-template.service.ts angular/src/_api/pages/voyages-config/ticket-template/
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(config billets): taille billet + textes docs colis/bagages dans le formulaire"
```

---

### Task 6: Frontend — impression reçu colis

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (bloc `VOYAGES_CONSIGNMENT`)
- Modify: `angular/src/_api/services/voyages-consignment/parcel.service.ts`
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.ts`
- Modify: `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.html`

**Interfaces:**
- Consumes: endpoint `parcels/<id>/receipt/` (Task 4).
- Produces: `ParcelService.receipt(id): Observable<{html:string}>` ; bouton « Reçu » qui ouvre+imprime.

- [ ] **Step 1: Ajouter l'URL**

Dans `angular/src/_api/config/api.config.ts`, dans `VOYAGES_CONSIGNMENT`, après `parcelCancel` :

```typescript
  parcelReceipt: (id: string) => `${VCG}/parcels/${id}/receipt/`,
```

- [ ] **Step 2: Ajouter la méthode service**

Dans `parcel.service.ts`, ajouter dans la classe :

```typescript
  receipt(id: string): Observable<{ html: string }> { return this.http.get<{ html: string }>(VOYAGES_CONSIGNMENT.parcelReceipt(id)); }
```

- [ ] **Step 3: Ajouter l'action d'impression (composant)**

Dans `parcels.component.ts`, ajouter une méthode (et vérifier que `ParcelService` est injecté — il l'est déjà) :

```typescript
  printReceipt(id: string): void {
    this.svc.receipt(id).subscribe({
      next: r => {
        const w = window.open('', '_blank');
        if (!w) { return; }
        w.document.write(r.html);
        w.document.close();
        setTimeout(() => w.print(), 300);
      },
      error: () => {},
    });
  }
```
(Adapter `this.svc` au nom réel du service injecté dans ce composant — vérifier le constructeur.)

- [ ] **Step 4: Ajouter le bouton (template)**

Dans `parcels.component.html`, dans la colonne d'actions de chaque ligne colis, ajouter un bouton (adapter l'expression d'id de ligne au nom réel de la variable de boucle) :

```html
<button type="button" class="btn btn-sm btn-outline-secondary" (click)="printReceipt(row.id)" title="Imprimer le reçu">
  <i class="ti ti-printer"></i>
</button>
```

- [ ] **Step 5: Build Angular**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/config/api.config.ts angular/src/_api/services/voyages-consignment/parcel.service.ts angular/src/_api/pages/voyages-consignment/parcels/
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(colis): bouton impression du recu d'expedition"
```

---

### Task 7: Frontend — impression ticket + étiquette bagage

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (bloc `VOYAGES_CONSIGNMENT`)
- Modify: `angular/src/_api/services/voyages-consignment/baggage.service.ts`
- Modify: `angular/src/_api/pages/voyages-consignment/baggage/baggage.component.ts`
- Modify: `angular/src/_api/pages/voyages-consignment/baggage/baggage.component.html`

**Interfaces:**
- Consumes: endpoints `baggage/<id>/ticket/`, `baggage/<id>/label/` (Task 4).
- Produces: `BaggageService.ticket(id)`, `BaggageService.label(id)` ; boutons « Ticket » et « Étiquette ».

- [ ] **Step 1: Ajouter les URLs**

Dans `angular/src/_api/config/api.config.ts`, dans `VOYAGES_CONSIGNMENT`, après `baggageDeliver` :

```typescript
  baggageTicket: (id: string) => `${VCG}/baggage/${id}/ticket/`,
  baggageLabel: (id: string) => `${VCG}/baggage/${id}/label/`,
```

- [ ] **Step 2: Ajouter les méthodes service**

Dans `baggage.service.ts`, ajouter dans la classe :

```typescript
  ticket(id: string): Observable<{ html: string }> { return this.http.get<{ html: string }>(VOYAGES_CONSIGNMENT.baggageTicket(id)); }
  label(id: string): Observable<{ html: string }> { return this.http.get<{ html: string }>(VOYAGES_CONSIGNMENT.baggageLabel(id)); }
```

- [ ] **Step 3: Ajouter les actions (composant)**

Dans `baggage.component.ts`, ajouter un helper d'impression + 2 méthodes (adapter `this.svc` au nom réel du service injecté) :

```typescript
  private openAndPrint(html: string): void {
    const w = window.open('', '_blank');
    if (!w) { return; }
    w.document.write(html);
    w.document.close();
    setTimeout(() => w.print(), 300);
  }
  printTicket(id: string): void { this.svc.ticket(id).subscribe({ next: r => this.openAndPrint(r.html), error: () => {} }); }
  printLabel(id: string): void { this.svc.label(id).subscribe({ next: r => this.openAndPrint(r.html), error: () => {} }); }
```

- [ ] **Step 4: Ajouter les boutons (template)**

Dans `baggage.component.html`, dans la colonne d'actions de chaque ligne bagage (adapter le nom de la variable de boucle) :

```html
<button type="button" class="btn btn-sm btn-outline-secondary" (click)="printTicket(row.id)" title="Ticket de bagage">
  <i class="ti ti-ticket"></i>
</button>
<button type="button" class="btn btn-sm btn-outline-secondary" (click)="printLabel(row.id)" title="Étiquette">
  <i class="ti ti-tag"></i>
</button>
```

- [ ] **Step 5: Build Angular**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: build OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/config/api.config.ts angular/src/_api/services/voyages-consignment/baggage.service.ts angular/src/_api/pages/voyages-consignment/baggage/
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(bagages): boutons impression ticket + etiquette"
```

---

### Task 8: Vérification finale + fusion

**Files:** aucun (vérification).

- [ ] **Step 1: Backend — check + tests**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py check
../env/bin/python -m pytest apps/voyages_config/tests.py apps/voyages_consignment/tests.py -v
```
Expected: check OK ; tous les tests PASS.

- [ ] **Step 2: Smoke-render manuel des 3 documents**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python -c "
import django,os; os.environ.setdefault('DJANGO_SETTINGS_MODULE','config.settings.local'); django.setup()
from apps.voyages_config.models.ticket import TicketTemplate
from apps.voyages_config.models import ServicePoint
from apps.voyages_consignment.models import Parcel, Baggage
from apps.voyages_consignment import doc_render
t=TicketTemplate(brand_name='BLUEBIRD', phone='699', color_ink='#111', color_accent='#e6a817')
p=Parcel(reference='COL-1', sender_name='A', sender_phone='6', recipient_name='B', recipient_phone='6', description='x', quantity=1, amount_due=1000, declared_value=1)
p.origin_point=ServicePoint(name='BERTOUA'); p.destination_point=ServicePoint(name='AYOS')
b=Baggage(tag_number='BAG-1', sender_name='A', sender_phone='6', description='v', quantity=1, amount_due=2000)
assert '80mm auto' in doc_render.build_parcel_receipt(p,t,agent='NUM')
assert doc_render.build_baggage_ticket(b,t,agent='NUM').count('Ticket de bagage')==2
assert 'PAYANT' in doc_render.build_baggage_label(b,t,agent='NUM')
print('SMOKE OK')
"
```
Expected: `SMOKE OK`.

- [ ] **Step 3: Frontend build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build`
Expected: `Application bundle generation complete`.

- [ ] **Step 4: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** pour fusionner (FF) sur `master` et pousser :
```
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master checkout master
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master merge --ff-only feature/consignment-print-docs
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master push origin master
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master branch -d feature/consignment-print-docs
```

---

## Self-Review

**Spec coverage :**
- Verso colonne vierge 52 mm alignée talon → Task 2. ✅
- Billet 203×82,55 configurable → Task 1 (champs) + Task 2 (rendu) + Task 5 (formulaire). ✅
- Reçu colis / ticket bagage ×2 / étiquette (80 mm) → Task 3 (rendu) + Task 4 (API) + Task 6/7 (UI). ✅
- Réutilise Config billets + 2 textes → Task 1 + Task 5. ✅
- Pas de QR/code-barres, tarification inchangée → respecté (aucun code QR ajouté). ✅
- Vérifs (check, migration, smoke, ng build) → Task 8. ✅

**Placeholder scan :** aucun TBD/TODO ; code complet fourni pour les fonctions de rendu. Les 3 étapes UI notent « adapter `this.svc`/variable de boucle au composant réel » — nécessaire car les noms de variables de template ne sont pas encore lus ; l'implémenteur vérifie le constructeur/`@for` du composant avant d'écrire.

**Type consistency :** `render_document(list, *, tpl=None)` cohérent entre Task 2 (définition) et Task 2 Step 5 (appel). `build_parcel_receipt/baggage_ticket/baggage_label` signatures identiques entre Task 3 (déf.), Task 4 (appel), Task 8 (smoke). URLs `parcelReceipt/baggageTicket/baggageLabel` cohérentes entre api.config, services et vues.
