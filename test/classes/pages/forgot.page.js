import Base from '../base.class';

class Forgot extends Base {

    constructor() {
        super();
        this.exp = {
            url: 'https://web-stg.usko.hebronsoft.com/auth/forgot-password',
            emailPlaceholder: 'email@example.com'

        }
    }

    //element selector getters
    get logo() { return $('body > app-root:nth-child(1) > app-auth:nth-child(2) > section:nth-child(1) > div:nth-child(2) > app-forgot-password-container:nth-child(2) > app-forgot-password:nth-child(1) > section:nth-child(1) > div:nth-child(1)') }
    get forgotPassForm() { return $('form[class="ng-untouched ng-pristine ng-invalid"]') }
    get emailField() { return $('input[placeholder="email@example.com"]') }
    get sendLinkBtn() { return $('button[type="submit"]') }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

    checkLogo() {
        expect(this.logo).toBeDisplayed();
    }

    checkForgotPasswordForm() {
        expect(this.forgotPassForm).toBeDisplayed();
    }
    
    checkEmailField() {
        expect(this.emailField).toBeDisplayed();
    }

    checkSendLinkBtn() {
        expect(this.sendLinkBtn).toBeDisplayed();
    }

    emailPlaceholderTxt() {
        expect(this.emailField).toHaveAttribute('placeholder', this.exp.emailPlaceholder)
    }



    

    
}

export default new Forgot;