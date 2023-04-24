# Boilerplate instructions
This boilerplate is designed to establish certain standards to ensure consistency when multiple people work on a project using this boilerplate. The boilerplate does not contain files such as components, etc., because it is possible for each team to set it up according to their preferences or what is most convenient for them. The boilerplate only includes some specific packages and certain rules to ensure code consistency.

## Technology Stack
- **Next.js** framework, as it provides benefits such as server-side rendering, automatic code splitting, and optimized performance.
- **TypeScript** is also used for type checking and provides benefits such as better code readability, fewer bugs, and easier maintenance.
- **styled-components** for styling, which offers benefits such as better code organization, easy theming, and dynamic styling.

## Node.js Version
In the **.nvmrc** file, a specific Node.js version is defined that must be used in this boilerplate. This is beneficial because it ensures consistency among all project contributors, and everyone is working with the same version of Node.js.

## VS Code Settings
A folder named **.vscode** is created in this boilerplate, containing the settings.json file with some specific settings for Visual Studio Code only for this project.

## Husky Configuration
This boilerplate includes Husky, and several basic Husky hooks are set up:
- The **commit-msg** hook is set up in a way that if the commit message does not follow the conventional commit standards, the commit message will fail, and we will get an error. For more information, see the `commitlint.config.js` file located in the boilerplate's root.
- The **pre-commit** hook is set up to run the npm run lint script before committing, which checks for errors related to prettier rules and TypeScript.
- The **pre-push** hook is set up to run the npm run build script before pushing, and if anything goes wrong, it will prevent the push and give an error.

## ESLint and Prettier Configuration
This boilerplate also uses ESLint with Prettier.
- **ESLint** is used for linting and detecting coding errors and provides benefits such as code consistency and identifying potential bugs.
- **Prettier** is used for code formatting and offers benefits such as consistent code formatting, automatic code formatting, and improved code readability.

You can find more details about the configuration in the **.eslintrc.json** and **.prettierrc** files located in the boilerplate's root.

## Commitizen package
Instead of using the regular `git commit -m "commit message"` command when committing changes, you can use the `git cz` command, which will open the commit message prompt provided by the Commitizen package installed in this boilerplate. This will make it easier to write commit messages that are in compliance with the conventional commit standard. For more information, please refer to the Commitizen package's documentation at https://commitizen-tools.github.io/commitizen/.

## Installation steps
1. Clone repository
2. Install node modules by typing `npm install` in the terminal
3. Run app using `npm run dev` command
