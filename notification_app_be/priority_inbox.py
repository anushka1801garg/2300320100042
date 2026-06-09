import requests
import heapq
from datetime import datetime
import sys
from pathlib import Path

sys.path.append(
    str(Path(__file__).resolve().parent.parent / "logging middleware")
)

from logger import log_message

sys.path.append(
    str(Path(__file__).resolve().parent)
)

from config import ACCESS_TOKEN

API_URL = (
    "http://4.224.186.213/evaluation-service/notifications"
)


def get_weight(notification_type):
    weights = {
        "Placement": 3,
        "Result": 2,
        "Event": 1
    }

    return weights.get(notification_type, 0)


def fetch_notifications():

    log_message(
        "info",
        "service",
        "Fetching notifications"
    )

    headers = {
        "Authorization": f"Bearer {ACCESS_TOKEN}"
    }

    response = requests.get(
        API_URL,
        headers=headers
    )

    print(
        f"Notification Status: {response.status_code}"
    )

    if response.status_code != 200:

        log_message(
            "error",
            "service",
            "Failed to fetch notifications"
        )

        return []

    data = response.json()

    return data.get(
        "notifications",
        []
    )


def get_top_notifications(
    notifications,
    n=10
):

    log_message(
        "info",
        "service",
        "Computing top notifications"
    )

    heap = []

    for notification in notifications:

        weight = get_weight(
            notification["Type"]
        )

        timestamp = datetime.strptime(
            notification["Timestamp"],
            "%Y-%m-%d %H:%M:%S"
        )

        score = (
            weight,
            timestamp.timestamp()
        )

        heapq.heappush(
            heap,
            (
                score,
                notification
            )
        )

    top_notifications = heapq.nlargest(
        n,
        heap
    )

    return [
        item[1]
        for item in top_notifications
    ]


def main():

    notifications = fetch_notifications()

    if not notifications:

        print(
            "No notifications found"
        )

        return

    top_notifications = (
        get_top_notifications(
            notifications
        )
    )

    print(
        "\nTOP 10 PRIORITY NOTIFICATIONS\n"
    )

    for index, notification in enumerate(
        top_notifications,
        start=1
    ):

        print(
            f"{index}. "
            f"{notification['Type']} | "
            f"{notification['Message']} | "
            f"{notification['Timestamp']}"
        )


if __name__ == "__main__":
    main()