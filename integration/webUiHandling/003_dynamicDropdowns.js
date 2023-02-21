/// <reference types = "Cypress" />
describe('Dynamic Dropdown', function (){
    it('Choosing dynamic dropdown', function(){
        cy.visit('https://www.w3schools.com/howto/howto_js_autocomplete.asp')
        cy.get('#myInput').type('j')
        cy.get('#myInputautocomplete-list div').each(($el, index, $list) => {
            if($el.text().includes('apan')){
                cy.wrap($el).click()
            }
        })
        cy.get('#myInput').should('have.value', 'Japan')
    }) 
})