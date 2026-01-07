<p align="center">
  <img src="https://img.icons8.com/fluency/96/graduation-cap.png" alt="EduSuite Logo" width="80" height="80">
</p>

<h1 align="center">EduSuite</h1>

<p align="center">
  <strong>A Complete School Management System for Nigerian Schools</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#installation">Installation</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#documentation">Docs</a> •
  <a href="#contributing">Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/react-18.2.0-61dafb.svg" alt="React">
  <img src="https://img.shields.io/badge/tailwindcss-3.x-38bdf8.svg" alt="Tailwind">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Demo](#-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Configuration](#-configuration)
- [Routes & Navigation](#-routes--navigation)
- [Components Library](#-components-library)
- [State Management](#-state-management)
- [API Integration Guide](#-api-integration-guide)
- [Database Schema](#-database-schema)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [FAQ](#-faq)
- [License](#-license)

---

## 🎯 Overview

**EduSuite** is a modern, comprehensive school management system designed specifically for Nigerian schools. Built with React and inspired by leading platforms like SAFSMS and SchoolPhix, it provides an intuitive interface for managing students, staff, academics, finances, and communications.

### Why EduSuite?

| Problem | Solution |
|---------|----------|
| 15-25% revenue leakage from poor fee collection | Integrated payment tracking with debtor management |
| Communication breakdown with parents | Built-in SMS and announcement system |
| Result computation errors | Automated grading with configurable scales |
| Complex, cluttered interfaces | Clean, minimal SAFSIMS-inspired design |
| No offline support | Offline-first architecture (PWA ready) |

### Target Users

- 🏫 Private & Public Schools (Nursery to Secondary)
- 👨‍💼 School Administrators & Proprietors
- 👩‍🏫 Teachers & Academic Staff
- 💰 Bursars & Finance Officers
- 👨‍👩‍👧 Parents & Guardians

---

## 🖥️ Demo

### Live Demo
> 🔗 **[View Live Demo](https://YOUR_USERNAME.github.io/edusuite-app/)**

### Screenshots

<details>
<summary>📸 Click to view screenshots</summary>

#### Onboarding Flow
```
┌─────────────────────────────────────────────────────┐
│  ☺ EDUSUITE                                         │
│                                                     │
│              Onboarding                             │
│   Help you setup in 3 simple steps                  │
│                                                     │
│   ① Set Class Level  ────  ② Set Arms  ────  ③ Term│
│                                                     │
│   ┌─────────────────────────────────────────────┐   │
│   │ ☑ Nursery                                   │   │
│   │   ☑ Nursery 1  ☑ Nursery 2                  │   │
│   ├─────────────────────────────────────────────┤   │
│   │ ☑ Primary                                   │   │
│   │   ☑ Primary 1  ☑ Primary 2  ☑ Primary 3... │   │
│   ├─────────────────────────────────────────────┤   │
│   │ ☑ Junior Secondary                          │   │
│   │   ☑ JSS 1  ☑ JSS 2  ☑ JSS 3                │   │
│   └─────────────────────────────────────────────┘   │
│                                                     │
│                              [Previous] [Next →]    │
└─────────────────────────────────────────────────────┘
```

#### Dashboard
```
┌──────────────────────────────────────────────────────────────────┐
│ ☺ EDUSUITE    🔍 Search...                    🔔  👤 Byron Neji │
├────────────┬─────────────────────────────────────────────────────┤
│            │                                                     │
│ 🏠 Dashboard│  Welcome back, Byron! 👋                           │
│            │  Here's what's happening at Edmotion Academy today  │
│ 👥 Students │                                                     │
│   └ All    │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌─────────┐│
│   └ Admiss │  │ 👥 247   │ │ 👔 18    │ │ 🎓 24    │ │ ₦ 2.4M  ││
│            │  │ Students │ │ Staff    │ │ Classes  │ │ Revenue ││
│ 👔 Staff   │  │ ↑ 5%     │ │ ↑ 2%     │ │          │ │ ↑ 12%   ││
│            │  └──────────┘ └──────────┘ └──────────┘ └─────────┘│
│ 📚 Academic│                                                     │
│   └ Classes│  Recent Payments            │  Pending Fees        │
│   └ Subject│  ┌─────────────────────────┐│  ┌─────────────────┐ │
│            │  │ 💵 Adaeze O. - ₦75,000  ││  │ ⚠️ ₦195,000    │ │
│ 📝 Exams   │  │ 💵 Chukwuemeka - ₦108K  ││  │ 5 students     │ │
│            │  │ 💵 Fatima A. - ₦50,000  ││  │ with balance   │ │
│ 💰 Finance │  └─────────────────────────┘│  └─────────────────┘ │
│            │                                                     │
│ ✅ Attend. │  Quick Actions                                      │
│            │  [➕ Add Student] [💵 Payment] [📝 Results] [📱 SMS]│
│ 📱 Comms   │                                                     │
│            │                                                     │
│ ⚙️ Settings│                                                     │
│ 💬 Help    │                                                 💬  │
└────────────┴─────────────────────────────────────────────────────┘
```

</details>

---

## ✨ Features

### 👨‍🎓 Student Management
- ✅ Student registration with comprehensive profiles
- ✅ Admission number auto-generation
- ✅ Guardian/Parent information management
- ✅ Fee balance tracking per student
- ✅ Student promotion and transfer
- ✅ Table and Grid view modes
- ✅ Advanced filtering and search
- ✅ Bulk import/export (CSV, Excel)

### 👩‍🏫 Staff Management
- ✅ Staff directory with roles
- ✅ Department management
- ✅ Subject assignments
- ✅ Salary/Payroll tracking
- ✅ Qualification records

### 📚 Academics
- ✅ Class management (Nursery → SSS)
- ✅ Class arms support (A, B, C or Gold, Silver, Diamond)
- ✅ Subject management with teacher assignments
- ⏳ Timetable scheduling (coming soon)
- ⏳ Lesson plan management (coming soon)

### 📝 Examination & Results
- ✅ Result entry interface
- ✅ Configurable grading scale
- ✅ CA + Exam score computation
- ✅ Automatic grade calculation
- ✅ CBT (Computer-Based Testing) module
- ⏳ Report card generation (coming soon)
- ⏳ Transcript generation (coming soon)

### 💰 Finance
- ✅ Fee structure setup by class/term
- ✅ Payment recording with multiple methods
- ✅ Debtor tracking and management
- ✅ Payment receipt generation
- ⏳ Expense tracking (coming soon)
- ⏳ Staff payroll (coming soon)
- ⏳ Payment gateway integration (Paystack, Flutterwave)

### ✅ Attendance
- ✅ Daily attendance marking
- ✅ Class-wise attendance reports
- ✅ Attendance rate analytics
- ✅ Late arrival tracking

### 📱 Communication
- ✅ Bulk SMS interface
- ✅ SMS templates
- ⏳ Announcement system (coming soon)
- ⏳ WhatsApp integration (coming soon)

### ⚙️ Settings & Configuration
- ✅ School information management
- ✅ Logo upload
- ✅ Theme color customization (16 colors)
- ✅ Academic session/term configuration
- ✅ Grading scale configuration
- ✅ Subscription/Pricing plans

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Library |
| **React Router v6** | Client-side routing (HashRouter for GitHub Pages) |
| **Tailwind CSS** | Styling |
| **Lucide React** | Icon library |
| **Context API** | State management |
| **gh-pages** | GitHub Pages deployment |

### Recommended Backend Stack (for production)
| Technology | Purpose |
|------------|---------|
| **Node.js + Express** | API Server |
| **PostgreSQL** | Database |
| **Redis** | Caching |
| **Paystack/Flutterwave** | Payments |
| **Termii/AfricasTalking** | SMS |

---

## 📁 Project Structure

```
edusuite-app/
├── public/
│   └── index.html              # HTML template with Tailwind CDN
│
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── ui.jsx              # Core component library (15+ components)
│   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   └── Header.jsx          # Top header with search & profile
│   │
│   ├── context/
│   │   └── AppContext.jsx      # Global state management
│   │
│   ├── data/
│   │   └── mockData.js         # Mock data & constants
│   │
│   ├── layouts/
│   │   └── DashboardLayout.jsx # Main layout wrapper
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx       # Main dashboard
│   │   ├── Onboarding.jsx      # 3-step setup wizard
│   │   ├── Settings.jsx        # School settings
│   │   ├── Attendance.jsx      # Attendance module
│   │   ├── students/
│   │   │   ├── StudentsList.jsx
│   │   │   └── StudentDetail.jsx
│   │   ├── staff/
│   │   │   └── StaffList.jsx
│   │   ├── academics/
│   │   │   └── ClassesList.jsx
│   │   └── finance/
│   │       ├── FeesList.jsx
│   │       └── PaymentsList.jsx
│   │
│   ├── App.jsx                 # Route definitions
│   ├── index.js                # Entry point (HashRouter)
│   └── index.css               # Global styles & animations
│
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v8.0.0 or higher) or **yarn**
- **Git** - [Download](https://git-scm.com/)

```bash
# Verify installations
node --version   # Should show v16.x.x or higher
npm --version    # Should show 8.x.x or higher
git --version
```

### Installation

```bash
# 1. Extract the project (if from zip)
unzip edusuite-app.zip
cd edusuite-app

# Or clone from GitHub
git clone https://github.com/YOUR_USERNAME/edusuite-app.git
cd edusuite-app

# 2. Install dependencies
npm install

# 3. Start development server
npm start

# 4. Open browser
# http://localhost:3000
```

### Available Scripts

```bash
npm start       # Start development server
npm run build   # Create production build
npm run deploy  # Deploy to GitHub Pages
npm test        # Run tests
```

---

## 🌐 Deployment

### GitHub Pages (Recommended)

**Step 1: Update package.json**

Edit the `homepage` field with your GitHub username:
```json
"homepage": "https://YOUR_USERNAME.github.io/edusuite-app",
```

**Step 2: Create GitHub Repository**

1. Go to [github.com/new](https://github.com/new)
2. Name: `edusuite-app`
3. Leave empty (no README)
4. Create repository

**Step 3: Push & Deploy**

```bash
# Initialize and push
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/edusuite-app.git
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

**Step 4: Enable GitHub Pages**

1. Repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **(root)**
4. Save and wait 1-2 minutes

**Your site is live at:** `https://YOUR_USERNAME.github.io/edusuite-app/`

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

1. Push to GitHub
2. [netlify.com](https://netlify.com) → New Site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `build`

---

## ⚙️ Configuration

### Environment Variables

Create `.env` file:
```env
REACT_APP_API_URL=https://api.yourschool.com
REACT_APP_PAYSTACK_KEY=pk_test_xxxxx
REACT_APP_SMS_API_KEY=xxxxx
```

### School Configuration

Edit `src/context/AppContext.jsx`:
```javascript
const [schoolInfo, setSchoolInfo] = useState({
  name: 'Your School Name',
  shortName: 'YSN',
  owner: 'School Owner',
  type: 'PRIVATE',
  motto: 'Your Motto',
  country: 'Nigeria',
  state: 'Lagos',
  themeColor: '#3B82F6'
});
```

---

## 🛣️ Routes & Navigation

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Dashboard | Main dashboard |
| `/onboarding` | Onboarding | Setup wizard |
| `/students` | StudentsList | All students |
| `/students/:id` | StudentDetail | Student profile |
| `/staff` | StaffList | Staff directory |
| `/academics/classes` | ClassesList | Classes |
| `/academics/subjects` | Subjects | Subjects |
| `/examination/results` | Results | Results entry |
| `/examination/cbt` | CBT | Online tests |
| `/finance/fees` | FeesList | Fee structure |
| `/finance/payments` | PaymentsList | Payments |
| `/attendance` | Attendance | Attendance |
| `/communication/sms` | SMS | Bulk SMS |
| `/settings` | Settings | Configuration |

---

## 🧩 Components Library

Located in `src/components/ui.jsx`:

| Component | Description |
|-----------|-------------|
| `StatCard` | Dashboard stat card |
| `StatusBadge` | Status indicator |
| `DataTable` | Data table with actions |
| `Modal` | Modal dialog |
| `Input` | Form input |
| `Select` | Dropdown |
| `Button` | Action button |
| `PageHeader` | Page title |
| `Avatar` | User avatar |
| `Spinner` | Loading indicator |
| `Alert` | Alert message |
| `Checkbox` | Checkbox input |
| `Pagination` | Page navigation |

### Usage

```jsx
import { Button, Input, DataTable, StatCard } from './components/ui';

<Button variant="primary" icon={Plus}>Add Student</Button>
<Input label="Email" type="email" required />
<StatCard icon={Users} label="Students" value={247} change={5} />
```

---

## 🗃️ State Management

Using React Context API in `src/context/AppContext.jsx`:

```jsx
import { useApp } from '../context/AppContext';

function MyComponent() {
  const { 
    students,           // Data
    addStudent,         // CRUD
    schoolInfo,         // Config
    openModal,          // UI
    getStats            // Helpers
  } = useApp();
  
  return <div>{students.length} students</div>;
}
```

---

## 🔌 API Integration Guide

Replace mock data with API calls:

```javascript
// src/services/api.js
const API_URL = process.env.REACT_APP_API_URL;

export const studentAPI = {
  getAll: () => fetch(`${API_URL}/students`).then(r => r.json()),
  create: (data) => fetch(`${API_URL}/students`, {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(r => r.json()),
};
```

### Expected Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | List students |
| POST | `/students` | Create student |
| GET | `/students/:id` | Get student |
| PUT | `/students/:id` | Update student |
| GET | `/payments` | List payments |
| POST | `/payments` | Record payment |
| GET | `/classes` | List classes |
| POST | `/results` | Enter results |

---

## 🗄️ Database Schema

```sql
-- Core tables
CREATE TABLE schools (id, name, owner, type, address, ...);
CREATE TABLE users (id, school_id, role, email, password, ...);
CREATE TABLE students (id, school_id, admission_no, name, class_id, ...);
CREATE TABLE classes (id, school_id, name, arm, level, teacher_id);
CREATE TABLE fees (id, school_id, name, amount, class_type, term);
CREATE TABLE payments (id, student_id, fee_id, amount, method, status);
CREATE TABLE results (id, student_id, subject_id, ca1, ca2, exam, grade);
CREATE TABLE attendance (id, student_id, date, status);
```

---

## 🗺️ Roadmap

### ✅ Version 1.0 (Current)
- Onboarding, Dashboard, Students, Staff
- Classes, Fees, Payments, Attendance
- Settings, GitHub Pages deployment

### ⏳ Version 1.1
- CBT module, Report cards
- SMS integration, Email notifications

### ⏳ Version 2.0
- Payment gateway (Paystack)
- Parent portal, Mobile app
- Offline mode (PWA)

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing`
3. Commit changes: `git commit -m "feat: add amazing feature"`
4. Push: `git push origin feature/amazing`
5. Open Pull Request

### Commit Convention
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring

---

## ❓ FAQ

<details>
<summary><strong>Can I use this for my school?</strong></summary>
Yes! EduSuite is open-source (MIT License) and free to use.
</details>

<details>
<summary><strong>Is there a backend?</strong></summary>
This is frontend-only. Build or connect your own backend API.
</details>

<details>
<summary><strong>How do I skip onboarding?</strong></summary>

In `AppContext.jsx`, set:
```javascript
const [onboardingComplete, setOnboardingComplete] = useState(true);
```
</details>

<details>
<summary><strong>Can I change the theme?</strong></summary>
Yes! Go to Settings → Theme Color or edit `themeColor` in AppContext.
</details>

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

```
MIT License
Copyright (c) 2026 EduSuite
Permission is hereby granted, free of charge, to any person obtaining a copy...
```

---

## 🙏 Acknowledgments

- Design inspired by [SAFSMS](https://safsms.com/) & [SchoolPhix](https://schoolphix.com/)
- Icons by [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

<p align="center">
  <strong>EduSuite</strong> - Making School Management Simple 🎓
</p>

<p align="center">
  Built with ❤️ for Nigerian Schools
</p>
