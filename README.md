# Takamul_Automation_Project

## Installation

### To install Playwright:  
npx playwright install

### To install request:  
npm install request -g

## Running Tests

### To run the test:  
npx playwright test contacts.spec.js

## Generating Report
### TO install Allure Commandline:  
npm i -D allure-commandline

### To install Experimental Allure Playwright:  
npm i -D experimental-allure-playwright

### After running tests, generate the report:  
npx allure generate ./allure-results --clean

### Open the generated report:  
npx allure open ./allure-report

### If running on a local machine, in terminal type:  
$local_run='true'
npm run test


