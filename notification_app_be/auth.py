import requests

AUTH_URL = "http://4.224.186.213/evaluation-service/auth"

payload = {
    "email": "anushka.23b0101295@abes.ac.in",
    "name": "anushka garg",
    "rollNo": "2300320100042",
    "accessCode": "cXuqht",
    "clientID": "5a34083b-4cf9-4c52-9cdd-f2293f5f68d3",
    "clientSecret": "mcbaNDJdwstUBMVQ"
}

response = requests.post(AUTH_URL, json=payload)

print("Status:", response.status_code)
print(response.text)