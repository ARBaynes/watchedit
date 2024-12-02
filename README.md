# Watched it!

__Table of contents__
* [Context](https://github.com/bbc-studios/watchedit/edit/main/README.md#context)
* [Get Started](https://github.com/bbc-studios/watchedit/edit/main/README.md#get-started)
* [Developer Notes](#developer-notes)

## Context
This is the front-end for a simple web application which was built in *Typescript* using the *Angular* framework.
This app will help users to review programmes they have watched on the BBC platform.

## Get Started
1. After creating fork and cloning the repository, open the folder and navigate to the “app” folder in your terminal.
2. Install the modules needed to run the app by using the command line `npm i`.
3. Run `ng serve --open` and you should automatically be taken to http://localhost:4200 

---
## Developer Notes

Here I will note any future features and ideas I would implement with more time:
* With more time, I would set up a Docker container that could host the app, api, and db. This would make for much better development and running of the application in the future.
* Ultimately I didn't end up including traditional auth (such as implementing sanctum) due to time constraints - though I certainly tried! Instead I included pretty basic middleware to verify that the only allowable host is localhost. I would, were this an application for the wider public, of course make sure that the application is using something like sanctum (and user controls) in order to approve requests to the API.
* 