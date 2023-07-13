# Phase-3 Project using React, Sinatra, Active Record and Ruby

By: Corey Sawin

This is a Movie Review App built with React on the frontend and Sinatra on the backend. The application allows a user to create, read, update and delete inividual reviews for a movie from the database. 

## Technologies Used

### Frontend
- React
- JavaScript
- React-Router-Dom
- React-Boostrap
- CSS

### Backend
- Ruby
- Sinatra
- ActiveRecord

### GitHub Repos
Frontend: https://github.com/sawincp/phase-3-frontend
Backend: https://github.com/sawincp/phase-3-sinatra-react-project

## Setup/Installation Requirements

### Frontend
- Clone frontend GitHub repository from  https://github.com/sawincp/phase-3-frontend
- Open phase-3-frontent project file
- In terminal run npm install to install project depencies
- In terminal run npm start to start development server in browswer

### Backend
- Clone backend GitHub repository from https://github.com/sawincp/phase-3-sinatra-react-project
- Open phase-3-sinatra-react-project file
- In terminal run bundle install
- In terminal run bundle exec rake db:migrate db:seed 
- In terminal run rake server

## Application Description

On page load, the user will be directed to the Home page of the application. On this page, they will see a paragraph describing the website along with two links at the top of the page. One is labeled Home the other is MoveList. 

![Home Screen](/Images/Home_Screen.png)

When the user clicks on the MovieList link it will bring them to a separate page where it will list five movies along with their genre and a review links for each. 

![Move List Review](/Images/Movie_List_Reviews.png)

The user is able to view individual reviews for a particular movie by clicking on the Review link for that movie. By clicking on this link, a new page will load with the corresponding reviews. The review page has the score of the movie and the review along with the ability to delete, edit and add a new review. 

[Review Page](/Images/Review.png)


The user is able to add a review by filling out the score and review fields and clicking on the submit button on the review page. 

[Add Review](/Images/Add_Review.png)

To edit a review, the user clicks the pencile icon and updates the current score and review fields and clicks save. 

[Edit Review](/Images/Edit_Review.png)

[Updated Review](/Images/Updated_Review.png)

To delete a review entirely, the user clicks on the trashcan next to the review they want to delete. 

[Delete Review](/Images/Delete_Review.png)

[Delted Review](/Images/Deleted_Review.png)
