/// <reference types = "Cypress" />

describe('Web Tables', function()
{
    it('Getting value of a certain rows and columns', function(){
        cy.visit('https://demoqa.com/books')
        cy.get('div.rt-table > div.rt-tbody > div > div > div:nth-child(2)').each(($el, index, $list) => {
            const bookTitle = $el.text()
                if(bookTitle.includes('Eloquent JavaScript, Second Edition')){
                    cy.get('div.rt-table > div.rt-tbody > div > div > div:nth-child(2)').eq(index).next().then(function (author) {
                        const authorName = author.text()
                        expect(authorName).to.equal('Marijn Haverbeke')
                    })
                }
        })
    })
})