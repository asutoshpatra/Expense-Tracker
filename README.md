# 💸 ExpendIQ

**Version 3.0** · A personal finance app that is one HTML file.

Expenses, income, bank accounts, credit cards, loans and EMIs, splits with friends,
investments and remittances — offline-first, installable on your phone, with optional
end-to-end encrypted sync across devices.

No build step. No framework. No `npm install`. Download one file and open it.

> **Your data is yours.** Everything lives in your own browser by default. Sync is optional,
> goes to *your* Firebase project, and is encrypted on your device before it leaves.
> There is no server of mine in the middle, because there is no server of mine at all.

---

## Contents

1. [Try it in 30 seconds](#1-try-it-in-30-seconds)
2. [What it does](#2-what-it-does)
3. [Host it on GitHub Pages](#3-host-it-on-github-pages)
4. [Other ways to host it](#4-other-ways-to-host-it)
5. [Install it on your phone](#5-install-it-on-your-phone)
6. [Optional — sync across devices](#6-optional--sync-across-devices)
7. [Optional — the local AI assistant](#7-optional--the-local-ai-assistant)
8. [Backups](#8-backups)
9. [Privacy and security](#9-privacy-and-security)
10. [Customising it](#10-customising-it)
11. [Troubleshooting](#11-troubleshooting)
12. [Tech stack](#12-tech-stack)
13. [Credit](#credit) · [License](#license)

---

## 1. Try it in 30 seconds

No account, no setup, nothing to install:

1. Download [`expense-tracker.html`](expense-tracker.html) — the **Download raw file** button, top right
2. Double-click it

That is the whole app. It runs from your hard drive, stores data in that browser, and needs
no internet after the first load. Everything in section 2 works this way.

When you want it on your phone, or on more than one machine, carry on to section 3.

---

## 2. What it does

<details open>
<summary><strong>Money in and money out</strong></summary>

- Monthly expense tracking with categories — Fixed, Grocery, Personal, and your own
- **Multi-currency.** Every amount keeps the currency it was spent in; nothing is silently converted
- **Paid from several places at once** — split one expense across accounts, cards, or people
- **Split one expense across categories** — rent and a refundable deposit on one receipt, with the
  deposit kept out of your spending and tracked as money you get back
- **Scheduled payments** — date an expense in the future and the account is debited when it arrives
- **Money In** — refunds, gifts, dividends, reimbursements: anything arriving that is not salary
- Income with a full paycheck breakdown — gross, tax, deductions, net
- Transfers between your own accounts, including across currencies
- Cashback and reward points, from a card or from a bank offer

</details>

<details open>
<summary><strong>Accounts and cards</strong></summary>

- Bank accounts and credit cards, grouped by currency
- Credit cards with limits, utilisation, **shared limits across cards**, statement and due dates
- Bill pay that autofills the statement balance — charges made after the statement roll to next month
- **Cash counted note by note.** Adjust the total when it does not match your wallet, and the app
  asks which denominations you actually have
- Click any account for its own transaction history, with date filters

</details>

<details open>
<summary><strong>Loans and EMIs</strong></summary>

- Student, personal, business, home and vehicle loans
- **Several disbursements** at different dates, each accruing from its own date
- **Simple or compound interest chosen separately** for during and after the moratorium
- Prepayments, part-payments, and payments made through someone else — without double-counting
  money you had already sent them
- **Read a lender's PDF statement** and have the disbursements and payments filled in for you,
  shown for checking before anything is saved
- Standing monthly payments, so a fixed EMI records itself
- **See the interest working** — every line of the calculation, with a chart of principal against interest

</details>

<details open>
<summary><strong>Beyond expenses</strong></summary>

- **Splits** with friends — multi-currency balances, settle-up, and Splitwise import
- **Investments** — stocks, mutual funds, FDs, ULIPs, NPS, EPF and gold, with FD maturity and
  renewal, withdrawals split into capital versus realised gain, and ULIP premium/fund/charges breakdown
- **Send money home** — remittances with the fees and the exchange rate you actually got
- Budgets with visual progress per category
- Weekly and monthly charts, and a combined ledger of every money movement, each row undoable

</details>

<details open>
<summary><strong>Privacy, and the rest</strong></summary>

- **Tab lock** — put any tab behind a second password or a 4/6-digit PIN, with a one-time recovery code
- **PIN lock** on the whole app, with an idle timeout
- **Totals start blurred.** Tap to reveal — useful on a train
- Encrypted local backups on a schedule, with dated snapshots
- CSV export, bill reminders, dark and light themes
- Installable as a PWA, works fully offline
- **A local AI assistant** that answers questions about your own data — see section 7

</details>

---

## 3. Host it on GitHub Pages

Free, no account beyond GitHub, and it redeploys every time you push. About five minutes.

### Step 1 — Fork this repository

1. Click **Fork** at the top right of this page
2. Leave the name as `Expense-Tracker` or pick your own → **Create fork**

### Step 2 — Turn on Pages

1. In **your fork**, go to **Settings** (the repo's own Settings tab, not your account's)
2. In the left sidebar, click **Pages**
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**
4. Set **Branch** to `main` and the folder to **`/ (root)`**
5. Click **Save**

### Step 3 — Open it

Give it a minute for the first build, then go to:

```
https://YOUR-USERNAME.github.io/Expense-Tracker/expense-tracker.html
```

The repo root — `https://YOUR-USERNAME.github.io/Expense-Tracker/` — shows this README as a
web page, because GitHub renders it when there is no `index.html`. The app is at the path above.

> **Want the bare URL to open the app instead?** Add a file called `index.html` containing:
> ```html
> <meta http-equiv="refresh" content="0; url=expense-tracker.html">
> ```
> You lose the README landing page and gain a shorter link. Your call.

### Step 4 — Every push redeploys

Edit anything, commit, push. Pages rebuilds in under a minute. Check progress under the repo's
**Actions** tab if it seems slow.

> **The published site is public**, even if you make your fork private. That is fine — no
> credentials are committed, and the app holds no data until *you* put data in *your* browser.
> A stranger opening your URL gets an empty app. If you turn on sync, publish the Firestore
> rules in section 6 first; those are what keep your synced records private.

---

## 4. Other ways to host it

It is static files. Any static host works.

| | GitHub Pages | Netlify | Just the file |
|---|---|---|---|
| URL shape | `you.github.io/repo/` | `your-app.netlify.app` | none — local |
| Served from | a subpath | the site root | your disk |
| Auto-deploy on push | yes | yes | n/a |
| Deploy without Git | no | yes, drag and drop | n/a |
| Works offline | yes, after first visit | yes, after first visit | always |

### Netlify, connected to GitHub

1. [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**
2. Choose **GitHub**, authorise it, pick your fork
3. **Build command:** leave empty. **Publish directory:** `.`
4. **Deploy site**

`netlify.toml` redirects `/` to the app, so the bare domain works without an `index.html`.

### Netlify drag and drop, no Git at all

Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the project folder onto the page.
This is also the only deploy route that ships a local `firebase-config.js`, since that file is
gitignored — see section 6.

---

## 5. Install it on your phone

Once it is hosted, install it so it behaves like a real app — its own icon, no browser chrome,
works with no signal.

**Android (Chrome)** — open your URL → **⋮** menu → **Add to Home screen** → **Add**

**iPhone / iPad (Safari)** — open your URL in **Safari**, not Chrome → **Share** → **Add to Home
Screen** → **Add**

> On iOS, open it from the home-screen icon afterwards. Safari and the installed app keep
> separate storage, so data added in one will not appear in the other.

---

## 6. Optional — sync across devices

**Skip this entire section if you only use one device.** The app is fully functional without
Firebase and will simply report sync as unavailable.

Sync uses **your own** Firebase project. Your records are encrypted on your device before upload,
so the database only ever holds ciphertext — including from whoever runs it.

### 6a. Create a Firebase project

1. [console.firebase.google.com](https://console.firebase.google.com) → **Add project**
2. Give it a name, e.g. `my-expense-tracker` → **Continue**
3. Google Analytics is not needed → **Create project**

### 6b. Enable Firestore

1. Left sidebar → **Firestore Database** → **Create database**
2. **Start in production mode** → **Next**
3. Pick the region closest to you → **Enable**

### 6c. Publish the security rules — do this before entering real data

1. In Firestore, open the **Rules** tab
2. Replace everything with the contents of [`firestore.rules`](firestore.rules), or paste this:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /expiq/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. **Publish**

> **Never use `allow read, write: if true`.** A Firebase web API key is public by design — it
> names your project and authorises nothing. With an open rule, anyone who opens your page and
> reads the source has full read and delete access to everything. These rules are the only thing
> standing between your records and the internet.

### 6d. Enable passwordless sign-in

1. Left sidebar → **Authentication** → **Get started**
2. **Sign-in method** tab → **Email/Password** → toggle **on**
3. In the same panel, also toggle on **Email link (passwordless sign-in)** → **Save**
4. **Settings** tab → **Authorised domains** → **Add domain**:

   | Host | What to enter |
   |---|---|
   | GitHub Pages | `your-username.github.io` |
   | Netlify | `your-app-name.netlify.app` |

   Enter the **host only** — no `https://`, no path. GitHub Pages serves from a subpath, but
   Firebase authorises the *domain*, so the repo name is not part of it.

   `localhost` is authorised out of the box, so local testing works before you deploy.

### 6e. Give the app your config

Firebase Console → ⚙ **Project Settings** → **Your apps** → **`</>`** Web → register an app →
copy the `firebaseConfig` block.

**Option A — paste it into the app.** Recommended. Nothing to edit, nothing to commit, and it is
the only way that works on a phone.

> Settings → **Cloud sync** → paste the whole block → **Save & connect**

It is kept in that device's own storage. Set each device up once. No credentials ever enter the repo.

**Option B — ship a config file.** `cp firebase-config.example.js firebase-config.js`, fill it in.
Note that `firebase-config.js` is **gitignored**, so it is not part of a Git-based deploy — GitHub
Pages and GitHub-connected Netlify will not have it, and those devices will ask you to paste the
config anyway. Use drag-and-drop Netlify deploys if you want the file shipped.

### 6f. Sign in

1. Settings → **Cloud sync**
2. Enter your **email and a password** → **Send sign-in link**
3. Open the email **on that same device** and tap the link

Your data appears. Set a PIN when offered, and from then on the PIN is all you need — you stay
signed in until you explicitly sign out.

> **Use the same password on every device.** It is never sent anywhere; it is turned into the
> encryption key on the device. A different password gives you a different, unreadable copy, and
> it cannot be reset. Write it down somewhere safe.

<details>
<summary><strong>Why both an email link and a password?</strong></summary>

They are two independent layers and you need both:

| | What it proves | Sent to Firebase |
|---|---|---|
| **Email link** | that the address is yours — which is what the security rule checks | yes |
| **Password** | nothing. It is turned into the encryption key | **never** |

Signing in decides *who may touch the document*. The password decides *who can read what is
inside it* — including whoever runs the database. Signing in cannot unlock the data on its own,
because Firebase never had the key. If it could produce one, the cloud copy would not be
end-to-end encrypted in any meaningful sense.

The password becomes a key on the device the moment you submit the form, and the key — not the
password — is kept in IndexedDB, which stores `CryptoKey` objects natively. It survives reloads
without its bytes ever existing in readable form, and exporting it is refused even by the app's
own code. Signing out deletes it.

The salt is derived from your email rather than drawn at random, which is what lets a device that
has never seen your account reproduce the same key from the same password. A salt is not a secret
— its job is to stop one precomputed table covering every user, and one salt per address does
that, with PBKDF2 still running its 150,000 iterations.

</details>

---

## 7. Optional — the local AI assistant

The 💬 button answers questions about your own figures — "what did I spend on groceries in
August", "who owes me", "what is my net worth". Those are answered from your data directly, offline,
with no model involved.

For free-form questions it can also use [Ollama](https://ollama.com), running **on your own
machine**. Nothing is sent to any company.

1. Install Ollama and make sure you already have a model — `ollama list` shows them
2. Allow the browser to reach it, then start it:

   ```
   $env:OLLAMA_ORIGINS='*'; ollama serve      # Windows PowerShell
   OLLAMA_ORIGINS='*' ollama serve            # macOS / Linux
   ```

3. In the app: **Settings → 🤖 Assistant** → pick your model, or change the address if Ollama runs
   on another machine

> ⚠ **This only works when the app is served from the same machine as Ollama** — a local file, or
> `localhost`. A browser will not let a page served from a public address such as
> `github.io` reach `localhost`; the request is blocked before it is sent, whatever you do to
> Ollama. The app detects this and says so rather than blaming the server. Everything else in the
> app works fine on a hosted copy.
>
> The assistant puts a summary of your accounts, balances, loans and income into each prompt. That
> is harmless pointed at your own machine — which is why the app warns you before you point it
> anywhere else.

---

## 8. Backups

**Settings → Backup & Migrate**

- **Export backup (.json)** — everything, optionally password-encrypted
- **Import backup** — restore onto any device
- **Data folder** — link a folder on your computer and the app writes dated snapshots there on a
  schedule you choose
- **Export CSV** — this month, for a spreadsheet

Worth doing before you clear browser data, change phone, or experiment with a fork.

---

## 9. Privacy and security

Everything lives in your browser by default. Nothing is transmitted unless you turn on sync, and
then only to a Firebase project you own.

If you do turn on sync, two independent things protect it:

| | What it does | Where it lives |
|---|---|---|
| **Firestore rules** | Tie each document to one account. An unauthenticated request is refused outright | Your Firebase project |
| **Encryption** | AES-GCM 256, key derived with PBKDF2, applied on the device before upload | Your password, never transmitted |

The rules keep others out. The encryption means there is nothing worth taking if they get in.
Neither substitutes for the other, which is why section 6c is not optional.

**What is safe to commit:** a Firebase web API key is public by design. It names your project; it
authorises nothing. What must never be relaxed is the rules.

**What is not recoverable:** the sync password. Losing it costs you the cloud copy, not the local one.

---

## 10. Customising it

Everything is in `expense-tracker.html`. Open it in any editor and search.

| What you want to change | Where |
|---|---|
| App name | `<title>` and `<h1>`; `name` / `short_name` in `manifest.json` |
| Accent colour | `--accent` and `--accent2` CSS variables |
| Theme colours | `:root` for dark, `html[data-theme="light"]` for light |
| Default budgets | `DEFAULT_BUDGETS` |
| Categories | the `icon()` function and the category `<select>` options |
| Demo data on first launch | `SEED_EXPENSES` |
| PWA icon | `icons[].src` in `manifest.json` |
| What the assistant knows | `buildFinanceContext()` |

### Files in this repo

```
expense-tracker.html         the entire app — UI, styles, logic
sw.js                        service worker: offline cache
manifest.json                PWA manifest — name, icon, theme colour
firebase-config.example.js   template for optional sync config
firestore.rules              the security rules from section 6c
firebase.json                points the Firebase CLI at those rules
netlify.toml                 root redirect, ignored by other hosts
```

---

## 11. Troubleshooting

**The page is blank / features are missing after an update.** Hard-reload: `Ctrl+Shift+R`, or
`Cmd+Shift+R` on a Mac. The app also offers a reload banner when it spots a new version, with an
ℹ️ button listing what changed.

**Sign-in fails with `auth/unauthorized-domain`.** The host is not in Firebase → Authentication →
Settings → Authorised domains. Add the host only, no `https://`, no path — section 6d.

**Sign-in fails with `auth/configuration-not-found`.** Email link sign-in is not enabled — section 6d,
step 3.

**Sync says "not configured".** The device has no Firebase config. Paste it in: Settings → Cloud
sync. Each device needs this once.

**My data did not appear after signing in on a new device.** Use the same password you used on the
first device. It is the encryption key, not a login credential, so a different one produces a
different and unreadable copy.

**The assistant says it cannot reach Ollama.** If the app is on a hosted URL, that is expected and
unfixable — section 7. Locally, check `OLLAMA_ORIGINS='*'` is set and Ollama was restarted after.

**It does not work offline.** Visit the site once online so the service worker can cache it, then
try again. If it still fails, check for a service worker under your browser's developer tools →
Application.

---

## 12. Tech stack

| Layer | What |
|---|---|
| UI | Vanilla HTML, CSS and JavaScript. No framework, no build step |
| Charts | [Chart.js v4.4](https://www.chartjs.org/) via CDN |
| PDF reading | [pdf.js](https://mozilla.github.io/pdf.js/) via CDN, loaded only when you import a statement |
| Sync | [Firebase Firestore v9.23](https://firebase.google.com/docs/firestore), compat SDK via CDN |
| Sign-in | [Firebase Auth v9.23](https://firebase.google.com/docs/auth) — email link, passwordless |
| Encryption | Web Crypto — AES-GCM 256, PBKDF2 150,000 iterations |
| Local storage | `localStorage` for data, IndexedDB for the non-extractable crypto key |
| Offline | Service worker — network-first for app files, cache-first for CDN assets |
| Assistant | [Ollama](https://ollama.com) on your own machine, entirely optional |

---

## Credit

**ExpendIQ was built by [Asutosh Patra](https://github.com/asutoshpatra).**

Fork it, use it, build on it, ship it commercially — the MIT licence allows all of that,
and you do not need to ask. One condition comes with it, and it is not optional:

> **Keep the credit.** The MIT licence requires the copyright notice and the licence text to
> be included in all copies or substantial portions of the software. If you ship this, or a
> meaningful chunk of it, [`LICENSE`](LICENSE) goes with it.

That is the legal minimum. If you are building something on top of this, the decent thing is
also to say so somewhere a person can see — a README line, an About screen, a footer. Something like:

```
Based on ExpendIQ by Asutosh Patra — https://github.com/asutoshpatra/Expense-Tracker
```

The app carries the same credit in **Settings**, at the bottom. Please leave it there. If you
have rewritten enough that it no longer feels like my work, that is fair — but keep `LICENSE`
regardless, because that part is the licence talking, not me.

Built something with it? I would genuinely like to see it — open an issue and show me.

---

## License

[MIT](LICENSE) © 2026 Asutosh Patra.

Permissive: commercial use, modification, distribution and private use are all fine.
The one requirement is the notice above.
