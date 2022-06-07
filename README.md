# Coding Challenge Frontend

Your challenge is to finish creating this React web app that serves as the frontend for this coding challenge and talks to the backend API via axios.

In the end, you'll have a fully working web app that saves a "bookmark" of a website by fetching, displaying, and storing its metadata, such as the title, site name, description, keywords, and author.

The data will be saved in the browser's local storage, so that a person's bookmark list persists between reloads and sessions.

**NOTE**: You'll want to finish the backend first and run the server to actually test this end-to-end.

(Also worth noting: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).)

## Steps

1. [Installation](#installation)
2. [Implementation](#implementation)
3. [Submission](#submission)

### Installation

Do NOT fork this repo.

1. Clone this repo (and `cd` into it)
2. [Install `yarn`](https://classic.yarnpkg.com/en/docs/install)
3. Run `yarn`

### Implementation

(in any order you prefer)

- In `src/db.ts`, finish `createBookmark()` and `getAllBookmarks()`.
- In `src/App.tsx`, finish the `App` component and `bookmarkURL()`.
- In `src/Form.tsx`, finish the `Form` component's `onChange()` and `onSubmit()`.
- In `src/List.tsx`, finish the `List` component.

### Submission

Once again, do NOT fork this repo.

When you're done and ready to submit your code in the application, follow these steps to push your code to your own GitHub repo:

1. Create a new repository on GitHub.
2. Remove the remote origin with: `git remote rm origin`
3. Add the remote origin of your new repo with: `git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git`
4. Push your code to your new repo with: `git push -u origin master` (or `main` or whatever your preferred branch name is)
5. Copy the URL to your repo and add it to the application (https://github.com/YOUR-USERNAME/YOUR-REPO-NAME). (If you wish to keep your new repo private, you must add me, `davidhartsough`, as a collaborator: https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/settings/access)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Linting/Formatting

- [ESLint](https://eslint.org/) - linting
- [Prettier](https://prettier.io/) - formatting

## Learn More

You can learn more about Create React App (CRA) from [its documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn more about React, check out the [React documentation](https://reactjs.org/).
