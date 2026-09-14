import { Directive, ElementRef, Renderer2, AfterViewInit, DoCheck, OnDestroy, HostListener } from '@angular/core';

/**
 * Rend n'importe quel <select> natif « recherchable » sans toucher au template :
 * il suffit d'importer cette directive dans le composant. Le <select> natif reste
 * la source de vérité du formulaire (formControlName / ngModel / ngValue / null
 * continuent de fonctionner) ; on superpose une UI avec champ de recherche.
 *
 * Ne s'applique pas aux <select multiple>.
 */
@Directive({
  selector: 'select:not([multiple]):not([data-plain])',
  standalone: true,
})
export class SearchableSelectDirective implements AfterViewInit, DoCheck, OnDestroy {
  private sel: HTMLSelectElement;
  private wrap!: HTMLElement;
  private control!: HTMLElement;
  private labelEl!: HTMLElement;
  private panel!: HTMLElement;
  private searchInput!: HTMLInputElement;
  private listEl!: HTMLElement;
  private open = false;
  private lastValue: string | null = null;
  private lastOptCount = -1;
  private lastDisabled = false;

  constructor(private ref: ElementRef<HTMLSelectElement>, private r: Renderer2) {
    this.sel = ref.nativeElement;
  }

  ngAfterViewInit(): void {
    // Enveloppe
    this.wrap = this.r.createElement('div');
    this.r.setStyle(this.wrap, 'position', 'relative');
    this.r.addClass(this.wrap, 'ss-wrap');
    this.r.insertBefore(this.sel.parentNode, this.wrap, this.sel);
    this.r.appendChild(this.wrap, this.sel);
    this.r.setStyle(this.sel, 'display', 'none');

    // Contrôle (ressemble au select : on reprend ses classes)
    this.control = this.r.createElement('div');
    this.sel.classList.forEach(c => this.r.addClass(this.control, c));
    this.r.setStyle(this.control, 'cursor', 'pointer');
    this.r.setStyle(this.control, 'overflow', 'hidden');
    this.r.setStyle(this.control, 'text-overflow', 'ellipsis');
    this.r.setStyle(this.control, 'white-space', 'nowrap');
    this.labelEl = this.r.createElement('span');
    this.r.appendChild(this.control, this.labelEl);
    this.r.appendChild(this.wrap, this.control);
    this.r.listen(this.control, 'click', () => this.toggle());

    // Panneau
    this.panel = this.r.createElement('div');
    this.r.addClass(this.panel, 'dropdown-menu');
    this.r.addClass(this.panel, 'w-100');
    this.r.setStyle(this.panel, 'display', 'none');
    this.r.setStyle(this.panel, 'max-height', '260px');
    this.r.setStyle(this.panel, 'overflow-y', 'auto');
    this.r.setStyle(this.panel, 'padding', '.25rem');
    const searchWrap = this.r.createElement('div');
    this.r.setStyle(searchWrap, 'padding', '.25rem .25rem .5rem');
    this.searchInput = this.r.createElement('input');
    this.r.addClass(this.searchInput, 'form-control');
    this.r.addClass(this.searchInput, 'form-control-sm');
    this.r.setAttribute(this.searchInput, 'placeholder', 'Rechercher…');
    this.r.listen(this.searchInput, 'input', () => this.renderList());
    this.r.listen(this.searchInput, 'click', (e: Event) => e.stopPropagation());
    this.r.appendChild(searchWrap, this.searchInput);
    this.r.appendChild(this.panel, searchWrap);
    this.listEl = this.r.createElement('div');
    this.r.appendChild(this.panel, this.listEl);
    this.r.appendChild(this.wrap, this.panel);

    this.refreshLabel();
  }

  ngDoCheck(): void {
    // Le formulaire (patchValue) ou un @for dynamique peuvent changer valeur/options
    // sans événement « change » : on resynchronise à moindre coût.
    if (!this.control) return;
    if (this.sel.value !== this.lastValue || this.sel.options.length !== this.lastOptCount) {
      this.refreshLabel();
      if (this.open) this.renderList();
    }
    if (this.sel.disabled !== this.lastDisabled) {
      this.lastDisabled = this.sel.disabled;
      this.r.setStyle(this.control, 'pointer-events', this.sel.disabled ? 'none' : 'auto');
      this.r.setStyle(this.control, 'opacity', this.sel.disabled ? '0.6' : '1');
    }
  }

  private refreshLabel(): void {
    this.lastValue = this.sel.value;
    this.lastOptCount = this.sel.options.length;
    const opt = this.sel.selectedOptions[0];
    const text = (opt?.textContent || '').trim();
    this.labelEl.textContent = text || ' ';
    this.r.setStyle(this.labelEl, 'color', text ? '' : '#9aa0a6');
  }

  private toggle(): void {
    if (this.sel.disabled) return;
    this.open ? this.close() : this.show();
  }
  private show(): void {
    this.open = true;
    this.searchInput.value = '';
    this.renderList();
    this.r.setStyle(this.panel, 'display', 'block');
    setTimeout(() => this.searchInput.focus(), 0);
  }
  private close(): void { this.open = false; this.r.setStyle(this.panel, 'display', 'none'); }

  private renderList(): void {
    const q = this.searchInput.value.trim().toLowerCase();
    this.listEl.innerHTML = '';
    Array.from(this.sel.options).forEach((opt, idx) => {
      const text = (opt.textContent || '').trim();
      if (q && !text.toLowerCase().includes(q)) return;
      const item = this.r.createElement('a');
      this.r.addClass(item, 'dropdown-item');
      this.r.setStyle(item, 'cursor', 'pointer');
      this.r.setStyle(item, 'white-space', 'normal');
      if (opt.disabled) { this.r.addClass(item, 'disabled'); }
      if (idx === this.sel.selectedIndex) { this.r.addClass(item, 'active'); }
      item.textContent = text || ' ';
      if (!opt.disabled) this.r.listen(item, 'click', () => this.pick(idx));
      this.r.appendChild(this.listEl, item);
    });
    if (!this.listEl.childNodes.length) {
      const empty = this.r.createElement('div');
      this.r.addClass(empty, 'text-muted');
      this.r.addClass(empty, 'small');
      this.r.setStyle(empty, 'padding', '.25rem .5rem');
      empty.textContent = 'Aucun résultat';
      this.r.appendChild(this.listEl, empty);
    }
  }

  private pick(idx: number): void {
    this.sel.selectedIndex = idx;
    this.sel.dispatchEvent(new Event('change', { bubbles: true }));
    this.refreshLabel();
    this.close();
  }

  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent): void {
    if (this.open && this.wrap && !this.wrap.contains(ev.target as Node)) this.close();
  }

  ngOnDestroy(): void { this.close(); }
}
