/// <reference types="cypress" />

import signinPage from "../pages/signin"
import createAccountPage from "../pages/createAccount"

//Example use only of Fixture
//const exampleFixture = require('../../fixtures/example.json');

describe("Signup", { tags: '@smoke' }, () => {
  beforeEach(function () {
    if (this.currentTest._testConfig.unverifiedTestConfig.skipBeforeEach) {
      cy.log('skipping beforeEach hook')
      return
    }
    cy.visit("https://stage-myvvid.com/")
  })

  it("TC01 - Assignment Test", () => {
    signinPage.clickCreate();
    createAccountPage.typeFirstName("Test");
    createAccountPage.typeLastName("Mode");
    createAccountPage.typeEmail("valid@yahoo.com");
    createAccountPage.typeConfirmEmail("invalid@yahoo.com");
    createAccountPage.elements.errorMessage("Please make sure your email addresses are the same").should("be.visible");
    createAccountPage.clickSignin();
    signinPage.typeEmail("valid1@yahoo.com");
    signinPage.clickContinue();
    signinPage.typePassword("test12345");
    signinPage.clickNotRobotCaptcha();
    signinPage.clickSignIn();
    signinPage.elements.errorMessage("Incorrect email or password.").should("be.visible");
    
  })
  
})
