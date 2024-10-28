# Radium Technical Assessment

This project is a user management system consisting of a REST API backend and a React frontend. It allows for creating, reading, updating, and deleting user records.

## Project Structure

- `backend/`: Contains the FastAPI backend application
- `frontend/`: Contains the React frontend application

## Running the Application

### Prerequisites

- Docker and Docker Compose installed on your system
- Python 3.8+ (for running the demo user script)

### Steps to Run
1. Start the application using Docker Compose:
```
docker-compose up --build
```

2. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

### Loading Demo Users

To populate the database with demo users, run the following script:
```
cd radium_backend
python3 -m venv venv
source venv/bin/activate
pip3 install .
python3 scripts/generate_demo_users.py
```

