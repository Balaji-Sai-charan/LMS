# LMS MERN Stack Application

A comprehensive Learning Management System (LMS) built using the MERN stack. This application provides functionality similar to popular platforms like Udemy and Coursera, enabling users to manage, purchase, and access online courses.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and registration.
- **Admin Panel**: Manage courses, lectures, and users.
- **Student Dashboard**: View enrolled courses, progress tracking, and course details.
- **Course Management**: Add, edit, and delete courses and lectures.
- **Payment Integration**: Secure course purchase functionality.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dark Mode**: Toggle between light and dark themes.

## Technologies Used

### Frontend
- React.js
- TailwindCSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Other Tools
- Cloudinary (for media storage)
- Multer (for file uploads)

## Directory Structure

```plaintext
LMS/
├── client/
│   ├── index.html
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── public/
│   ├── postcss.config.js
│   ├── package.json
│   ├── vite.config.js
│   ├── jsconfig.json
│   ├── components.json
│   ├── package-lock.json
│   ├── README.md
│   ├── tailwind.config.js
│   └── src/
│       ├── App.jsx
│       ├── index.css
│       ├── assets/
│       ├── components/
│       ├── lib/
│       ├── main.jsx
│       ├── layout/
│       ├── pages/
│       ├── App.css
│       ├── DarkMode.jsx
│       ├── features/
│       └── app/
└── server/
    ├── controllers/
    ├── .gitignore
    ├── middlewares/
    ├── package.json
    ├── models/
    ├── database/
    ├── routes/
    ├── package-lock.json
    ├── index.js
    └── utils/
```

For a detailed directory structure, see the provided hierarchy.

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB
- npm or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Balaji-Sai-charan/LMS.git
   cd LMS
   ```

2. Install dependencies for the client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `server` directory with the following keys:
     ```env
     MONGO_URI=<your_mongodb_uri>
     JWT_SECRET=<your_jwt_secret>
     CLOUDINARY_NAME=<your_cloudinary_name>
     CLOUDINARY_API_KEY=<your_cloudinary_api_key>
     CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
     ```

4. Start the development servers:
   ```bash
   # Start client
   cd client
   npm run dev

   # Start server
   cd ../server
   npm run dev
   ```

5. Open the application:
   Navigate to `http://localhost:3000` in your browser.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin my-feature`.
5. Open a pull request.


---

Developed by **Balaji Sai Charan**.
