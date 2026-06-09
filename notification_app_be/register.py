import requests

REGISTER_URL = "http://4.224.186.213/evaluation-service/register"

payload = {
    "email": "anushka.23b0101295@abes.ac.in",
    "name": "Anushka Garg",
    "mobileNo": "9319430399",
    "githubUsername": "anushka1801garg",
    "rollNo": "2300320100042",
    "accessCode": "cXuqht"
}

response = requests.post(REGISTER_URL, json=payload)

print("Status:", response.status_code)
print(response.text)