import requests

API_KEY = "AIzaSyAgjcWPDngXZPW6iWV38w1hY3CY4Oia5a0"

origin = "Bangalore"
destination = "Chennai"

url = "https://maps.googleapis.com/maps/api/distancematrix/json"

params = {
    "origins": origin,
    "destinations": destination,
    "key": API_KEY
}

response = requests.get(url, params=params)
data = response.json()

# Extract distance and duration
distance = data["rows"][0]["elements"][0]["distance"]["text"]
duration = data["rows"][0]["elements"][0]["duration"]["text"]

print("Distance:", distance)
print("Duration:", duration)
