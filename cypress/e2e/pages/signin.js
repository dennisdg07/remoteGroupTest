class signInPage{

    //OBJECTS/ELEMENTS

    elements = {
        createBtn: () => cy.get(`#createLink`),
        emailInput: () => cy.get(`#txtEmail`),
        continueBtn: () => cy.get(`#btnContinue`),
        passwordInput: () => cy.get(`#txtPassword`),
        signInBtn: () => cy.get(`#btnSignIn`),
        noRobotChkbx: () => cy.iframe(`iframe[title='reCAPTCHA']`).find(`.recaptcha-checkbox-border`),
        errorMessage: (message) => cy.get(`div[role="alert"]:contains('${message}')`),
    }

    //ACTIONS

    clickCreate(){
        this.elements.createBtn().click();
    }

    typeEmail(email){
        this.elements.emailInput().clear().type(email);
    }

    clickContinue(){
        this.elements.continueBtn().click();
    }

    typePassword(email){
        this.elements.passwordInput().clear().type(email);
    }

    clickNotRobotCaptcha(){
        this.elements.noRobotChkbx().click();        
    }

    clickSignIn(){
        this.elements.signInBtn().click();
    }

}

module.exports = new signInPage();