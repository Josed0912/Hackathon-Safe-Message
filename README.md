# Safe-Message

## Project Description
This app was developed during Bell’s Geekfest Hackathon by a team of 3 in response to the prompt: "An innovative way of implementing cybersecurity."

## Technology Stack
### Front-End
The front end of the application is built using React.js, ensuring a responsive and user-friendly design.

### Back-End
The back end of the app is implemented using Node.js.

### External APIs
This app integrates the following external APIs:

- Google Gmail API:

	- Utilized to access the user’s inbox.
- OOPSpam API:

	- Used for detecting whether the emails are spam or not.
## Application Functionality
To run the application, both the backend and front end need to be executed.

### Run the Back End
1. Navigate to the /safe-message/mini-backend folder in the application.
2. Use the node server.js command.
### Run the Front End
1. Navigate to the /safe-message folder.
2. Ensure you have the required node modules by using the npm i command.
3. Use the npm start command.
Once the application is started, a button "Scan Gmail" will be displayed on the screen along with the app’s description.

The first time you click the button, you will be redirected to the Gmail login page to enter your Gmail account credentials and grant permission to Safe-Message to access your inbox.

After completing the authentication, you will be redirected back to the application.

Now, you can click the "Scan Gmail" button again, and the app will retrieve your latest 100 emails, providing a rating report on the likelihood of each email being spam (rated from 0 for unlikely to 6 for definite).
