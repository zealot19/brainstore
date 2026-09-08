"""Sync registry — declares, per model, its sync direction and conflict policy.

Drives the CDC capture layer and the push/pull endpoints:
- DOWN: master → agency (config, master-authoritative, read-only at agencies)
- UP:   agency → master (agency-owned transactions, single-origin)
Models not registered are instance-local and never synced.
"""
from dataclasses import dataclass

DOWN = "down"
UP = "up"

MASTER_WINS = "master_wins"
LAST_WRITE_WINS = "last_write_wins"


@dataclass(frozen=True)
class SyncSpec:
    label: str          # "app_label.modelname" (lowercased)
    direction: str      # DOWN | UP
    conflict: str = MASTER_WINS


_REGISTRY: dict[str, SyncSpec] = {}


def register(label: str, direction: str, conflict: str = MASTER_WINS) -> None:
    if direction not in (DOWN, UP):
        raise ValueError(f"Invalid sync direction: {direction}")
    _REGISTRY[label.lower()] = SyncSpec(label.lower(), direction, conflict)


def spec_for(label: str) -> SyncSpec | None:
    return _REGISTRY.get(label.lower())


def is_syncable(label: str) -> bool:
    return label.lower() in _REGISTRY


def labels_for_direction(direction: str) -> list[str]:
    return [l for l, s in _REGISTRY.items() if s.direction == direction]


def all_specs() -> dict[str, SyncSpec]:
    return dict(_REGISTRY)


def clear() -> None:  # test helper
    _REGISTRY.clear()
