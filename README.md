# Payment API

This project is a payment gateway application using Paystack, designed to handle payment initialization and verification processes. It consists of a backend API and a frontend application.

## Features

- **Payment Initialization**: Users can initiate payments by providing their email, amount, and name.
- **Payment Verification**: After payment, users can verify the transaction status.
- **Responsive UI**: The frontend is built with React and styled using Bootstrap for a responsive and user-friendly interface.
- **Backend API**: The backend is built with Node.js and Express, providing endpoints for payment initialization and verification.
- **Database Integration**: Uses PostgreSQL to store transaction details securely.

## Project Structure

- **backend/**: Contains the server-side code, including API routes, controllers, and database models.
- **frontend/**: Contains the client-side code, built with React.

## Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd payment_api
   ```

2. Install dependencies for both backend and frontend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables in a `.env` file in the root directory.

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the application.

## License

This project is licensed under the MIT License.
