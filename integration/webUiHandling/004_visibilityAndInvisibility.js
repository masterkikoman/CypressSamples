/// <reference types = "Cypress" />
describe('Element Visibility and Invisibility', function (){
    it('Visibility and Invisibility', function(){
        cy.visit('https://www.tutorialrepublic.com/css-tutorial/css-visibility.php')
        cy.get('.visibility-hidden.two').should('be.visible')
        cy.get('.visibility-hidden.two').click()
        cy.get('.visibility-hidden.two').should('not.be.visible')
    }) 
})