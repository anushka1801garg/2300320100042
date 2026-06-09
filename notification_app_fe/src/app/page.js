"use client";

import { useEffect, useState } from "react";

import { Container, Typography, Pagination, Box } from "@mui/material";

import FilterBar from "../components/FilterBar";
import NotificationList from "../components/NotificationList";

import { fetchNotifications } from "../services/api";

export default function Home() {
  const [notifications, setNotifications] = useState([]);

  const [filter, setFilter] = useState("All");

  const [page, setPage] = useState(1);

  const limit = 10;

  useEffect(() => {
    async function loadData() {
      const data = await fetchNotifications();

      setNotifications(data);
    }

    loadData();
  }, []);

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter((item) => item.Type === filter);

  const startIndex = (page - 1) * limit;

  const currentNotifications = filteredNotifications.slice(
    startIndex,
    startIndex + limit,
  );

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Notification Center
        </Typography>

        <FilterBar filter={filter} setFilter={setFilter} />

        <NotificationList notifications={currentNotifications} />

        <Pagination
          sx={{ mt: 3, mb: 3 }}
          page={page}
          count={Math.ceil(filteredNotifications.length / limit)}
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </Container>
  );
}
