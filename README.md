# deenLibrary - Client Side

A full-stack digital library app built with **React.js**, **Firebase Auth**, and **Axios**. Users can explore, add, update, and delete books.

**Live Site:** https://animated-capybara-dc317f.netlify.app/

---

## Features

- Browse all books and view details
- Register/Login with Email or Google
- Add, update, delete your books (private routes)
- My Books dashboard for user’s books
- Latest books, top genres, and featured books on Home
- Dark/Light mode toggle
- Real-time comments and reviews
- Responsive design with modern UI
- Success/error notifications using React Hot Toast

---

## Routes

- `/` → Home
- `/all-books` → All Books
- `/add-book` → Add Book (private)
- `/update-book/:id` → Update Book (private)
- `/myBooks` → User’s Books (private)
- `/book-details/:id` → Book Details (private)
- `/login` → Login
- `/register` → Register
- `*` → 404 page

---

## Tech Stack

React.js, React Router, Axios, Firebase Auth, Tailwind CSS, React Hot Toast, date-fns, React Tooltip, imgbb API

---

## Setup

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/client-repo.git
cd client
npm install
npm start
```
