# Shreeram Power & Automation

Shreeram Power & Automation is an industrial business MSME (Micro, Small, and Medium Enterprise) website built to showcase the company's services, clients, team, and other relevant information. The website includes features such as user login, quotations request, and detailed company information.

## Tech Stack

### Frontend
- **Vite**: A fast build tool and development server for modern web projects.
- **TypeScript**: A statically typed superset of JavaScript that enhances development.
- **Magic UI**: A UI component library for fast and beautiful web applications.
- **ShadCN**: A utility-first CSS library for modern web design.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive designs.

### Backend
- **Express.js**: A minimal web framework for Node.js used to handle routing and API requests.

### Features
- **User Authentication**:
  - Login using **Google** authentication.
  - Login via **Email/Password**.
- **Quotation Request**: Users can provide details to request a quotation from the company.
- **Company Information**: 
  - About the company, services offered, client information, and team details.
  - Location and contact information.
  
## Setup Instructions

Follow the steps below to set up the project on your local machine.

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/shreeram-power-automation.git
2. Navigate into the project directory:
   ```bash
   cd shreeram-power-automation
3. Install dependencies for both frontend and backend:
  - Frontend:
   ```bash
   cd frontend
   npm install
  - Backend:
    ```bash
    cd backend
    npm install
4. Set up environment variables for the backend, such as the Google OAuth credentials, email/password configurations, and database settings.
5. Run the development servers:
- Frontend:
  ```bash
  cd frontend
  npm run dev
- Backend:
  ```bash
  cd backend
  npm run start
6. Open the app in your browser at http://localhost:3000.



