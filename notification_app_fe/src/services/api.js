const API_URL = "/api/notifications";

export async function fetchNotifications() {
  try {
    const response = await fetch(API_URL);

    const data = await response.json();

    return data.notifications || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
