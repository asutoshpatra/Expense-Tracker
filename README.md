# 💸 ExpendIQ — Personal Expense Tracker

A modern, offline-first expense tracker PWA with real-time cloud sync across all your devices. Built as a single HTML file — no build tools, no frameworks, no dependencies to install.

> Fork it, point it at your own Firebase project, deploy to Netlify, and you have a personal finance app in under 10 minutes.

---

## ✨ Features

- Monthly expense tracking with categories (Fixed, Grocery, Personal, **Custom**)
- Budget management with visual progress bars per category
- Smart insights panel with automatic observations
- Weekly and monthly charts (Chart.js)
- Real-time sync across all devices via Firebase Firestore
- **True offline support** — expenses saved offline sync automatically when back online
- Works fully offline as a PWA (installable on Android & iOS)
- Dark / Light theme toggle
- PIN lock for privacy
- Export to CSV
- Personalised greeting with your name (set on first launch)

---

## 🗂 Project Structure

```
├── expense-tracker.html        # Entire app — all UI, CSS, and JS in one file
├── firebase-config.js          # 🔧 Your Firebase credentials (you edit this)
├── firebase-config.example.js  # Template — shows what values to fill in
├── manifest.json               # PWA manifest (name, icon, theme colour)
├── sw.js                       # Service worker — offline cache + network-first strategy
├── netlify.toml                # Netlify root redirect config
└── README.md                   # This file
```

---

## 🚀 Deploy Your Own Copy — Step by Step

### Step 1 — Fork the Repository

1. Open [github.com/asutoshpatra/Expense-Tracker](https://github.com/asutoshpatra/Expense-Tracker)
2. Click **Fork** (top-right corner)
3. Clone your fork locally:

```bash
git clone https://github.com/YOUR-USERNAME/Expense-Tracker.git
cd Expense-Tracker
```

---

### Step 2 — Set Up Firebase

#### 2a. Create a Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project**
3. Enter a name (e.g. `my-expense-tracker`) → Continue
4. You can disable Google Analytics → **Create project**
5. Wait for the project to be created, then click **Continue**

#### 2b. Enable Firestore Database

1. In the left sidebar click **Firestore Database**
2. Click **Create database**
3. Select **Start in production mode** → **Next**
4. Choose the region closest to you → **Enable**

#### 2c. Set Firestore Security Rules

By default Firestore blocks all reads and writes. Open it for your personal app:

1. In Firestore, click the **Rules** tab
2. Replace everything with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /expiq/{document} {
      allow read, write: if true;
    }
  }
}
```

3. Click **Publish**

> **Note:** `allow read, write: if true` is appropriate for a personal app where you are the only user. If you want to lock it down, add Firebase Authentication and change `if true` to `if request.auth != null`.

#### 2d. Get Your Firebase Config

1. In Firebase Console, click the ⚙️ gear icon → **Project Settings**
2. Scroll down to **Your apps**
3. Click the **`</>`** Web icon to add a web app
4. Give it any nickname → click **Register app**
5. You will see a `firebaseConfig` block — copy it

---

### Step 3 — Configure the App

1. Open **`firebase-config.js`** in your cloned repo
2. Replace the placeholder values with your own Firebase config:

```js
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project",
  storageBucket:     "your-project.firebasestorage.app",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abcdef"
};
```

3. Save the file, then commit and push to your fork:

```bash
git add firebase-config.js
git commit -m "Add my Firebase config"
git push
```

---

### Step 4 — Deploy to Netlify

#### Option A — Connect GitHub (recommended — auto-deploys on every push)

1. Go to [netlify.com](https://netlify.com) and sign up / log in
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** → authorise Netlify to access your repos
4. Select your forked repository from the list
5. Build settings:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.`
6. Click **Deploy site**
7. Netlify will give you a URL like `your-app-name.netlify.app`
8. Every `git push` to your repo will auto-deploy the latest version

#### Option B — Drag & Drop (no Git required)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire project folder onto the page
3. Netlify gives you a live URL instantly

---

### Step 5 — First Launch

Open the app in your browser — a **welcome screen** will appear asking for your name. This is stored locally and used to personalise the greeting. You can change it any time from:

- **Desktop** — click the name chip below the ExpendIQ logo in the sidebar
- **Mobile** — ⚙️ Settings → Your Name

---

### Step 6 — Install as a PWA

Once deployed, install it on your phone so it behaves like a native app:

#### Android (Chrome)
1. Open your Netlify URL in Chrome
2. Tap the **⋮** menu → **Add to Home screen** → **Add**

#### iPhone / iPad (Safari)
1. Open your Netlify URL in **Safari** (must be Safari, not Chrome)
2. Tap the **Share** button → **Add to Home Screen** → **Add**

> On iOS, always open the app from the home screen icon after installing — this gives you the full-screen standalone experience.

---

## 📴 Offline Support

ExpendIQ works fully offline:

- All data is saved to `localStorage` immediately when you add or edit an expense
- Firestore offline persistence queues any writes made while offline
- The moment your connection returns, queued writes flush to Firestore automatically
- The sync badge in the top bar shows the live status: 🟢 Synced · 🟡 Syncing · 🔴 Offline

---

## 🎨 Customisation Reference

| What you want to change | Where to change it |
|-------------------------|--------------------|
| App name | `<title>` and `<h1>` in `expense-tracker.html`; `name` / `short_name` in `manifest.json` |
| Accent colour (amber) | `--accent` and `--accent2` CSS variables in `expense-tracker.html` |
| Default budget amounts | `DEFAULT_BUDGETS` constant in `expense-tracker.html` |
| Built-in expense categories | `icon()` function and `<select>` options in `expense-tracker.html` |
| PWA icon | `icons[].src` in `manifest.json` |
| Theme colours (dark) | `:root` CSS variables in `expense-tracker.html` |
| Theme colours (light) | `html[data-theme="light"]` block in `expense-tracker.html` |
| Demo data shown on first launch | `SEED_EXPENSES` array in `expense-tracker.html` |

---

## 🗃️ Data & Privacy

- All expense data is stored in **your own Firebase Firestore** project — no third-party servers
- `firebase-config.js` contains your Firebase API key; for a personal app this is fine (security is enforced by Firestore Rules, not the key)
- The PIN lock is stored in `localStorage` only — it never leaves your device
- To back up your data at any time: ⚙️ Settings → **Export CSV**

---

## 🛡️ Security Note

Firebase API keys for web apps are **not secrets** — they identify your Firebase project and are safe to include in client-side code. All actual security is enforced by **Firestore Security Rules** (Step 2c).

`allow read, write: if true` is fine for a personal app where you are the only user. To prevent others from writing to your data if you share the URL, use Firebase Authentication and change the rule to `if request.auth != null`.

---

## 🧰 Tech Stack

| Layer | Tech |
|-------|------|
| UI | Vanilla HTML, CSS, JavaScript — no framework |
| Charts | [Chart.js v4.4](https://www.chartjs.org/) via CDN |
| Sync | [Firebase Firestore v9.23](https://firebase.google.com/docs/firestore) (compat SDK via CDN) |
| Offline | Service Worker (network-first for app files, cache-first for CDN assets) |
| Hosting | [Netlify](https://netlify.com) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |

---

## 📄 License

MIT — fork it, use it, make it your own.
