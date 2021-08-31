import login from '../classes/pages/login.page'
import forgot from '../classes/pages/forgot.page'

describe('Elements-displayed', () => {


    before(() => {
        login.openLoginPage();
    })

    it('Logo', () => {
        login.checkLogo();
    })

    it('Login-form', () => {
        login.checkLoginForm();
    })

    it('Email-field', () => {
        login.checkEmailField();
    })

    it('Password-field', () => {
        login.checkPasswordField();
    })

    it('Login-button', () => {
        login.loginBtnDisplay();
    })

    it('Forgot-password link', () => {
        login.forgotPassLinkDisplay();
    })
})


describe('Element-values', () => {


    it('Email-placeholder', () => {
        login.emailPlaceholderTxt();
    })

    it('Password-placeholder', () => {
        login.passwordPlaceholderTxt();
    })

    it('Login-button-text', () => {
        login.loginButtonTxt();
    })
})



describe('Functionality', () => {


    it('Error-for-wrong-login', () => {
        login.openLoginPage();
        login.enterEmail('bruh@gmail.com');
        login.enterPassword('Bruh12345');
        login.loginBtnClick();
        login.checkErrorText();
    })

    it('Forgot-password-redirect', () => {
        login.forgotPassClick();
        forgot.checkUrl();
    })




})