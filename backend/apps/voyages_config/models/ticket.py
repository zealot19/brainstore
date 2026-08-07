from django.db import models
from django.utils.translation import gettext_lazy as _
from .base import _CompanyScoped


# ── Modele de billet par defaut (facon BOARDING) ──────────────────────────────
# Les couleurs sont des variables CSS en tete, faciles a changer par l'utilisateur.
DEFAULT_TICKET_RECTO = """<style>
  .tk { --ink:#1a1a1a; --accent:#e6a817; --band:#111; --muted:#6b6b6b;
        position:relative; width:190mm; min-height:95mm; box-sizing:border-box;
        display:flex; border:1.5px solid var(--ink); font-family:Arial,Helvetica,sans-serif;
        color:var(--ink); overflow:hidden; }
  .tk .band { width:14mm; background:var(--band); color:#fff; display:flex; align-items:center; justify-content:center; }
  .tk .band span { writing-mode:vertical-rl; transform:rotate(180deg); font-weight:800; letter-spacing:4px; font-size:20pt; }
  .tk .body { flex:1; padding:6mm 6mm; position:relative; }
  .tk .wm { position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
            font-size:34pt; font-weight:800; color:rgba(230,168,23,.10); transform:rotate(-18deg); pointer-events:none; }
  .tk .head { display:flex; align-items:center; gap:8px; border-bottom:2px solid var(--accent); padding-bottom:4px; }
  .tk .head img { height:14mm; }
  .tk .head .slogan { flex:1; text-align:center; font-style:italic; font-weight:700; color:var(--accent); font-size:11pt; }
  .tk .head .ids { font-size:6.5pt; color:var(--muted); text-align:right; line-height:1.3; }
  .tk .pax { margin:5px 0 8px; font-size:20pt; font-weight:800; }
  .tk .pax small { display:block; font-size:7pt; font-weight:600; color:var(--muted); letter-spacing:1px; }
  .tk .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:6px 10px; }
  .tk .f small { display:block; font-size:6.5pt; color:var(--muted); font-weight:700; letter-spacing:.5px; }
  .tk .f b { font-size:11pt; }
  .tk .note { margin-top:8px; border-top:1px solid #ddd; padding-top:4px; font-size:7pt; color:var(--muted); }
  .tk .stub { width:44mm; border-left:2px dashed var(--ink); padding:5mm 4mm; text-align:center; }
  .tk .stub .bars { font-family:'Libre Barcode 39',monospace; letter-spacing:1px; font-size:8pt; word-break:break-all;
                    background:repeating-linear-gradient(90deg,#111 0 2px,#fff 2px 4px); color:transparent; height:12mm; margin-bottom:4px; }
  .tk .stub .num { font-weight:700; font-size:9pt; margin-bottom:6px; }
  .tk .stub .f { text-align:left; margin-bottom:5px; }
</style>
<div class="tk">
  <div class="band"><span>BOARDING</span></div>
  <div class="body">
    <div class="wm">{{ company_name }}</div>
    <div class="head">
      <img src="{{ company_logo_url }}" alt="">
      <div class="slogan">{{ company_slogan }}</div>
      <div class="ids">NIU: {{ company_niu }}<br>R.C.C.M: {{ company_rccm }}</div>
    </div>
    <div class="pax"><small>NOM PASSAGER</small>{{ passenger_name }} <span style="font-size:11pt">[{{ seat }}]</span></div>
    <div class="grid">
      <div class="f"><small>DEPART</small><b>{{ departure }}</b></div>
      <div class="f"><small>DESTINATION</small><b>{{ destination }}</b></div>
      <div class="f"><small>DATE VOYAGE</small><b>{{ travel_date }}</b></div>
      <div class="f"><small>CLASSE</small><b>{{ travel_class }}</b></div>
      <div class="f"><small>TYPE</small><b>{{ trip_type }}</b></div>
      <div class="f"><small>AGENT</small><b>{{ agent }}</b></div>
      <div class="f"><small>BUS</small><b>{{ vehicle }}</b></div>
      <div class="f"><small>HEURE</small><b>{{ travel_time }}</b></div>
      <div class="f"><small>PRIX</small><b>{{ ticket_price }}</b></div>
      <div class="f"><small>ENREGISTRE LE</small><b>{{ registered_date }}</b></div>
      <div class="f"><small>IMPRIME LE</small><b>{{ printed_date }}</b></div>
      <div class="f"><small>EXPIRE LE</small><b>{{ expiration_date }}</b></div>
    </div>
    <div class="note">L'embarquement commence a l'heure. Presentez-vous a temps, sinon votre place peut etre reattribuee.</div>
  </div>
  <div class="stub">
    <div class="bars">{{ ticket_number }}</div>
    <div class="num">{{ ticket_number }}</div>
    <div class="f"><small style="color:#6b6b6b">PASSAGER</small><br>{{ passenger_name }}</div>
    <div class="f"><small style="color:#6b6b6b">DATE</small> {{ travel_date }} · {{ travel_time }}</div>
    <div class="f"><small style="color:#6b6b6b">TRAJET</small> {{ departure }} -> {{ destination }}</div>
    <div class="f"><small style="color:#6b6b6b">BUS</small> {{ vehicle }} · <small style="color:#6b6b6b">SIEGE</small> {{ seat }}</div>
    <div class="f"><small style="color:#6b6b6b">PRIX</small> {{ ticket_price }}</div>
  </div>
</div>"""

DEFAULT_TICKET_VERSO = """<style>
  .tkv { width:190mm; min-height:95mm; box-sizing:border-box; padding:8mm; font-family:Arial,Helvetica,sans-serif;
         color:#1a1a1a; font-size:8.5pt; line-height:1.4; }
  .tkv h3 { color:#e6a817; text-align:center; font-style:italic; }
  .tkv .cond p { margin:4px 0; }
  .tkv .ag { margin-top:8mm; text-align:center; }
  .tkv .ag h4 { color:#e6a817; }
</style>
<div class="tkv">
  <h3>{{ company_slogan }}</h3>
  <div class="cond">
    <p><b>Conditions :</b> soyez a l'agence au plus tard 45 min avant le depart. L'embarquement se clot 10 min avant le depart.</p>
    <p>Les billets sont valables jusqu'a la date souhaitee. Ni remboursables ni echangeables ; encore moins cedes.</p>
    <p>Les bagages sont soumis aux valises de soute dans la limite autorisee ; les excedents sont payants.</p>
    <p>Conservez ce billet et presentez-le a l'embarquement.</p>
  </div>
  <div class="ag">
    <h4>Nos Agences</h4>
    <p>{{ company_name }} · {{ company_phone }} · {{ company_address }}</p>
  </div>
</div>"""


class TicketTemplate(_CompanyScoped):
    """Modele HTML du billet voyageur, un par institution (Config billets)."""
    html_recto = models.TextField(_("HTML du billet (recto)"), default=DEFAULT_TICKET_RECTO)
    html_verso = models.TextField(_("HTML du verso"), blank=True, default=DEFAULT_TICKET_VERSO)

    class Meta(_CompanyScoped.Meta):
        verbose_name = _("modele de billet")

    def __str__(self):
        return f"Modele de billet ({self.company_id or 'global'})"
