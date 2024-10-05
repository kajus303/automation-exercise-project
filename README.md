# Automated Testing of AutomationExercise.com with Cypress

## What Are We Testing and What Is This About?

This project contains automated end-to-end tests for [AutomationExercise.com](https://automationexercise.com) using Cypress.io. The tests cover various user scenarios to ensure that key functionalities of the website are working as expected. Scenarios include user registration, login, logout, product browsing, and contact form submissions.

## Requirements

- Node.js v20.15.0
- npm (comes with Node.js)
- Cypress (installed via npm)
- Git (for version control)
- An IDE or text editor (e.g., Visual Studio Code)

## How to Install

### Clone the Repository

```bash
git clone https://github.com/kajus303/automation-exercise-project.git
```

### Navigate to the Project Directory

```bash
cd automation-exercise-project
```

### Install Dependencies

```bash
npm install
```

## How to Run Tests

### Running Tests Locally

#### Open Cypress Test Runner

```bash
npx run test
```

This command will launch the Cypress Test Runner interface.  
You can select individual test cases to run interactively.

#### Run Tests in Headless Mode

```bash
npm run test:ci
```

Executes all tests in headless mode using the Electron browser.  
Results will be displayed in the terminal.

### Running Tests via GitHub Actions

Tests are automatically executed on the main branch using GitHub Actions.  
The workflow is triggered on every push or pull request to the main branch.  
You can view test results and logs in the Actions tab of the GitHub repository.

## Any Issues with Tests or Website?

- **Flaky Tests**: Some tests may occasionally fail due to network latency or temporary issues with the website. Re-running the tests usually resolves this.
- **Website Changes**: Updates or changes to [AutomationExercise.com](https://automationexercise.com) may cause certain tests to fail if the DOM structure or element selectors have changed.
- **Third-Party Dependencies**: Since the tests rely on an external website, any downtime or server issues on the site's end can affect test outcomes.
- **Test Data Consistency**: User registration tests create new accounts. If accounts are not properly cleaned up, they may cause conflicts in subsequent test runs.
