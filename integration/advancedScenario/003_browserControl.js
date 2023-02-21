/// <reference types = "Cypress" />

describe('Browser Control', function()
{
    it('Selecting Back button on browser', function(){
        cy.visit('https://www.eastwestbanker.com/')
        cy.get('[aria-label="Menu"]').click()
        cy.get('[rel="noopener noreferrer"]').invoke('removeAttr', 'target')
        cy.get('[class="MuiList-root jss9"] > a > div > div > span').each(($value, index, $list) => {
            if($value.text().includes('Personal')){
                cy.wrap($value).click()
            }
        })
        cy.get('.ewb-purple-textcolor').should('have.text', 'Log in now')
        cy.go('back')
        cy.url().should('include', 'https://www.eastwestbanker.com/')
    })
    

})