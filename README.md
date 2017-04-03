# <a href='http://www.jrdevjobs.com' target='_blank'>Jr.DevJobs</a> Challenge: English Numbers

## Introduction
In this challenge you will create a tool that will take a number and return the English translation.

You are free to do this in any language or framework, however the sample is written in JavaScript.

For bonus points, turn this into a webpage that allows users to submit input and have the translation returned to the screen.

## Getting Started
To begin, Fork this repository to your GitHub account by clicking the Fork icon in the upper-right section of this page.

![Forking Image](https://s3-us-west-2.amazonaws.com/jrdevsimages/repos/fork_button.jpg)

*If you're new to Forking, we suggest reading the <a href='https://help.github.com/articles/fork-a-repo' target='_blank'>GitHub documentation</a> before moving forward.*

## <a name='userstory'></a>User Story
As a user, I want to translate numbers into their English word form.

#### Details

* Start with numbers less than one thousand then work your way up to one trillion
* Don't worry about connecting words with 'and'
* Make sure to strip out any commas

## Examples

* **13**: Thirteen
* **141**: One hundred forty one
* **6,500,016**: Six million five hundred thousand sixteen


## Tests (for JavaScript)
We've included specs to test your code using Mochai and Chai.

* The spec-runner expects your JavaScript code to be in js/scripts.js - if you change this make sure to update spec/spec-runner.html line 9 with the path to your code
* To run the tests, open `spec/spec-runner.html` in your browser
