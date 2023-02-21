/// <reference types = "Cypress" />
describe('Selecting Products from Selection', function ()
{
    it('Selecting Iphone form product list', function(){
        cy.visit('https://www.demoblaze.com/index.html#')
        cy.get('.list-group').find('.list-group-item:visible').eq(1).click() // clicking specific index
        // Parent Child chaining/scoping
        cy.get('#tbodyid').as('prodNames') // aliasing of a selector
        cy.get('@prodNames').find('.col-lg-4.col-md-6.mb-4').should('have.length',7)
        cy.get('.col-lg-4.col-md-6.mb-4').contains('Iphone').click()
        
    })

    it('Selecting Laptops and choosing Macbook Pro', function(){
        cy.visit('https://www.demoblaze.com/index.html#')
        cy.get('.list-group').find('.list-group-item').eq(2).click()
        //looking for each item to be selected dynamically
        cy.get('#tbodyid').as('prodNames') // aliasing of a selector
        cy.get('@prodNames').find('.col-lg-4.col-md-6.mb-4').each(($el, index, $list) => {
            const laptopTextValue=$el.find('.hrefch').text()
            if(laptopTextValue.includes('MacBook Pro')){
                cy.wrap($el).find('.hrefch').click() 
            }
        })
        //getting text value of an object using promise method
        cy.get('#nava').then(function (navigatorTextValue){
            cy.log(navigatorTextValue.text())
        })
        //sample assertion
        cy.get('.name').should('have.text', 'MacBook Pro')
    })
})