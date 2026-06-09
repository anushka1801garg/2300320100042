export async function GET() {
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbnVzaGthLjIzYjAxMDEyOTVAYWJlcy5hYy5pbiIsImV4cCI6MTc4MDk5MTk3MCwiaWF0IjoxNzgwOTkxMDcwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMWVlMmM5ZTMtM2NlMy00NDQ2LWFkYmEtZTFlNTRiODNlZTgzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYW51c2hrYSBnYXJnIiwic3ViIjoiNWEzNDA4M2ItNGNmOS00YzUyLTljZGQtZjIyOTNmNWY2OGQzIn0sImVtYWlsIjoiYW51c2hrYS4yM2IwMTAxMjk1QGFiZXMuYWMuaW4iLCJuYW1lIjoiYW51c2hrYSBnYXJnIiwicm9sbE5vIjoiMjMwMDMyMDEwMDA0MiIsImFjY2Vzc0NvZGUiOiJjWHVxaHQiLCJjbGllbnRJRCI6IjVhMzQwODNiLTRjZjktNGM1Mi05Y2RkLWYyMjkzZjVmNjhkMyIsImNsaWVudFNlY3JldCI6Im1jYmFOREpkd3N0VUJNVlEifQ.rxXhaKMy44iSlQiefhxaa7e8kkOdvKszZE4yop8iKYU";

  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
    );

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
