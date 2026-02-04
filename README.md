# 📦 CI + Docker Automation with GitHub Actions

This project demonstrates a complete **CI/CD pipeline** using:

* Node.js
* Docker
* GitHub Actions
* DockerHub

The pipeline automatically:

* Installs dependencies
* Runs tests
* Builds Docker image
* Pushes image to DockerHub

---

## 🚀 Tech Stack

* **Node.js 18**
* **Express.js**
* **Docker**
* **GitHub Actions**
* **DockerHub**

---

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── Dockerfile
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Application Overview

A simple Express server that runs on port `3000`.

### Run Locally

```bash
npm install
npm start
```

Open:

```
http://localhost:3000
```

---

## 🐳 Docker Setup

### Build Image

```bash
docker build -t demo-app .
```

### Run Container

```bash
docker run -p 3000:3000 demo-app
```

---

## 🔄 CI/CD Pipeline Overview

The pipeline is defined in:

```
.github/workflows/ci.yml
```

### 🔹 Trigger

Runs automatically on:

* Push to `main` branch

---

### 🔹 Pipeline Stages

1. Checkout Code
2. Setup Node.js
3. Install Dependencies
4. Run Tests
5. Login to DockerHub
6. Build Docker Image
7. Push Image to DockerHub

---

## 🏷 Docker Image Tagging Strategy

Two tags are generated:

* `latest` → Rolling version
* `<commit-sha>` → Unique immutable version

This ensures traceability and version control.

Example:

```
username/demo-app:latest
username/demo-app:9f8c123
```

---

## 🔐 GitHub Secrets Configuration

To enable DockerHub push, configure:

Repository → Settings → Secrets → Actions

Add:

```
DOCKER_USERNAME
DOCKER_PASSWORD
```

---

## 🖥 Dev Environment

This project was developed using:

* Windows WSL2
* Ubuntu
* Docker Desktop (WSL integration enabled)

---

## 📊 Pipeline Architecture

```
Local Dev (WSL)
        ↓
Push to GitHub
        ↓
GitHub Actions Runner (Ubuntu VM)
        ↓
Run Tests
        ↓
Build Docker Image
        ↓
Push to DockerHub
```

---

## 🎯 Learning Objectives

This project demonstrates:

* Continuous Integration (CI)
* Containerization
* Automated Docker builds
* Secure credential handling
* Image versioning strategy
* Basic CI/CD pipeline design

---

## 🔥 Future Improvements

* Add Jest unit testing
* Add Docker image security scanning (Trivy)
* Multi-stage Dockerfile optimization
* Deploy automatically to AWS EC2
* Kubernetes deployment workflow

---

## 👨‍💻 Author

Aditya Vishwakarma
DevOps & Cloud Enthusiast
