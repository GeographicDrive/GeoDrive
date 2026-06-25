🚗 GeoDrive

A web-based real-world vehicle simulation experience that lets you drive, fly, and explore anywhere on Earth using real satellite imagery and 3D terrain.





🌟 Features

Multiple Vehicle Types

🚗 Car - Drive through streets with realistic physics

🚌 Bus - Larger vehicle with different handling characteristics

✈️ Plane - Full flight simulation with throttle, pitch, roll, flaps, and landing gear

🛰️ Satellite - Orbital view mode


Rendering Modes

3D Cesium - Real 3D globe with actual terrain elevation and building footprints (requires optional Cesium Ion token)

3D CSS - Lightweight perspective-transformed view with chase camera

2D Map - Top-down satellite view


Navigation & GPS

📍 GPS navigation with turn-by-turn directions

🗺️ Picture-in-picture mini-map overlay

🧭 Compass and distance tracking

Teleport to any location worldwide


Camera Systems

👁️ First Person - Immersive driver/pilot view

🚙 Third Person - Chase camera with customizable follow delay and zoom

Camera banking/rolling with aircraft

Adjustable field of view (FOV)

Horizon blend control for cinematic views


Physics & Environment

Realistic vehicle collision detection

Flight physics including altitude, vertical speed, and ground reference

Terrain-aware ground height (with Cesium World Terrain)

Satellite-textured 3D buildings


Controls

⌨️ Keyboard controls (WASD/Arrow keys)

📱 Mobile touch controls:

Virtual joystick

D-Pad steering

Gas/Brake pedals

Flight controls (throttle, pitch, flaps, gear)


Customizable steering sensitivity


Additional Features

🌐 Progressive Web App (PWA) - Install to home screen

📏 Multiple speed units (KPH, MPH, Knots)

🎨 Customizable vehicle size and map zoom

💾 Local settings persistence

🌓 Responsive design for desktop and mobile


🚀 Getting Started

Option 1: Use the Live Demo

Visit the hosted version: https://nofacechihiro777.github.io/GeoDrive/

Tip: Keep Chrome zoom at 67% for best experience.

Option 2: Run Locally

1. Clone the repository:



git clone https://github.com/nofacechihiro777/GeoDrive.git  
cd GeoDrive

2. Serve the files with any HTTP server:



# Using Python  
python -m http.server 8000  
  
# Using Node.js (http-server)  
npx http-server -p 8000  
  
# Using PHP  
php -S localhost:8000

3. Open http://localhost:8000 in your browser



⚙️ Configuration

Optional: Cesium Ion Token

GeoDrive works without any API keys using flat ArcGIS satellite imagery. However, you can unlock advanced 3D features by adding a free Cesium Ion token:

Features unlocked with a token:

Real terrain elevation (Cesium World Terrain)

OpenStreetMap building footprints

Google Photorealistic 3D tiles (optional)


How to get a token:

1. Sign up at ion.cesium.com (free tier available)


2. Create an access token


3. Open GeoDrive Settings → 3D Imagery Keys


4. Paste your token and click "Apply"



Your token is stored only in your browser's localStorage and is never sent anywhere except to Cesium's servers.

Map Styles (with token)

Terrain + OSM - Real elevation with grey building footprints

Google Photorealistic - Textured 3D mesh from Google (replaces terrain and OSM buildings)


🎮 Controls

Keyboard

Key	Action

W / ↑	Accelerate / Pitch up (plane)
S / ↓	Brake/Reverse / Pitch down (plane)
A / ←	Turn left / Roll left (plane)
D / →	Turn right / Roll right (plane)
F	Toggle fullscreen
Esc	Exit fullscreen


Plane Controls

Key	Action

W/S	Throttle up/down
A/D	Yaw left/right
Arrow Keys	Pitch and roll
G	Toggle landing gear
B	Toggle air brake
F	Toggle flaps


Mobile Controls

Ground vehicles: D-Pad or virtual joystick for steering, gas/brake pedals

Plane: Flight joystick + throttle/pitch/roll buttons


🛠️ Tech Stack

HTML5 - Structure

CSS3 - Styling with custom properties and 3D transforms

JavaScript (Vanilla) - No frameworks, pure ES6+

Leaflet - 2D map rendering and GPS calculations

CesiumJS - 3D globe, terrain, and photorealistic tiles

ArcGIS - Satellite imagery tiles

Service Worker - PWA offline support


📱 Browser Support

✅ Chrome/Edge (recommended)

✅ Firefox

✅ Safari

✅ Mobile browsers (iOS Safari, Chrome Mobile)


Note: For best performance, use a modern browser with WebGL support.

🏗️ Project Structure

GeoDrive/
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # Core application logic
├── manifest.json       # PWA manifest
├── sw.js              # Service worker for offline support
└── icon-512.png       # App icon

## 🐛 Known Limitations  
  
- Satellite texture on buildings refreshes only at load time (not while driving) to avoid visual pop  
- 3D Cesium mode is first-person only; use 3D CSS mode for third-person chase cam  
- Flight physics are simplified for gameplay, not realistic simulation  
- Requires internet connection for map tiles (unless cached by service worker)  


  🤖 AI-Assisted Development

GeoDrive was developed with the assistance of artificial intelligence tools.

AI was used throughout the project to help with:

- Code generation and prototyping
- Feature implementation
- Bug fixing and optimization
- UI/UX improvements
- Documentation and project structure

All final design decisions, integration, testing, and project direction were performed by the author.

GeoDrive is an example of human creativity and AI-assisted software development working together.

## 🙏 Credits  
  
- **Map tiles**: © [ArcGIS](https://www.arcgis.com/)  
- **3D Globe**: [CesiumJS](https://cesium.com/)  
- **2D Maps**: [Leaflet](https://leafletjs.com/)  
- **Photorealistic 3D**: © Google (via Cesium Ion)  
  
## Questions
  
For questions, please open an issue on GitHub.  
  
---  
  
**Made with ❤️ for exploration and simulation enthusiasts**
