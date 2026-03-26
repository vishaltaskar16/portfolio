# Vishal Taskar - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Python Developer and Full Stack Developer.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- pnpm (or npm/yarn)

### Installation & Running

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development server**
   ```bash
   pnpm run dev
   ```

3. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The portfolio will automatically reload when you make changes

4. **Build for production**
   ```bash
   pnpm run build
   ```

## 📂 Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Hero.tsx          # Landing section
│   │   │   ├── About.tsx         # About me section
│   │   │   ├── Skills.tsx        # Skills showcase
│   │   │   ├── Projects.tsx      # Project portfolio
│   │   │   ├── Education.tsx     # Education & certifications
│   │   │   ├── Contact.tsx       # Contact form
│   │   │   └── Footer.tsx        # Footer with links
│   │   └── App.tsx               # Main app component
│   └── styles/                   # CSS files
├── package.json
└── README.md
```

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Scrolling** - Seamless navigation between sections
- **Interactive Projects** - View all 8 projects or featured 3
- **Working Links** - All GitHub, LinkedIn, Email, and Telegram links are functional
- **Modern UI** - Built with React, TypeScript, and Tailwind CSS
- **Resume Download** - Direct download link to PDF resume

## 🎨 Sections

1. **Hero** - Introduction with name, title, and social links
2. **About** - Professional background and achievements
3. **Skills** - Technical and soft skills categorized by domain
4. **Projects** - Portfolio of 8 projects (3 featured, 5 additional)
5. **Education** - Academic qualifications and certifications
6. **Contact** - Contact form and information
7. **Footer** - Quick links and social media

## 📱 Projects Included

### Featured Projects
1. **MoodBeats** - ML-based music recommendation system
2. **Life Guard** - Personal safety mobile app
3. **City Street Mart** - E-commerce grocery platform

### Additional Projects
4. **Data Analysis Dashboard** - Python data visualization
5. **Telegram Bot Automation** - Bot for 800+ subscribers
6. **RESTful API Service** - Node.js backend API
7. **Task Management System** - Full-stack task manager
8. **Portfolio Website** - This portfolio site

## 🔗 Adding More Projects

To add more projects from your GitHub, edit `/src/app/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Portfolio Website',
    description: 'Detailed description of your project...',
    image: 'https://images.unsplash.com/photo-...', // Use unsplash_tool to get images
    tags: ['React', 'Node.js', 'MongoDB'], // Tech stack
    github: 'https://github.com/vishaltaskar16/your-repo',
    demo: 'https://your-demo-link.com', // Optional
    featured: true, // Set to true to show in featured section
  },
  // Add more projects here...
];
```

## 🛠 Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI, shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📝 Customization

### Update Personal Information
- **Hero Section**: Edit `/src/app/components/Hero.tsx`
- **About Section**: Edit `/src/app/components/About.tsx`
- **Contact Info**: Edit `/src/app/components/Contact.tsx`
- **Footer**: Edit `/src/app/components/Footer.tsx`

### Update Skills
Edit the `skillCategories` array in `/src/app/components/Skills.tsx`

### Update Education
Edit the `education` and `certifications` arrays in `/src/app/components/Education.tsx`

### Change Colors/Theme
Edit `/src/styles/theme.css` for custom color schemes

## 🌐 Deployment

### Deploy to Vercel
```bash
vercel deploy
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
1. Update `vite.config.ts` with your repo name
2. Run `pnpm run build`
3. Deploy the `dist` folder

## 📧 Contact

- **Email**: vishaltaskar1602@gmail.com
- **Phone**: +91 8975591487
- **GitHub**: [@vishaltaskar16](https://github.com/vishaltaskar16)
- **LinkedIn**: [vishaltaskar16](https://linkedin.com/in/vishaltaskar16)
- **Telegram**: [@cprogramingbyvishal](https://t.me/cprogramingbyvishal)

## � Contact Form SMTP Integration (Visitor → Your Email)

This portfolio now includes a working backend + frontend contact form that sends every visitor submission to your email address: `vishaltaskar16@gmail.com`.

### 1) Configure SMTP in `.env`

Create or update `.env` with:

```dotenv
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=<your-gmail-address>
SMTP_PASS=<your-16-char-app-password-without-spaces>
SMTP_FROM_EMAIL=<your-gmail-address>
RECIPIENT_EMAIL=vishaltaskar16@gmail.com

# Server
PORT=5000
NODE_ENV=development
```

- `SMTP_USER`: Your Gmail address (example: `samruddhipatil1602@gmail.com`)
- `SMTP_PASS`: Gmail app password (from https://myaccount.google.com/apppasswords)
- `RECIPIENT_EMAIL`: set to `vishaltaskar16@gmail.com` (your target email)

### 2) Install required packages

```bash
npm install express nodemailer cors dotenv concurrently
```

This adds the backend dependencies used in `server.js`.

### 3) Run both servers

Terminal 1 (frontend):
```bash
npm run dev
```

Terminal 2 (backend):
```bash
npm run server
```

Optional combined command:
```bash
npm run dev:all
```

### 4) How it works

- Visitor submits form in `src/app/components/Contact.tsx`
- Frontend posts to `http://localhost:5000/api/send-email`
- Backend reads visitor `name`/`email`/`message`
- Backend sends email to `vishaltaskar16@gmail.com` with visitor details
- Backend sends confirmation to visitor (optional)
- Form shows success or error message with status

### 5) Troubleshooting

1. **Error `EAUTH 535-5.7.8`**
   - Ensure 2-Step Verification is enabled for Gmail
   - Generate App Password (Mail > Windows Computer)
   - Copy (remove spaces) into `SMTP_PASS`

2. **Error `Network error` from frontend**
   - Backend not running on port 5000
   - Verify `npm run server` is running and status is:
     `Server running on http://localhost:5000`

3. **Email recipient wrong**
   - Confirm `RECIPIENT_EMAIL=vishaltaskar16@gmail.com` in `.env`

4. **No email sent**
   - Check backend terminal output for `Email sent successfully!`
   - Check Gmail spam/promotions; sometimes new sender activity goes there

---
## ☁️ Deploy on Render (Free tier)

Use Render to deploy your portfolio frontend and backend with a single repository.

### 1) Create GitHub repo
- Push your project to GitHub (e.g., `vishaltaskar16/portfolio`)

### 2) Backend service (Express + SMTP)
1. In Render dashboard, click **New** → **Web Service**
2. Connect GitHub, choose repo
3. Branch: `main` (or your branch)
4. Environment: `Node` (latest)
5. Build Command:
   ```bash
   npm install
   ```
6. Start Command:
   ```bash
   npm run server
   ```
7. Set Environment Variables in Render:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `587`
   - `SMTP_SECURE` = `false`
   - `SMTP_USER` = `your-gmail@example.com`
   - `SMTP_PASS` = `your-app-password` (no spaces)
   - `SMTP_FROM_EMAIL` = `your-gmail@example.com`
   - `RECIPIENT_EMAIL` = `vishaltaskar16@gmail.com`
   - `PORT` = `5000`
   - `NODE_ENV` = `production`

8. Save and deploy.

### 3) Frontend service (Vite)
1. Render dashboard → **New** → **Static Site**
2. Connect same repo and branch
3. Build Command:
   ```bash
   npm install
   npm run build
   ```
4. Publish Directory: `dist`

5. Set environment variable (for API base URL):
   - `VITE_API_URL` = `https://<your-backend-render-url>`

6. Deploy.

### 4) Update frontend contact API URL
- In `src/app/components/Contact.tsx`, `API_URL` uses `import.meta.env.VITE_API_URL` by default.
- Make sure Render variable points to backend URL like `https://your-backend.onrender.com`.

### 5) Test deployed app
- Browse your Render frontend URL.
- Submit contact form with visitor name/email/message.
- Confirm email arrives at `vishaltaskar16@gmail.com`.

### Notes
- Render static site and web service may take a minute to build.
- Ensure your SMTP app password is valid and 2-step verification is on.

---
## �📄 License

This project is open source and available under the MIT License.

---

Made with ❤️ by Vishal Taskar
