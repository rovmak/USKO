import forgot from '../classes/pages/forgot.page'

describe('Page-level-tests', () => {


    before(() => {
        forgot.openForgotPage();
    })

    it('Page-title', () => {
        expect(browser).toHaveTitle('UskoWeb')
    })

    it('Page-URL', () => {
        forgot.openForgotPage();
    })

})

describe('Elements-displayed', () => {


    it('Logo', () => {
        forgot.checkLogo();
    })

    it('Forgot-password-form', () => {
        forgot.checkForgotPasswordForm();
    })

    it('Email-field', () => {
        forgot.checkEmailField();
    })

    it('Send-link-button', () => {
        forgot.checkSendLinkBtn();
    })
})

describe('Element-values', () => {


    it('Email-placeholder', () => {
        forgot.emailPlaceholderTxt();
    })
})