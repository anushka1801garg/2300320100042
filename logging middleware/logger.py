import requests
import sys
from pathlib import Path

sys.path.append(
    str(Path(__file__).resolve().parent.parent / "notification_app_be")
)

from config import ACCESS_TOKEN

LOG_URL = "http://4.224.186.213/evaluation-service/logs"


def log_message(level, package, message):
    headers = {
        "Authorization": f"Bearer {ACCESS_TOKEN}",
        "Content-Type": "application/json"
    }

    payload = {
        "stack": "backend",
        "level": level,
        "package": package,
        "message": message
    }

    try:
        response = requests.post(
            LOG_URL,
            json=payload,
            headers=headers
        )

        print(
            f"Log Status: {response.status_code}"
        )

    except Exception as e:
        print(
            f"Logging Error: {e}"
        )