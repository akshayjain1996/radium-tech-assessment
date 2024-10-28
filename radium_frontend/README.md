# Radium Technical Assessment - Frontend

This is the frontend component of the Radium Technical Assessment project. It's a React application that provides a user interface for managing user records.

## Dependencies

- Node.js 14+
- React 17+
- Axios
- Tailwind CSS

For a complete list of dependencies, refer to the `package.json` file.

## Running the Frontend Locally

1. Install dependencies:
```
npm install
```
2. The prefered way of running this application is using Docker and Docker Compose. To run the application using Docker Compose, refer to the instructions in the main README.md file.
3. To run this outside docker, start the development server:
```
npm start
```

## Future Enhancements
- Implement user authentication and protected routes
- Add more advanced form validation
- Implement pagination or infinite scrolling for the user list
- Add a search functionality to filter users
- Implement error handling and user feedback for failed API calls
- Add unit and integration tests for components and API interactions
- Implement state management (e.g., Redux) for more complex data flows
- Add accessibility features for better usability

## Tech Stack Choices
- I chose React for the frontend because of its flexibility and large ecosystem of libraries and tools. 
- I used tailwind CSS for styling as it allows for rapid prototyping and easy customization. 
- Axios was used for making API calls due to its simplicity and wide adoption in the React community. 
- I used Figma + [ScreenShotToCode](https://github.com/abi/screenshot-to-code) to create the components.