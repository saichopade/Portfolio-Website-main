# 🌐 Portfolio Website

A personal portfolio website built using **HTML, CSS, JavaScript (jQuery)**, and **Node.js (Express)** for handling form submissions.  
The site includes sections like **Home, About, Skills, Projects, and Contact**, along with smooth animations and dynamic content.

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
✔️ Clean and responsive UI  
✔️ Text animations using jQuery  
✔️ Smooth scrolling + interactive sections  
✔️ Contact form connected to SQL database  
✔️ Can be deployed without Git (directly using Vercel CLI)

---

# 🛠️ Technologies Used
| Layer | Tools |
|-------|-------|
| Frontend | HTML, CSS, JavaScript, jQuery |
| Backend | Node.js, Express |
| Database | MySQL / SQL |
| Hosting | Vercel (Static + API) |

---

# 📬 Contact Form Functionality
The form submits data to `server.js`, which stores the information in a SQL database:

```bash
app.post('/submit-form', (req, res) => {
  // insert into DB
  res.redirect('https://your-deployed-site.vercel.app/#contact');
});
```
