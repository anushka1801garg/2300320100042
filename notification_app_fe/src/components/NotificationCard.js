import { Card, CardContent, Typography, Chip } from "@mui/material";

export default function NotificationCard({ notification }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Chip label={notification.Type} sx={{ mb: 1 }} />

        <Typography variant="h6">{notification.Message}</Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}
