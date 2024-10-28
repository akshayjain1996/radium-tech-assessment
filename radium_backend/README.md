# Radium Technical Assessment - Backend

This is the backend component of the Radium Technical Assessment project. It's a FastAPI application that provides RESTful API endpoints for user management.

## Dependencies

- Python 3.8+
- FastAPI
- Uvicorn
- Motor (MongoDB driver)
- Beanie (ODM for MongoDB)

For a complete list of dependencies, refer to the `pyproject.toml` file.

## Running the Backend Locally

1. Install dependencies:
```
cd radium_backend
python3 -m venv venv
source venv/bin/activate
pip3 install .
```
2. The prefered way of running this application is using Docker and Docker Compose. To run the application using Docker Compose, refer to the instructions in the main README.md file.
3. To run the application locally, use the following command:
```
uvicorn radium_backend.main:app --reload
```
Note: Make sure to have a MongoDB instance running locally or update the MongoDB connection string in the `src/main.py` file.


## Integration tests
There is a set of integration tests that can be run using the following command:
```
poetry run pytest
```

## Future Enhancements

- Implement pagination for the GET /users endpoint
- Add more comprehensive error handling and validation
- Implement caching to improve performance
- Add logging for better debugging and monitoring
- Add more complex querying options (filtering, sorting)

## Tech Stack Choices
- I chose python and FastAPI for the backend because of its simplicity and performance. 
- FastAPI is a modern web framework that is easy to use and provides great performance out of the box. It also has built-in support for async/await, which makes it easy to write asynchronous code. 
- Python is easy to build prototypes and has a large number of libraries available for different tasks.
- If this was not a rest API, I would have implemented it as a GraphQL API. It would have made the API more flexible and allowed clients to request only the data they need.