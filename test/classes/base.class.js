class Base {

    constructor() {
        this.baseExp = {
            title: 'UskoWeb',
            url: 'https://web-stg.usko.hebronsoft.com/auth/login'
        }
        
    }

    openLoginPage() {
        browser.url('/');
    }

    openForgotPage() {
        browser.url('/auth/forgot-password');
    }

    checkTabTitle() {
        expect(browser).toHaveTitle(this.baseExp.title)
    }

    checBaseUrl() {
        expect(browser).toHaveUrl(this.baseExp.url)
    }

}

export default Base;