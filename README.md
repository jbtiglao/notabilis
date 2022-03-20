
  
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
  
Landing page (index.html)

![Image1_landing_page](https://user-images.githubusercontent.com/94569484/159151503-41a5367f-0089-43e0-a3bc-7b2831345e67.png)

![Image2_note_page](https://user-images.githubusercontent.com/94569484/159151564-b146b6ac-0b0f-4bc3-9f5d-388cd9e7f754.png)

Note page (notes.html)


  ### Deployed Site

  To see how the application and its functionalities work, check out the deployed site on Heroku [https://boiling-mountain-57904.herokuapp.com](https://boiling-mountain-57904.herokuapp.com).
  
  ![Image3_heroku_deployed_site](https://user-images.githubusercontent.com/94569484/159151605-ca8799e3-fa92-4230-8eb2-d71b00cfd831.png)


  ### Features
  The application has the following features and functionalities:
  1. When the Note Taker is opened, the user is presented with a landing page with a link to the notes page.

![Image1_landing_page](https://user-images.githubusercontent.com/94569484/159151613-388be503-1763-4865-8423-cf5b4acea5f4.png)


  2. When the Get Started button is clicked, the notes page is opened.

  3. The notes page have existing notes listed in the left-hand column. There are empty fields to enter a new note title and the note’s text in the right-hand column.

![Image4_note_page_with_notes](https://user-images.githubusercontent.com/94569484/159151672-1bc8727c-7369-418c-9e30-9011072e4315.png)


  4. When the user enters a new note title and the note’s text, a Save icon appears in the navigation at the top of the page.
  

![Image5_save_icon](https://user-images.githubusercontent.com/94569484/159151843-94fe6988-df3c-42bb-b071-3f52c6dd372b.png)

  
  5. When the Save icon is clicked, the new note the user entered is saved and appears in the left-hand column with the other existing notes.
  

![Image6_saved_note](https://user-images.githubusercontent.com/94569484/159151894-f1089ccc-6602-4dd4-9616-7e48a2c65c8a.png)

  
  6. When the user clicks on an existing note in the list in the left-hand column, the note will appear in the right-hand column.

![Image7_saved_note_when_clicked](https://user-images.githubusercontent.com/94569484/159151925-aecceb62-0eef-42c6-bcd7-3c3735842ab9.png)

  7. When the user clicks on the Write or New Note (+) icon in the navigation at the top of the page, the user is presented with empty fields to enter a new note title and the note’s text in the right-hand column.
  
  ![Image8_new_note](https://user-images.githubusercontent.com/94569484/159151951-7ecd8e2e-5a87-44ba-90c5-1f12db351329.png)

  8. When the user clicks on the trash can icon, the note that corresponds to it is deleted. 
  
![Image9_trash_icon](https://user-images.githubusercontent.com/94569484/159151968-b9777c70-0af3-4e6d-ae47-3c63e5adc40b.png)

![Image10_delete_note](https://user-images.githubusercontent.com/94569484/159151982-7261e588-d124-43ca-a49c-a0b3d12fe10c.png)



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
To install modules defined in the dependencies section of the `package.json` file, run:
```
npm install 
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
  ## Usage
  Please see the deployed application on [Heroku here](https://boiling-mountain-57904.herokuapp.com), as well as the discussion on the application's description and functionalities above.

  ---
  ## License
  License used for this project - [MIT](https://opensource.org/licenses/MIT)
  
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
  1. The application and its functionalities are tested locally by entering ```localhost:3001``` in the browser. 
  
  ![Image12_test_localhost](https://user-images.githubusercontent.com/94569484/159152411-d550d035-ff89-4f52-b07e-5b1d8e685e24.png)

  (Note: For this assignment, the author used Chrome. To inspect the application, open Chrome DevTools, right-click on the landing page, then select Inspect. To access the Network panel, on the developer console window, select Network from the top menu. The Network inspection tool will show you data on the web application's performance as you click the application's Get Started button and test its functionalities by creating or saving a new note, or deleting a saved note.)
  
 ![Image16_test](https://user-images.githubusercontent.com/94569484/159153112-c75e6e51-8ff3-437e-b9f4-72c493d1b9c3.png)

  2. The application and its functionalities were also tested manually upon deployment on Heroku, by accessing the deployed website's URL in a browser.
  
  ![Image3_heroku_deployed_site](https://user-images.githubusercontent.com/94569484/159153218-8a5fe3cd-232c-4484-b4c1-f89671b439d8.png)

  
  3. For the application to listen on the given port, on the terminal run:
  ```
  node server.js
  ```

  ---
  ## Credits
  The following people/resources were consulted and/or utilized in the development of this application:
  (Working list)

  * Unit 11 Express.js and Heroku install and deployment materials, UCI Bootcamp.
  * [Express.js](https://expressjs.com/en/starter/installing.html)
  * [npm](https://npmjs.com)
  * [path](https://www.npmjs.com/package/path)
  * [fs](https://www.npmjs.com/package/fs)
  * [nodemon](https://www.npmjs.com/package/nodemon)
  * [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
  * [fontawesome](https://fontawesome.com)
  * [cdnjs](https://cdnjs.com)
  * [Heroku](https://heroku.com)

  My instructor Jackie Tseng, for patiently answering all my questions and walking me through testing my app (and backend code) locally.
  
  And to the UCI Bootcamp grader who reviewed my readme generator and encouraged me to come up with a unique name for my assignments/repository to stand out -- and do something uncommon and get out of my comfort zone in the process-- it was a very valuable advice and one of the important things I learned in this journey. Thank you.

  ---
  ## Author
  Jane Tiglao

  ---
  ## Questions
  For questions or issues, please contact: 
  - Jane Tiglao 
  - Email: janeytiglao@gmail.com
  - GitHub Username: jbtiglao
  - GitHub Profile: https://github.com/jbtiglao

