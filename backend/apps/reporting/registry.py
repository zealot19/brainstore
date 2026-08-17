REPORTS: dict = {}


def register(code, name, filters, orientation="portrait"):
    def deco(fn):
        REPORTS[code] = {"code": code, "name": name, "filters": list(filters),
                         "orientation": orientation, "build": fn}
        return fn
    return deco
