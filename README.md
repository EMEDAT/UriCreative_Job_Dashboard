# Job Application Dashboard 📝

A full-stack web application that allows users to view and filter job applications, along with basic analytics visualized through charts. Built with **Next.js**, **Nest.js**, and **TypeScript**.

---

## Features ✨

- **Frontend**: Next.js with Tailwind CSS for a modern, responsive UI.
- **Backend**: Nest.js REST API for handling job application data.
- **Chart Visualization**: Displays application statistics with Chart.js.
- **Filter Options**: Filter applications by status (Pending, Accepted, Rejected).
- **Responsive Design**: Mobile and desktop-friendly layout.

---

## Demo 🚀

- **Frontend**: [Job Application Dashboard (Vercel)](https://uri-creative-job-dashboard-8sod.vercel.app/)
- **Backend**: [API (Render)](https://uricreative-job-dashboard-backend.onrender.com/api/applications)

---

## Tech Stack 🛠️

| **Technology** | **Description**                              |
| -------------- | -------------------------------------------- |
| **Next.js**    | React framework for the frontend             |
| **Nest.js**    | Node.js framework for the backend            |
| **TypeScript** | Typed superset of JavaScript                 |
| **Chart.js**   | Charting library for data visualization      |
| **Tailwind CSS** | Utility-first CSS framework                 |
| **Render**     | Backend deployment                           |
| **Vercel**     | Frontend deployment                          |

---

## Getting Started 🚦

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/EMEDAT/UriCreative_Job_Dashboard.git
   cd UriCreative_Job_Dashboard
   ```

2. Install dependencies for both backend and frontend:
   ```bash
   # Navigate to backend
   cd backend
   npm install

   # Navigate to frontend
   cd frontend
   npm install
   ```

### Accessing the Project Locally 🏃‍♂️

Install dependencies for both backend and frontend:
# Navigate to backend
- cd backend
- npm install

# Navigate to frontend
- cd ../frontend
- npm install


### Running the Project Locally 🏃‍♂️

#### Frontend

Start the frontend:
```bash
cd frontend
npm run dev
```
The frontend will run on [http://localhost:3000](http://localhost:3000).

#### Backend

Start the backend:
```bash
cd backend
npm run start:dev
```
The backend API will run on [http://localhost:3001](http://localhost:3001).

---

## Deployment 🌐

### Backend (Render)

Deploy the backend to Render:

1. Connect your repository to Render.
2. Set the root directory to 

backend

.
3. Set the build command to `npm run build`.
4. Set the start command to `npm run start:prod`.
5. Add the environment variable `PORT=3001`.

Verify the deployed API:
- Example Endpoint: `https://your-backend-url/api/applications`.

### Frontend (Vercel)

Deploy the frontend to Vercel:

1. Connect your repository to Vercel.
2. Set the root directory to 

frontend

.
3. Set the build command to `npm run build`.
4. Set the output directory to `.next`.
5. Add the environment variable `NEXT_PUBLIC_API_URL=https://your-backend-url`.

Verify the deployed application:
- Example: `https://your-frontend-url`.

---

## API Endpoints 🔗

### Base URL
`https://your-backend-url/api`

| Endpoint           | Method | Description                           |
| ------------------ | ------ | ------------------------------------- |
| `/applications`    | GET    | Fetch all job applications            |
| `/applications/stats` | GET    | Fetch statistics (total and by status) |

---

## Folder Structure 🗂️

```
UriCreative_Job_Dashboard/
├── backend/              # Backend (Nest.js)
│   ├── src/
│   │   ├── job-application/
│   │       ├── job-application.controller.ts
│   │       ├── job-application.model.ts
│   │       ├── job-application.service.ts
│   │       ├── job-application.module.ts
│   │   ├── app.module.ts
│   ├── main.ts
│   ├── package.json
├── frontend/             # Frontend (Next.js)
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   ├── components/
│   │   │   ├── ApplicationTable.tsx
│   │   │   ├── StatisticsChart.tsx
│   │   │   ├── Filters.tsx
│   ├── package.json
├── README.md             # Project Documentation
```

---

## Contributing 🤝

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License 📄

This project is licensed under the MIT License. See the LICENSE file for details.
```
Contributing 🤝
Fork the repository.
Create a new branch: git checkout -b feature-name.
Commit your changes: git commit -m "Add feature".
Push to the branch: git push origin feature-name.
Open a pull request.
License 📄
This project is licensed under the MIT License. See the LICENSE file for details.