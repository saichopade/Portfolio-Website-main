🌐 Portfolio Website

A personal portfolio website built using HTML, CSS, JavaScript (jQuery) and Node.js (Express) for handling form submissions.
The site includes sections like Home, About, Skills, Projects, and Contact, along with smooth animations and dynamic content.

🚀 Live Demo

🔗 Frontend (Vercel Deploy):
https://portfolio-website-main-ly29l4l9f-saichopades-projects.vercel.app/

📂 Project Structure
Portfolio-Website-main/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── images/
│   └── resume/
│
├── api/
│   └── server.js     # Handles form submission + DB insert
│
├── package.json
└── README.md

✨ Features

✔️ Fully responsive UI
✔️ Smooth scrolling + Section animations
✔️ jQuery text animations
✔️ Contact form stores data in SQL database
✔️ Can be deployed without Git using Vercel CLI
✔️ Clean file structure

🛠️ Tech Stack
Layer	Tools
Frontend	HTML, CSS, JavaScript, jQuery
Backend	Node.js, Express
Database	MySQL / SQL
Hosting	Vercel (Static & Serverless API)
📬 Contact Form Logic

The contact form sends a POST request to the backend:

app.post('/submit-form', (req, res) => {
  // INSERT query logic
  res.redirect('https://your-site.vercel.app/#contact');
});

📦 Deployment (Without Git)
First Time Deployment
vercel

Update the Site After Code Changes
vercel --prod

⚙️ Local Development
Install Dependencies
npm install

Start Backend Server
node api/server.js

Open Frontend

Open public/index.html in a browser

🔐 Environment Variables (if using DB)

Create a .env file in root:

DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

📝 Future Improvements

Dark mode

Project gallery + categories

Admin panel for viewing messages

API-based email service

Analytics & tracking

📄 License

This project is open-source and available for modification and improvement.

👤 Author

Sai Chopade
💼 Backend & ML Developer
📧 Email: (your email here, optional)

⭐ If you like this project, give it a star on GitHub!
