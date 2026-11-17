"""Small numeric helpers."""


def clamp(value: float, low: float, high: float) -> float:
    """Return value limited to the closed interval [low, high]."""
    if low > high:
        raise ValueError("low must not be greater than high")
    return max(low, min(value, high))
