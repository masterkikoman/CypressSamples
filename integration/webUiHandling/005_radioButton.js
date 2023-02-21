/// <reference types = "Cypress" />
describe('Radio Button', function (){
    it('Selecting Radio Button', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        //cy.get('[value="female"]').check().should('be.checked')
        cy.get('[type="radio').each(($btn, index, $buttons) =>{
            cy.get('[type="radio').eq(index).invoke('attr', 'value').then(function(val){
                if(val=="female") {
                    cy.wrap($btn).click()
                }
            })
        })
        cy.get('[type="radio').should('be.checked')
    }) 
})