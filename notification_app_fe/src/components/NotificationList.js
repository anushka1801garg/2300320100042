import NotificationCard from "./NotificationCard";

export default function NotificationList({ notifications }) {
  return (
    <>
      {notifications.map((item) => (
        <NotificationCard key={item.ID} notification={item} />
      ))}
    </>
  );
}
