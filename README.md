# USKO

Prerequisites: 
Node.js
VS Code
Python
Java
Latest Version of Chrome

Initialized Node.js
Installed WDIO CLI
Launched initial configuration guide:
Where is your automation backend located?
						local machine
Which framework do you want to use?
						mocha
Do you want to use a compiler?
						Babel
Where are your test specs located?
						'./test/specs/*.js'
Do you want WebdriverIO to autogenerate some test files?
						NO
Which reporter do you want to use?
						spec and allure
Do you want to add a service to your test setup?
						chromedriver
What is the base url?
						'https://web-stg.usko.hebronsoft.com/auth/login'

Installed Sync WDIO module

Used WebDriverIO API reference to add more methods.

Use Jest's Expect library to add more expect validarions.

Use CSS Selectors guide to find elements on a page.

In wdio.conf.js made the following changes:

logLevel: 'silent',

    waitforTimeout: 40000,

    reporters: ['spec', ['allure', { outputDir: 'temp/allure-results' }]],

    before: function (capabilities, specs) {
        browser.maximizeWindow();
    },    

    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            let fullName = `${test.parent}.${test.title}`;
            browser.saveScreenshot(`./temp/screenshots/${fullName}.png`);
        }
    },
    
    Installed Allure for reports and screenshots.
    
    Using Page Object Model.




To run the tests i added scripts:
"test": "npx wdio run ./wdio.conf.js",
    "clean": "rm -rf temp",
    "temp-win": "mkdir temp\\screenshots",
    "temp-mac": "mkdir temp temp/screenshots",
    "report-generate": "allure generate ./temp/allure-results -o ./temp/allure-report",
    "report-open": "allure open ./temp/allure-report"
    
    
    
    I would use combination of negative and positive test cases. i would run functional and  UI tests. 
    
    I also used decision table technique for logical relationship between the inputs. Gave out a combination of inputs to identify the test cases from the available decision table
    
    
    
    Bug Report


Bug ID/Title: 
        Error is missing on the Login page when user enters invalid password
 
Steps to reproduce: 
                    Open the app
                    Enter Valid username/email
                    Enter invalid password
                    Click Submit button
                    Inspect the error placeholder
Actual:
		      There is no error
Expected:
		      The error message should appear  “Login Error”


Priority: 2 (How fast bug needs to be fixed)
Severity: Major(bug causes wrong behavior, but system is still functional)

          Include Screenshots.




Login page test cases

For login page I would start with UI scenarios then perform functional test scenarios then security test.

1. Login page consists of:
	a. Company logo
	b. Login Form
		¡. Email text field
		i. Password text field
		iii. Login button
		iv. Forgot Password link
		v. Error-message holder
2.Login page consists of Email text field:
	a. Contains a placeholder when the field is empty
	b. Placeholder disappears if add any symbols
	c. Placeholder text is "email@example.com"
	d. Accepts 1-100 any symbols
3. Login page consists of password text field:
	a. Contains a placeholder when the field is empty
	b. Placeholder disappears if add any symbol
	c. Placeholder text is “••••••••”
	d. Entered symbols are replaced by bullets.
	g. Accepts 1-100 any symbols
4. Login page consists of login button:
	a. Triggers Login form validation on clicking.
5. Login page consists of forgot password link:
	a. Gray color
	d. Redirects to Forgot Password page on clicking
6. Error-message for incorrect log in
	a. empty by default
	b. Displays an error-message when the form validation fails
  
  Forgot Password Page test cases

1. Consists of:
	a. Portal logo
	b. Remind Password Form
		i. Email text field
		ii. Remind Password button
		iii. Error-message holder
2. Email text field:
	a. Contains a placeholder when the field is empty
	b. Placeholder disappears if add any symbols
	c. Placeholder text is 'email@example.com'
3. Remind Password button:
	a. Triggers Remind Password Form validation on clicking.
4. Error-message holder
	a. empty by default
	b. Displays an error-message when the form validation fails or success message if email reminder was sent.
6. Remind Password Form validation:
	a. If the field is empty, the appropriate error-message appears.
	b. if user enters incorrect email (not registered in the system), the appropriate error message appeals.
	c. If user enters correct email, the success message (green) appears.
