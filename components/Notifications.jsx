export default function NotificationList({ notifications }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul className="list-disc list-inside">
        {notifications.map(n => (
          <li key={n._id}>{n.message}</li>
        ))}
      </ul>
    </div>
  );
}
