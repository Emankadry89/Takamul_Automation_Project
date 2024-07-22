# Takamul_Automation_Project
to install playwright: npx playwright install
install request: npm install request -g
run test: npx playwright test contacts.spec.js 
generate report: 
1- npm i -D allure-commandline
2- npm i -D experimental-allure-playwright
after run: 
3- npx allure generate ./allure-results --clean
4- npx allure open ./allure-report
********************************************
if running on local machine, in terminal type: $local_run='true'
npm run test