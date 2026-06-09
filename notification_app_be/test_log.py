import sys
from pathlib import Path

sys.path.append(
    str(Path(__file__).resolve().parent.parent / "logging middleware")
)

from logger import log_message

log_message(
    "info",
    "service",
    "Testing logging API"
)