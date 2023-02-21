/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe'

describe('Iframe', function()
{
    it('Frames scenario', function(){
        cy.visit('http://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe().type('{selectall}').clear()
        cy.iframe().type('this is a test')
    })
})