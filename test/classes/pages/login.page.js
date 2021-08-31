import Base from '../base.class';

class Login extends Base {

    constructor() {
        super();
        this.exp = {
            emailPlaceholder: 'email@example.com',
            passwordPlaceholder: '••••••••',
            loginBtnTxt: 'Login',
            errTxt: 'Login Error'
        }
    }

    get forgotPasswordLnk() { return $('.body-2.mt5') }
    get loginBtn() { return $('button[type="submit"]') }
    get logo() { return $('body > app-root:nth-child(1) > app-auth:nth-child(2) > section:nth-child(1) > div:nth-child(2) > app-login-container:nth-child(2) > app-login:nth-child(1) > section:nth-child(1) > div:nth-child(1)') }
    get loginForm() { return $('div[class="auth-pages"] app-login-container app-login section app-login-form') }
    get emailField() { return $('input[placeholder="email@example.com"]') }
    get passwordField() { return $('input[placeholder="••••••••"]') }
    get errorTxt() { return $('div[aria-label="Login Error"]') }


    forgotPassClick() {
        this.forgotPasswordLnk.click();
    }

    loginBtnClick() {
        this.loginBtn.click();
    }

    checkLogo() {
        expect(this.logo).toBeDisplayed()
    }

    checkLoginForm() {
        expect(this.loginForm).toBeDisplayed()
    }

    checkEmailField() {
        expect(this.emailField).toBeDisplayed()
    }

    checkPasswordField() {
        expect(this.passwordField).toBeDisplayed()
    }

    loginBtnDisplay() {
        expect(this.loginBtn).toBeDisplayed()
    }

    forgotPassLinkDisplay() {
        expect(this.forgotPasswordLnk).toBeDisplayed()
    }

    emailPlaceholderTxt() {
        expect(this.emailField).toHaveAttribute('placeholder', this.exp.emailPlaceholder)
    }

    passwordPlaceholderTxt() {
        expect(this.passwordField).toHaveAttribute('placeholder', this.exp.passwordPlaceholder)
    }

    loginButtonTxt() {
        expect(this.loginBtn).toHaveText(this.exp.loginBtnTxt)
    }

    enterEmail(value) {
        this.emailField.setValue(value)
    }

    enterPassword(value) {
        this.passwordField.setValue(value)
    }

    checkErrorText() {
        expect(this.errorTxt).toHaveText(this.exp.errTxt)
    }
}


export default new Login;