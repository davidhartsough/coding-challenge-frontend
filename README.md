# Coding Challenge Frontend

Your challenge is to finish creating this React web app that serves as the frontend for this coding challenge and talks to [the backend API](https://github.com/davidhartsough/coding-challenge-backend) via axios.

In the end, you'll have a fully working web app that saves a "bookmark" of a website by fetching, displaying, and storing its metadata, such as the title, site name, description, keywords, and author.

The data will be saved in the browser's local storage, so that a person's bookmark list persists between reloads and sessions.

### Important Notes

1. You'll probably want to finish [the backend](https://github.com/davidhartsough/coding-challenge-backend) first and run the server to actually test this end-to-end.
2. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and thus heavily relies on React experience. If you do not have experience with React, I still encourage you to try using this code as-is and give it your best shot. However, if you feel much more competent and comfortable with an alternative JS/TS framework, _feel free to use that instead_ 👌
   - The goal of these challenges is to evaluate your full-stack JavaScript skills, so don't worry about particularities with libraries or frameworks.
3. Similarly, if you don't want to use [Axios](https://axios-http.com/), then use any alternative HTTP client you prefer. I just tend to think it's the easiest and most common HTTP client to use.

## Steps

1. [Installation](#installation)
2. [Implementation](#implementation)
3. [Submission](#submission)

### Installation

Do NOT fork this repo.

1. Clone this repo (and `cd` into it)
2. Install the dependencies using yarn or npm. (I used yarn [hence the `yarn.lock` file].)

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

## Linting/Formatting

- [ESLint](https://eslint.org/) - linting
- [Prettier](https://prettier.io/) - formatting

As you complete the challenge, you are encouraged to lint and format your code.

In the root project directory, you can run the following scripts:

```bash
yarn lint
```

Or, to let eslint try to fix your code according to the linter and formatter standards, run:

```bash
yarn lint:fix
```

## Learn More

Here are some useful links and resources:

- [React](https://reactjs.org/)
- [Create React App (CRA)](https://facebook.github.io/create-react-app/docs/getting-started)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://classic.yarnpkg.com/lang/en/)
- [Axios](https://axios-http.com/)
