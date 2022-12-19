# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run format`

If you want to have a quick fix for your files. Then you can run `npm run format` to format the things using the eslint rules as well as prettier rules.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Library

We are using antd react library for the project! Please use Typescript! Please use the airbnb-react coding standards

## Rules that you need to check for each file

1.React UI component’s names should be PascalCase

Example: `LoginScreen.js`

2.All other helper files should be camelCase

Example: `commonPopup.js`

3.CSS files should be named the same as the component PascalCase

Example: `LoginScreen.css`

4.CSS naming converion should be kebab-case

5.Use BEM naming conversion(more good).

6.Use the DRY principle (Don't repeat yourself).

7.Create multiple files instead of writing a big file.

8.Place all your CSS files in one common folder.

9.Avoid Inline CSS as and when possible.

10.Use a linter to make your code easier to review. Follow strict linting rules. This in turn helps you write clean, consistent code.

11.Review your code before creating a pull request.

12.Split your code into multiple smaller functions. Each with a single responsibility.

13.Create many utility files that can help you remove duplicate code from multiple files.

14.Separate all your service calls into a separate file. If it’s a big project try to split the services into multiple files. (name convention module_name.service.js).

15.Name your files logically according to the job that they perform.

16.Clean code is self-commenting(using the right variable names and function names). Use comments only to explain complex functions.

17.Always write test cases for your code. Keep tests files in sync with the files they are testing.

18.Destructuring your props is a good way to help make your coder cleaner and more maintainable.

Learn more here: [Destructuring Props](https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0)

19.Putting imports in an order
a. React import
b. Library imports (Alphabetical order)
c. Absolute imports from the project (Alphabetical order)
d. Relative imports (Alphabetical order)

    Each kind should be separated by an empty line. This makes your imports clean and easy to understand for all the components, 3rd-party libraries, and etc.

20.Use index.js for each folder to export.
