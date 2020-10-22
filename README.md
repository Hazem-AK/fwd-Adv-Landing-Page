# Landing Page Project


![Current Version](https://img.shields.io/badge/version-v0.1-blue)

## Table of Contents
- [Description](#Description)
- [Prerequisite](#Prerequisite)
- [index.html](#index.html)
- [app.js](#app.js)
- [styles.css](#styles.css)
- [Running](#Running)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)




## Description
This is a dynamic landing page project for the fwd-Udacity-Adv course

## Prerequisite
* A text editor or an IDE (like IntelliJ)
* A Browser (chrome, firefox, etc..)

## index.html
This file is the skeleton of the landing page. It's written in HTML and contains the content to be displayed. Filler text is used as a placeholder. This was built upon to create an interactive site.

## app.js
We start by globally selecting important elements of the page and move on to implementing the logic for the header to disappear while not scrolling, after that we add eventListeners to make the Header visible on mouseOver (Line 6-33). From line 35 on we dynamically built the navigation by creating a new fragment and looping over all sections, adding list-elements and all necessary things to the created anchor-tag. In line 45 a "scrollToSection" function is added to each anchor-tag. In line 64 the callback-function for the IntersectionObserver starts, followed by the Observer itself, its options and the assignment of all sections to observe (line 96-99).
Finally we add some logic to implement a "back-to-top" button that only appears after we left the top of the screen.

## styles.css
This is where all the visual code is kept. It is responible for all the visual aspects of the page.

## Running
To launch this website, simply clone the repo and open the index.html file in the browser.

## Authors

#### Hazem A.Khalil
* [GitHub]
* [LinkedIn]

You can also see the complete [list of contributors][contributors] who participated in this project.

## License

`Project Title` is open source software [licensed as MIT][license].

## Acknowledgments

This section can also be called as `Resources` or `References`

* udacity landing page code-starter files [GitHub Pages]: https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page
* ReadMe Template by madhur-taneja [GitHub Pages]: https://madhur-taneja.github.io/README-Template
* Udacity fwd community

[//]: # (HyperLinks)

[GitHub Repository]: https://github.com/Hazem-AK/fwd-Adv-Landing-Page
