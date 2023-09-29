import requests
import json

# Your GitHub repository information
owner = "Mr-Yash-beldar"
repo = "Budget_Buddy"

# Fetch contributors using the GitHub API
response = requests.get(f"https://api.github.com/repos/{owner}/{repo}/contributors")
contributors = json.loads(response.text)
contributor_count = len(contributors)

# Generate the badge URL
badge_url = f"https://img.shields.io/static/v1?label=Contributors&message={contributor_count}&color=brightgreen"

# Print the badge URL
print(badge_url)
