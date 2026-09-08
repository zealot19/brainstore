def entry_to_dict(cl) -> dict:
    """Serialise a ChangeLog row for transport between instances."""
    return {
        "id": cl.id,
        "entity": cl.entity,
        "object_id": str(cl.object_id),
        "op": cl.op,
        "payload": cl.payload,
        "version": cl.version.isoformat() if cl.version else None,
        "origin_node": cl.origin_node,
    }
