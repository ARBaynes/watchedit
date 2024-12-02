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
2. Run `npm install && npm run build`
3. Run `php artisan serve`
4. Open a new terminal tab and navigate back to the 'app' folder 
5. Install the modules needed to run the app by using the command line `npm i`. 
6. Run `ng serve --open` and you should automatically be taken to http://localhost:4200 


---
## Developer Notes

Here I will note any future features and ideas I would implement with more time:
* With more time, I would set up a Docker configuration with containers for hosting the app, api, and db. This would make for much better development and running of the application in the future.
* Ultimately I didn't end up including auth to the level I wanted (such as implementing sanctum) due to time constraints - though I certainly tried! Instead, I included pretty basic middleware to verify that the only allowable host is localhost. I would, were this a non-local application, of course make sure that the application is using something like sanctum (and user controls) in order to approve requests to the API.
* I noticed that some of the wording on the task was ambiguous between the app specification and the test case. I ended up leaning towards the app spec when writing the grid view (no editable fields, no action buttons, only name/art/rating), despite the test spec saying to check these values. If work was to continue on this, I would like to make sure I clarify the final outcome with stakeholders/designers.