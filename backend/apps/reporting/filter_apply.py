def apply_filters(qs, f, mapping):
    """Applique les filtres renseignés à un queryset.

    mapping = {clé_filtre: 'chemin__orm'} — le même filtre logique mappe des chemins
    ORM différents selon le rapport. Seules les valeurs non vides sont appliquées.
    """
    for key, lookup in mapping.items():
        val = f.get(key)
        if val not in (None, ""):
            qs = qs.filter(**{lookup: val})
    return qs
