# 🌐 Portfolio Website

A personal portfolio website built using **HTML, CSS, JavaScript (jQuery)**, and **Node.js (Express)** for handling form submissions.  The site includes sections like **Home, About, Skills, Projects, and Contact**, along with smooth animations and dynamic content.

---

# 🚀 Live Demo
🔗 **Frontend (Vercel Deploy):**  
https://portfolio-website-main-ly29l4l9f-saichopades-projects.vercel.app/

---

# 📂 Project Structure

```
Portfolio-Website-main/
│
├── public/
│ ├── index.html
│ ├── styles.css
│ ├── script.js
│ ├── images/
│ └── resume/
│
├── api/
│ └── server.js # Handles form submission + DB insert
│
├── package.json
└── README.md
```
---

# 🖥️ Run Locally
1. Install Dependencies
```bash
npm install
```
2. Start Backend
```bash
node api/server.js
```
3. Open Frontend
Open this file in your browser:
```bash
public/index.html
```
---

# ✨ Features
- 📱 Responsive layout (mobile-first)
- ⚡ Smooth jQuery-powered animations
- 🎯 Sections: Home, About, Skills, Contact
- 📬 Contact form stores data in SQL database
- 💻 Easy to deploy using Vercel CLI (no Git required)
- 🧩 Modular file structure

---

# 🛠️ Technologies Used
| Technology  | Used For |
|-------------|-----------|
| 💅 HTML/CSS | Frontend Layout & Styling |
| 🔥 JavaScript + jQuery | Dynamic Content & Animations |
| 🧠 Node.js (Express) | Backend API & Form Handling |
| 🗄️ MySQL | Database for form submissions |
| ☁️ Vercel | Hosting: static frontend + API route |
---

# 📬 Contact Form Functionality
The form submits data to `server.js`, which stores the information in a SQL database:

```bash
app.post('/submit-form', (req, res) => {
  // insert into DB
  res.redirect('https://your-deployed-site.vercel.app/#contact');
});
```
