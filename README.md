
  
  # Notabilis (Note Taker) 
  A Unit 11 Express.js assignment.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 Having taken to heart a very helpful comment made by the grader who reviewed one of my recent bootcamp assignments -- to come up with a unique name to make my assignment/repository stand out -- I have delved into my literary and legal background to come up with a unique yet apt name for this homework. However, most of the names I have thought of, e.g., Scribe, Scribbler, Word-Monger, Noted, KeyNote, Noteworthy, and Nota Bene, have been taken and used by similar note-taking applications.   

  Except for Notabilis. It means noteworthy in Latin. While "bilis" also means fast in Filipino, my native language. What better way to call an application that allows a user to make a list or take down notes quickly and conveniently? <i>Notabilis,</i> because it is noteworthy and <i>"Nota-bilis"</i> because it allows the user to "note (it) fast". Not to mention that the application also uses Express-- literally, fast-- js. 

  ---
  ## Description

  This is a note taker application that can be used to write, save, and delete notes. It uses an Express.js back end, and saves and retrieves note data from the JSON file.

  In this assignment, the author is tasked to modify starter code to create the application. The application's front end has already been created, while the author is tasked to build the back end, connect the two, and then deploy the entire application to Heroku.

  ### Appearance
  The application has the following interface:
  
 ![image1_landingpage](https://user-images.githubusercontent.com/94569484/159116133-21f2e8b0-a853-4f8b-9b30-76ebcd11ad35.png)

<img width="1269" alt="image2_notepage" src="https://user-images.githubusercontent.com/94569484/159116141-e4439f86-ee7c-4a2e-9173-d70cbab39344.png">


  ### Deployed Site

  To see how the application and its functionalities work, see the [deployed site on Heroku here.](https://boiling-mountain-57904.herokuapp.com)

  ### Features
  The application has the following features and functionalities:
  1. When the Note Taker is opened, the user is presented with a landing page with a link to a notes page.

![image1_landingpage](https://user-images.githubusercontent.com/94569484/159116226-7f6280a0-b71f-46cc-854a-da740abdd015.png)

  2. When the Get Started button is clicked, the notes page is opened.

<img width="1269" alt="image2_notepage" src="https://user-images.githubusercontent.com/94569484/159116256-e6ddfedc-5b3e-44a7-bc97-b56b1c1ef0e4.png">

  3. The notes page would have existing notes listed in the left-hand column. There are empty fields to enter a new note title and the note’s text in the right-hand column.

  4. When the user enters a new note title and the note’s text, a Save icon appears in the navigation at the top of the page.
  
  ![image3_saveicon](https://user-images.githubusercontent.com/94569484/159116292-b71a1dfb-d433-42d5-b84a-11f41d680fee.png)

  
  5. When the Save icon is clicked, the new note the user entered is saved and appears in the left-hand column with the other existing notes.
  
  6. When the user clicks on an existing note in the list in the left-hand column, the note will appear in the right-hand column.
  
  7. When the user clicks on the Write icon in the navigation at the top of the page, the user is presented with empty fields to enter a new note title and the note’s text in the right-hand column.
  
  8. When the user clicks on the trash can icon, the note that corresponds to it is deleted. 
  
  ![image4_deleteicon](https://user-images.githubusercontent.com/94569484/159116337-fb569358-b1d0-4107-9836-2a46752e4b2e.png)


  ### Back End Requirements

  1. The application includes a `db.json` file used to store and retrieve notes using the `fs` module.
  
  2. The following HTML routes are created:
  
  * `GET /notes` that returns the `notes.html` file.
  
  * `GET *` that returns the `index.html` file.
  
  3. The following API routes are created:
  
  * `GET /api/notes` that reads the `db.json` file and returns all saved notes as JSON.

  * `POST /api/notes` that receives a new note to save on the request body, add it to the `db.json` file, and then returns the new note to the client. 

  4. A DELETE route is added to the application using the following guideline:
  
  * The `DELETE /api/notes/:id` receives a query parameter that contains the id of a note to delete. To delete a note, the user needs to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

  ---
  ## Table of Contents
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [License](#license)
  6. [Contributing](#contributing)
  7. [Tests](#tests)
  8. [Credits](#credits)
  9. [Author](#author)
  10. [Questions](#questions)
  
  ---
  ## Installation
  Clone my GitHub repository.
```
  https://github.com/jbtiglao/notabilis

```
To install modules defined in the dependencies section of the `package.json` file, on the Visual Studio Code terminal, run:
```
npm install 
```

To install express, run:
```
npm i express
```

To install fs, run:
```
npm i fs
```

To install path, run:
```
npm i path
```
To automatically restart the node application when file changes in the directory are detected, ```nodemon``` was installed by running:
```
npm i nodemon
```
The application is invoked through the following command:

```bash
node server.js
```

The application will then listen on ```localhost:3001```.

---
  
  ---
  ## Usage
  Please see the deployed application on [Heroku link here](Heroku), as well as the application's description and functionality images.

  ---
  ## License
  License used for this project - 
  
  For more information on the above license and other license types, please see the following websites:  
  - [Open Source Initiative](https://opensource.org/licenses)
  - [Choose a License](https://choosealicense.com/)

  ---
  ## Contributing
  To contribute to this application: 
  * Submit a pull request.
  * Your new features will be merged after review and approval.

  ---
  ## Tests
  1. The application and its functionalities were tested manually by opening the application in a web browser and performing each of the functions.

  2. For the application to listen on the given port, on the terminal run:
  ```
  node server.js
  ```

  ---
  ## Credits
  The following people/resources were consulted and/or utilized in the development of this application:
  (Working list)

  * Unit 11 Express.js materials, UCI Bootcamp.
  * [Express.js](https://expressjs.com/en/starter/installing.html)
  * [npm](https://npmjs.com)
  * [path](https://www.npmjs.com/package/path)
  * [fs](https://www.npmjs.com/package/fs)
  * [nodemon](https://www.npmjs.com/package/nodemon)
  * [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
  * [fontawesome](https://fontawesome.com)
  * [cdnjs](https://cdnjs.com)
  * [Heroku](https://heroku.com)

  And to the UCI Bootcamp grader who reviewed my readme generator and encouraged me to come up with a unique name for my assignments/repository to stand out -- it was a very valuable advice and one of the important things I learned in this journey. Thank you.

  ---
  ## Author
  Jane Tiglao

  ---
  ## Questions
  For questions or issues, please contact: 
  - Jane Tiglao 
  - Email: (To follow)
  - GitHub Username: jbtiglao
  - GitHub Profile: https://github.com/jbtiglao

