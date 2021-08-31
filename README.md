# USKO
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
