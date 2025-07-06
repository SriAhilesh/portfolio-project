
---

## 💡 Features

- 🔧 **Spring Boot** backend connected to **MySQL**
- ⚛️ **React** frontend with professional portfolio UI
- 🐳 Containerized using **Docker**
- 🤖 Automated builds with **Jenkins**
- 🚀 Deployment using **Ansible**
- 📊 Real-time monitoring using **Prometheus** & **Grafana**
- 🔁 Fully functional **CI/CD pipeline**
- ☁️ Code versioned and deployed from **GitHub**

---

## ⚙️ Tech Stack

| Layer           | Technology                |
|----------------|---------------------------|
| Frontend       | React, Nginx              |
| Backend        | Spring Boot, Java         |
| Database       | MySQL                     |
| DevOps Tools   | Jenkins, Docker, Ansible  |
| Monitoring     | Prometheus, Grafana       |
| Version Control| Git & GitHub              |

---

## 🔁 CI/CD Pipeline

1. **Code pushed to GitHub**
2. **Jenkins** triggers build
3. Jenkins runs tests & builds Docker images
4. Jenkins executes **Ansible** playbooks
5. Docker containers are deployed (frontend, backend, MySQL)
6. **Prometheus** scrapes metrics, **Grafana** visualizes system health

---

## 🚀 Deployment Steps (Summary)


1. **Push code to GitHub**
2. **Build Docker images** for backend & frontend
3. **Run Ansible playbook** to deploy containers on the server
4. **Jenkinsfile** automates the entire CI/CD process
5. **Prometheus + Grafana** provide live system metrics

---

## 📁 Folder Breakdown

- `backend/` – Java Spring Boot backend (ProjectController, ProjectRepository, Project model)
- `frontend/` – React frontend (components, routes, portfolio UI)
- `ansible/` – Roles for backend, frontend, MySQL, monitoring setup
- `Jenkinsfile` – Declarative pipeline to build, test, deploy the project

---

## 📊 Monitoring Dashboard

Prometheus scrapes `/metrics` from containers and Grafana displays:

- CPU & memory usage
- Container uptime
- API response time
- System health alerts

---

## ✅ Prerequisites

- Docker & Docker Compose
- Jenkins installed and configured
- Ansible installed on host
- Git installed
- Java, Node.js & Maven (for local development)

---

## 🧪 Testing

- Backend: `mvn clean test` (JUnit)
- Frontend: `npm run test` (Jest)
- CI pipeline automatically runs tests

---


## 🙌 Author

**Sri Ahilesh**  
GitHub: [@SriAhilesh](https://github.com/SriAhilesh)  
LinkedIn: [in/sri-ahilesh-059240331](https://linkedin.com/in/sri-ahilesh-059240331)

---
