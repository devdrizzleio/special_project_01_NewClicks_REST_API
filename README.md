# 🚀 NewClicks — Production-Grade Affiliate Marketing Backend Service

---

## 🌐 Project Overview

**NewClicks** is a production-grade REST API backend inspired by affiliate marketing platforms like ClickBank.

It is designed as a **minimal yet scalable system** where:

* Vendors create products
* Affiliates generate tracking links
* User activity is tracked
* Transactions and commissions are processed
* Analytics provide insights

The project follows a **clean architecture** and is fully **deployment-ready** using modern DevOps practices.

---

## 🎯 Core Objectives

* Build a **real-world backend system**
* Apply **MVC + Service Layer architecture**
* Implement **affiliate tracking system**
* Maintain **minimal yet scalable structure**
* Ensure **cloud-ready deployment**
* Provide **complete Swagger API documentation**

---

## 🧠 Architecture Overview

The system follows a **modular monolithic design** with a **microservice-ready mindset**.

### Key Layers

* **Models** → Database schemas
* **Controllers** → Request handling
* **Routes** → API endpoints
* **Services** → Business logic
* **Middlewares** → Validation & error handling
* **Utils** → Helper functions
* **Config** → Environment & database setup

---

## 📂 Folder Structure

### Root Structure

```text
newclicks/
│
├── src/
├── docs/
├── k8s/
├── .github/
├── .env
├── .dockerignore
├── Dockerfile
├── package.json
├── info.md
└── server.js
```

---

### Source Code Structure

```text
src/
│
├── config/
│   ├── env.config.js
│   └── db.config.js
│
├── models/
│   ├── user.model.js
│   ├── product.model.js
│   ├── affiliateLink.model.js
│   ├── trackingEvent.model.js
│   └── transaction.model.js
│
├── controllers/
│   ├── user.controller.js
│   ├── product.controller.js
│   ├── affiliate.controller.js
│   ├── tracking.controller.js
│   └── transaction.controller.js
│
├── routes/
│   ├── user.routes.js
│   ├── product.routes.js
│   ├── affiliate.routes.js
│   ├── tracking.routes.js
│   └── transaction.routes.js
│
├── services/
│   ├── commission.service.js
│   ├── tracking.service.js
│   └── analytics.service.js
│
├── middlewares/
│   ├── error.middleware.js
│   └── validation.middleware.js
│
└── utils/
    ├── apiResponse.js
    └── generateId.js
```

---

### DevOps & Deployment Structure

```text
docs/
└── swagger.js

k8s/
├── deployment.yaml
├── service.yaml
└── configmap.yaml

.github/
└── workflows/
    └── ci.yml
```

---

## 🧩 Core Modules

### 👤 User Module

* Create users
* Retrieve user data

### 📦 Product Module

* Create products
* Fetch product list

### 🔗 Affiliate Module

* Generate tracking links

### 📡 Tracking Module

* Track CLICK events
* Track PURCHASE events

### 💳 Transaction Module

* Store transactions
* Handle commission logic

### 📊 Analytics Module

* Clicks count
* Purchase count
* Conversion rate
* Revenue summary

---

## ⚙️ Technology Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Swagger
* UUID
* Nodemon

---

## 🔐 Environment Configuration

Environment variables are managed using `.env`.

### Example Variables

```text
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/newclicks
BASE_URL=http://localhost:5000
DEFAULT_COMMISSION_RATE=0.10
TRACKING_CODE_LENGTH=12
```

---

## 📘 API Documentation

Swagger UI is available at:

```text
/api-docs
```

Features:

* Interactive testing
* Organized endpoints
* Clear API structure

---

## 🔄 API Base URL

```text
/api/v1/
```

---

## 🚀 DevOps & Deployment

### ⚙️ CI/CD (GitHub Actions)

* Runs on every push
* Installs dependencies
* Performs build checks

---

### 🐳 Docker

* Lightweight container
* Uses Node.js Alpine image
* Environment variables passed at runtime

Run example:

```text
docker run -d -p 5000:5000 --env-file .env newclicks
```

---

### ☸️ Kubernetes

* Deployment configuration
* Service exposure via NodePort
* ConfigMap for environment variables

Apply configuration:

```text
kubectl apply -f k8s/
```

---

## 🌍 Platform Agnostic Design

This project runs on:

* Local environment
* Docker containers
* Cloud platforms
* Kubernetes clusters

---

## 🔥 Key Features

* RESTful API design
* Affiliate tracking system
* Commission calculation
* Event-based architecture
* Swagger documentation
* CI/CD pipeline
* Docker containerization
* Kubernetes deployment

---

## 🧠 Design Principles

* Minimal yet production-grade
* Forward-only development
* Clean separation of concerns
* Environment-driven configuration
* Scalable architecture

---

## 🏁 Conclusion

**NewClicks** represents a complete backend system built with:

* Real-world architecture
* Scalable design
* Deployment readiness

It serves as a **portfolio-ready project** demonstrating strong backend engineering and system design skills.

---
