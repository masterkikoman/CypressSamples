/// <reference types = "Cypress" />

describe('Child Windows', function()
{
    it('Child windows scenario', function(){
        // directly hit the url instead of working and opening the child window
        //cy.visit('https://www.plus2net.com/javascript_tutorial/window-parent.php') //orginal URL
        //cy.get('div div span input[type="button"]').invoke('removeAttr', 'onClick').click() // button in the paremt window
        cy.visit('https://www.plus2net.com/javascript_tutorial/window-child.html') // child window
        cy.get('[type="button"]').click()
        //cy.get('div div span input[type="button"]').click()
    })
})