# 🚀 TradeDesk – Zerodha Inspired Trading Platform

A full-stack trading platform inspired by Zerodha, built to simulate real-world stock trading workflows with a modern UI and scalable backend.

---

## 📌 Overview

TradeDesk is a web-based trading application that allows users to explore stocks, view dashboards, and simulate buy/sell operations. It is designed to demonstrate real-world fintech architecture using the MERN stack.

---

## ✨ Features

* 📊 Interactive Trading Dashboard
* 📈 Stock Listings & Price Display (Static / API-based)
* 💼 Portfolio Management (Buy/Sell Simulation)
* 🔐 User Authentication (Login/Signup)
* 📉 Order History Tracking
* ⚡ Responsive UI (Mobile + Desktop)
* 🌙 (Optional) Dark Mode Support

---

## 🛠 Tech Stack

**Frontend**

* React.js
* CSS / Bootstrap / Tailwind (whichever you used)

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**Other Tools**

* Axios
* JWT Authentication
* Git & GitHub

---

## 🏗️ Project Structure

```
TradeDesk/
│
├── client/          # React frontend
├── server/          # Backend API
│   ├── models/      # Database schemas
│   ├── routes/      # API routes
│   ├── controllers/ # Business logic
│
├── screenshots/     # Project images
├── README.md
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/TradeDesk.git
cd TradeDesk
```

### 2️⃣ Install dependencies

```
cd client
npm install

cd ../server
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the server folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the project

```
# Run backend
cd server
npm run dev

# Run frontend
cd client
npm start
```

---

## 🌍 Live Demo

👉 https://your-live-link.vercel.app

---

## 📸 Screenshots

Add your screenshots in `/screenshots` folder and link them:

```
![Dashboard](./screenshots/dashboard.png)
![Portfolio](./screenshots/portfolio.png)
```

---

## 🔌 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | /api/auth/signup | Register user     |
| POST   | /api/auth/login  | Login user        |
| GET    | /api/stocks      | Fetch stock data  |
| POST   | /api/orders      | Place order       |
| GET    | /api/orders      | Get order history |

---

## 🧠 Architecture & Design Decisions

* Used MERN stack for full-stack JavaScript consistency
* REST APIs for communication between frontend & backend
* JWT for secure authentication
* Component-based UI for scalability and reusability
* Clean folder structure for maintainability

---

## 🚧 Future Improvements

* 🔄 Real-time stock data integration (WebSockets)
* 💳 Payment gateway integration
* 📊 Advanced charting (TradingView integration)
* 🔔 Notifications system
* 📱 Mobile app version

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Your Name**

* GitHub: https://github.com/your-username
* LinkedIn: https://linkedin.com/in/your-profile

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
