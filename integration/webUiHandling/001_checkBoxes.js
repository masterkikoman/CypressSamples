/// <reference types = "Cypress" />
describe('Checkbox scenarios', function (){
    it('checking if selected checkbox have correct value', function(){
        cy.visit('http://total-qa.com/checkbox-example/')
        cy.get('.entry-title').should('have.text', 'Checkbox Example')
        cy.get('[type="checkbox"]').eq(0).check().should('be.checked')
        cy.get('[type="checkbox"]').eq(0).uncheck().should('not.be.checked')
        cy.get('[type="checkbox"]').check().should('be.checked')
        // cy.get('[type="checkbox"]').eq(0).then(function (checkboxLabels){
        //     cy.log(checkboxLabels.text())
        // })
    }) 
})