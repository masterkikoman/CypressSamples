//cypress
// any test case in javascript is called a Spec file
/// <reference types = "Cypress" />
describe('My First Test Suite', function()
{
    it('my first test case', function(){
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type('carabao{enter}')
        cy.wait(2000);
        // Assertion to check if products displayed are correct
        cy.get('.a-section.aok-relative.s-image-square-aspect:visible').should('have.length',56)
    })

})