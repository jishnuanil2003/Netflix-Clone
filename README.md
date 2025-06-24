🎬 Netflix Clone

A responsive and dynamic Netflix clone built with React.js, powered by the TMDB API, featuring trailers via YouTube integration, and optimized with Axios for API calls.

🔥 Features
	•	🎞️ Movie and TV Show carousels (fetching from TMDB)
	•	📽️ Watch trailers via embedded YouTube player
	•	🔍 Responsive UI with clean React components
	•	🚀 Fast loading with Axios
	•	⚙️ Environment-ready scripts for development and production

🧑‍💻 Tech Stack
	•	Frontend: React.js (v19), React DOM
	•	API Integration: Axios
	•	Video Embeds: react-youtube
	•	Testing: Jest, Testing Library
	•	Tooling: React Scripts, Web Vitals

📦 Installation
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
npm install
npm start

🛠️ Scripts
	•	npm start – Run the app in development mode
	•	npm run build – Build the app for production
	•	npm test – Launch the test runner
	•	npm run eject – Eject configuration (use with caution)

🌐 API Reference

This project uses The Movie Database (TMDB) API to fetch trending movies, shows, and other media content.

🔑 You will need your own TMDB API key added in an .env file:
REACT_APP_API_KEY=your_tmdb_api_key

📁 Project Structure

src/
├── components/
│   ├── NavBar.js
│   ├── Banner.js
│   └── RowPost.js
├── App.js
└── index.js
