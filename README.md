# NC News

Welcome to the **NC News**! This is a React-based frontend application that interacts with the [Northcoders News API](https://github.com/erascu/nc-news-api). The project allows users to view, interact with, and manage articles, comments, and votes in a news platform-style interface.

## Hosted Version 🌐
You can access the live app here:  
[NC News HUB - Live Version](https://nc-news-hub.netlify.app/)

## Project Overview 📋
This frontend project connects to the [Northcoders News API](https://github.com/erascu/nc-news-api), offering users a platform to view articles, post and delete comments, and interact with articles through upvotes and downvotes.

### Key Features:
- <b>Article Listing:</b> Displays a list of all available articles.
- <b>Article Details:</b> View detailed information about each article.
- <b>Commenting System:</b> Allows users to add, view, and delete comments.
- <b>Voting on Articles:</b> Upvote and downvote articles.
- <b>Topic Filtering:</b> View articles filtered by topics.
- <b>Sorting Articles:</b> Organize articles based on criteria such as date or votes.
- <b>Error Handling:</b> Provides feedback to users in case of errors.

## 📦 System Requirements

Before running the project locally, ensure that you have the following installed:

- Node.js (>= 14.x) 🟢
- npm (Node Package Manager) 📦


## 🚀 Getting Started

To get the frontend up and running, follow these steps:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/erascu/nc-news.git
```

### 2. Install Dependencies 🛠️

Navigate to the project directory and install the required dependencies:
```bash
cd nc-news
npm install
```

### 3. Start the Development Server 🚀

To run the application locally, start the development server:

```bash
npm run dev
```

## 🔧 Configuration

### Enable CORS for Backend Communication
This project is set up to communicate with the backend API. Make sure the backend API is running and CORS is enabled for smooth interaction between frontend and backend.

### Environment Variables 🔑
You may need to configure environment variables for your development environment. Create a .env file in the root of your project and add necessary API configurations if required.

## Available Features 🎨
### 1. View Articles
- <b>Component:</b> -//-
- Displays a list of all articles with their titles, authors, and published date.

### 2. View Individual Article
- <b>Component:</b> -//-
- Allows users to click on an article to view detailed information.

### 3. View Comments
- <b>Component:</b> -//-
- Displays comments related to an article and allows the user to post and delete comments.

### 4. Vote on Articles
- <b>Component:</b> -//-
- Users can upvote or downvote articles (currently hardcoded for a single user).

### 5. Post a Comment
- <b>Component:</b> -//-
- Allows users to post a comment on an article. The user is hardcoded for now, but this functionality is ready to be connected to a proper authentication system.

### 6. Delete Comments
- <b>Component:</b> -//-
- Users can delete their own comments.

### 7. Filter Articles by Topic
- <b>Component:</b> -//-
- Displays articles filtered by the selected topic.

### 8. Sort Articles
- <b>Component:</b> -//-
- Allows users to sort articles based on popularity or date.

### 9. Error Handling
- <b>Component:</b> -//-
- Provides error messages when something goes wrong, such as a failed fetch request.

## 🛠️ Built With
- <b>React</b> for building the UI components.
- <b>Axios</b> for making API requests.
- <b>React Router</b> for handling routing and navigation.
- <b>CSS</b> for styling the application.
- <b>dotenv</b> for managing environment variables (if required).

## 🚀 Deployment
The app is deployed and can be accessed live. You can deploy it on services like Netlify, Vercel, or any other platform that supports React applications.

## 💡 Additional Information
This project was created to interact with the [Northcoders News API](https://github.com/erascu/nc-news-api), which is a backend service simulating a Reddit-like platform for managing articles, topics, and comments. The frontend is fully functional for interacting with the API and allows for an engaging user experience.

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
