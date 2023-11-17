# Bot_challenge_phase2_week2

Welcome to the Bot Army App! This application allows users to manage and enlist bots into their personal army. Users can view profiles of available bots, add them to their army, release them, and even permanently discharge bots from service.

## Features

- View profiles of all available bots in `BotCollection`.
- Add bots to your army by clicking on them.
- Release bots from your army.
- Permanently discharge bots by deleting them from both the frontend and backend.

## Installation

1. Clone the repository:
git clone https://github.com/your-username/bot-army-app.git
cd bot-army-app
2. Install dependencies:
npm install
3. Run the application:
npm start
The app will be accessible at http://localhost:3000.

##API Endpoints
GET /bots: Retrieve profiles of all available bots.
Example Response:

[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  // ... (other bot profiles)
]

DELETE /bots/:id: Delete a bot by ID.
Example Response:

{}

##Usage
- Visit http://localhost:3000 in your browser.
- Explore the available bots in the BotCollection.
- Click on a bot to add it to your army in YourBotArmy.
- Release bots from your army.
- Permanently discharge bots by clicking the red "x" button.

##License
This project is licensed under the MIT License
