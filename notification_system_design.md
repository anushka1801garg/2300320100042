# Stage 1 - Priority Inbox

## Problem Statement

Campus users receive a large number of notifications and often miss important updates.

The goal is to build a Priority Inbox that always displays the top N unread notifications based on importance and recency.

---

## Priority Logic

Notifications are prioritized using two factors:

### 1. Notification Type Weight

| Type      | Weight |
| --------- | ------ |
| Placement | 3      |
| Result    | 2      |
| Event     | 1      |

Placement notifications are considered more important than Result notifications, and Result notifications are considered more important than Event notifications.

### 2. Recency

If two notifications belong to the same category, the more recent notification receives higher priority.

---

## Approach

Each notification receives a score based on:

* Notification weight
* Timestamp

A larger score indicates higher priority.

The notifications are then ranked according to this score.

---

## Data Structure Used

Min Heap (Priority Queue)

Heap Size = 10

The heap stores only the current top 10 notifications.

---

## Algorithm

1. Fetch notifications from the Notification API.
2. Calculate score for each notification.
3. Insert notification into the heap.
4. If heap size exceeds 10:

   * Remove the lowest-priority notification.
5. Sort the remaining notifications in descending order.
6. Display the final top 10 notifications.

---

## Time Complexity

O(N log 10)

Since the heap size is fixed at 10, the solution scales efficiently even for a large number of notifications.

---

## Space Complexity

O(10)

Only the top 10 notifications are maintained in memory.

---

## Handling Continuous Incoming Notifications

As new notifications arrive:

1. Compute the notification score.
2. Compare with the minimum element in the heap.
3. If the new notification has a higher priority:

   * Remove the minimum element.
   * Insert the new notification.
4. Maintain heap size at 10.

This ensures real-time maintenance of the Priority Inbox without sorting all notifications repeatedly.
