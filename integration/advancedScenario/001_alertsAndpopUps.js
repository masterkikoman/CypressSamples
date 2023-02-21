/// <reference types = "Cypress" />
describe('Pop-ups and Alerts', function()
{
    it('popUps check', function(){
        cy.visit('https://www.demoblaze.com/index.html#')
        cy.get('.hrefch').each(($el, index, $list) => {
            if($el.text().includes('HTC')){
                cy.wrap($el).click()
            }
        })
        cy.get('.btn.btn-success.btn-lg').click()
        // window:alert events
        // getting the text value on the alerts box
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added')
        })
    })

})