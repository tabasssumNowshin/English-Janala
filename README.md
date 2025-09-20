Live Link: https://english-janala-netlify.netlify.app/


⚡ API Endpoints
Get ⚡ All Levels
https://openapi.programming-hero.com/api/levels/all
Get ⚡ Words by Levels
https:// openapi.programming-hero.com/api/level/{id}
https://openapi.programming-hero.com/api/level/5
Get ⚡ Words Detail
https:// openapi.programming-hero.com/api/word/{id}
https://openapi.programming-hero.com/api/word/5
Get ⚡ All Words
https://openapi.programming-hero.com/api/words/all
Requirements
Navbar
 Create a navbar with a logo and brand name on the left
 Create three buttons with icons: FAQ, Learn, and Logout
 when clicking the FAQ button user will jump to the FAQ section
 when clicking the Learn button user will jump to the Vocabulary section
 Navbar will be fixed at the top with a bottom border
Banner
 Create a banner with a title and paragraph along with a login form on the left as Figma
 image on the right as Figma
 Align elements as per the Figma design
FAQ Section
 Create an FAQ section containing Following questions and answers as Figma
 the difference between var, let, and const
 the difference between map(), forEach(), and filter()
 explain arrow functions and how they are different from regular functions
 how JavaScript Promises work
 how closures work in JavaScript
Footer
 Create a footer that includes the logo and social icons as per Figma
 redirect users to his social profiles in a new Tab when clicking on social icons
Vocabulary Section
 Show a center-aligned heading as Figma
 Create dynamically generated buttons from API-01 for each lesson
 Lesson Buttons will be displayed on page load
 Show a default text that will be displayed in the Vocabulary section initially
 on Clicking a Specific Lesson Button Load All the words from API-02
 Display all words for a selected lesson in a card format, showing:
 Word
 Word meaning & pronunciation
 Two buttons with relevant icons as per Figma
 Show *No Word Found message if no words exist for a lesson
 Create functionality to highlight the active lesson button
Vocabulary Details
 Create functionality to open a modal when clicking the details icon
 Data will be load from API-03
 modal will displays:
 Word with pronunciation
 Example sentence
 Synonyms
 A "Complete Learning" button to close the modal
Challenge Requirements
Custom Navigation & Smooth scrolling
 hide everything on landing except the Banner and Footer
 Create a functional login form:
 Show an alert if the user does not enter a name
 Show an alert if the password is not "123456"
 when the user enters a valid name and password
 Show a alert with a success message,
 hide the Banner
 display the Navbar, Vocabulary Section, and FAQ Section
 when clicking "Logout"
 hide the Navbar, Vocabulary Section, and FAQ Section
 show only the Banner and Footer
 Apply smooth scrolling for FAQ & Learn buttons
Handling Invalid Data
 avoid displaying falsy values like undefined or null
 display relevant words if no data is found
Loading Spinner
 Create a loading spinner that will be display when vocabulary is loading from API
Optional: Be a Perfectionist
⚠️ Their is No Mark for Optional Requirement. You won't get any support for any of the optional Part. But we strongly recommend you to give a try after completing all the requirement.

Sweet Alert - https://sweetalert2.github.io/#download
 Explore Sweet ALert Documentation
integrate it with your app. replace all the basic alert with a normal alert
Follow this Documentation
Speak your Vocabularies
 Create functionality for voice pronunciation of vocabulary words
 Use below function and implement on clicking sound icon
 function pronounceWord(word) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-EN'; // English
      window.speechSynthesis.speak(utterance);
    }
