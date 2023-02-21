/// <reference types = "Cypress" />

describe('Mouse hover', function()
{
    it('Mouse hover scenario', function(){
        cy.visit('https://www.sliderrevolution.com/')
        cy.get('#menu-item-26 > ul >li > a').each(($el, index, $list) => {
            const courseTitle = $el.text()
            if(courseTitle.includes('Modules')){
                    //cy.contains('Cypress').click({force: true})
                    cy.get($el).invoke('show') // using jquery show method, to look for hidden elements in webpage
                    cy.contains('Sliders').click({force: true})
                    cy.url().should('include', 'sliders-like-never-seen-before')
                }
         })
    })
})