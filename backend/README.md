# Backend - Payment API

This is the backend service for the Payment API project, built with Node.js and Express. It provides endpoints for initializing and verifying payments using Paystack.

## Features

- **Initialize Payment**: Endpoint to start a payment process with Paystack.
- **Verify Payment**: Endpoint to verify the status of a payment.
- **Database Integration**: Uses Sequelize ORM to interact with a PostgreSQL database.
- **Error Handling**: Comprehensive error handling for API requests.

## Project Structure

- **src/api/**: Contains API service classes for interacting with Paystack.
- **src/controllers/**: Contains controller logic for handling API requests.
- **src/models/**: Contains Sequelize models for database tables.
- **src/routes/**: Contains route definitions for the API.
- **src/utils/**: Contains utility functions and middleware.

## Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL

### Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file in the root directory.

### Running the Server

Start the backend server:
```bash
npm start
```

The server will run on `http://localhost:5000`.

## API Endpoints

- **POST /api/paystack/initialize**: Initialize a payment.
- **GET /api/paystack/verify**: Verify a payment.

## License

This project is licensed under the MIT License.
