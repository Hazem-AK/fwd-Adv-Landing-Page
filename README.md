# Landing Page Project

## Table of Contents
* [Instructions](#instructions)
* [index.html](#index.html)
* [app.js](#app.js)
* [styles.css](#styles.css)
* [Running](#Running)

## Instructions
The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open js/app.js and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## index.html
This file is the skeleton of the landing page. It's written in HTML and contains the content to be displayed. Filler text is used as a placeholder. This was built upon to create an interactive site.

## app.js
We start by globally selecting important elements of the page and move on to implementing the logic for the header to disappear while not scrolling, after that we add eventListeners to make the Header visible on mouseOver (Line 6-33). From line 35 on we dynamically built the navigation by creating a new fragment and looping over all sections, adding list-elements and all necessary things to the created anchor-tag. In line 45 a "scrollToSection" function is added to each anchor-tag. In line 64 the callback-function for the IntersectionObserver starts, followed by the Observer itself, its options and the assignment of all sections to observe (line 96-99).
Finally we add some logic to implement a "back-to-top" button that only appears after we left the top of the screen.

## styles.css
This is where all the visual code is kept. It is responible for all the visual aspects of the page.

## Running
To launch this website, simply clone the repo and open the index.html file in the browser.