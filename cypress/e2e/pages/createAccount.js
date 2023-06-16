class createAccountPage{

    //OBJECTS/ELEMENTS

    elements = {       
        firstNameInput: () => cy.get(`#firstName`),
        lastNameInput: () => cy.get(`#lastName`),
        emailInput: () => cy.get(`#email`),
        confirmEmailInput: () => cy.get(`#confirmEmail`),
        nextBtn: () => cy.get(`#nextBtn`),
        errorMessage: (message) => cy.get(`p[class*="error-message"]:contains('${message}')`),
        signinBtn: () => cy.get(`a:contains('Sign In')`),
    }

    //ACTIONS

    clickCreate(){
        this.elements.createBtn().click();
    }

    typeFirstName(firstName){
        this.elements.firstNameInput().clear().type(firstName);
    }

    typeLastName(lastName){
        this.elements.lastNameInput().clear().type(lastName);
    }

    typeEmail(email){
        this.elements.emailInput().type(email);
    }

    typeConfirmEmail(email){
        this.elements.confirmEmailInput().type(email);
    }

    clickNext(){
        this.elements.nextBtn().click();
    }

    clickSignin(){
        this.elements.signinBtn().click();
    }
    
}

module.exports = new createAccountPage();