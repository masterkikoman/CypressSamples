/// <reference types = "Cypress" />
describe('Static Dropdown', function (){
    it('Choosing static dropdown', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('audi').should('have.value', 'audi')
    }) 
})