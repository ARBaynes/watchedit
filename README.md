# Watched it!

__Table of contents__
* [Context](https://github.com/bbc-studios/watchedit/edit/main/README.md#context)
* [Get Started](https://github.com/bbc-studios/watchedit/edit/main/README.md#get-started)
* [Developer Notes](#developer-notes)

## Context
This is the front-end for a simple web application which was built in *Typescript* using the *Angular* framework.
This app will help users to review programmes they have watched on the BBC platform.

## Get Started
1. After creating fork and cloning the repository, open the folder and navigate to the “api” folder in your terminal.
2. Make sure you have a .env file populated with your DB connection details (you can run `cp .env.example .env`)
3. Run `npm install && npm run build` and `php artisan migrate`
4. Run `php artisan serve`
5. Open a new terminal tab and navigate back to the 'app' folder 
6. Install the modules needed to run the app by using the command line `npm i`. 
7. Run `ng serve --open` and you should automatically be taken to http://localhost:4200 

## Test data
To start with some testing data, feel free to run `php artisan db:seed ProgrammeSeeder` to seed 10 random values into the db. 

---
## Developer Notes

Here I will note any future features and ideas I would implement with more time:
* With more time, I would set up a Docker configuration with containers for hosting the app, api, and db. This would make for much better development and running of the application in the future.
* Ultimately I didn't end up including auth to the level I wanted (such as implementing sanctum) due to time constraints. Instead, I included pretty basic middleware to verify that the only allowable host is localhost. I would, were this a non-local application, of course make sure that the application is using something like sanctum (and user controls) in order to approve requests to the API.
* I noticed that some of the wording on the task was ambiguous between the app specification and the test case. I ended up leaning towards the app spec when writing the grid view (no editable fields, no action buttons, only name/art/rating), despite the test spec saying to check these values. If work was to continue on this, I would like to make sure I clarify the final outcome with stakeholders/designers.
* I also changed the e2e framework from protractor to cypress, as I was encountering issues related to protractor being deprecated. To run the cypress tests, I have been running `ng e2e` as per usual, though do let me know if you encounter any issues.

Overall, I enjoyed the challenge that this test posed, and would like to commend the BBC on the thoroughness of the technical test document.