describe('Visit Wikipedia website', () => {
beforeEach(() => {
    cy.visit('https://www.wikipedia.org/')
  })
  it('The header exist as title', () => {
     cy.get(".central-textlogo__image", { log: false }).should("contain", 'Wikipedia')

  })
//central-textlogo__image
//cy.viewport(2000, 1000)

      it("Search for furry rabbits", ()=>{
      cy.clearCookies()
cy.SearchForSomething('furry rabbits').as("searchItem")
//  cy.get("@searchItem").should("have.length", 1)
cy.get('.searchdidyoumean', { log: false }).should("contain", 'Did you mean: ')

  })//
  it("Check for 20 results", ()=>{
cy.SearchForSomething('furry rabbits').as("searchItem")
cy.get('.results-info > :nth-child(1)', { log: false }).should("contain", '1 – 20')

})
 it("Check for the paging feature", ()=>{
cy.SearchForSomething('furry rabbits').as("searchItem")
cy.get('.mw-nextlink', { log: false }).should("contain", 'next 20')

})
  it("Check for the article title", ()=>{
cy.SearchForSomething('furry rabbits').as("searchItem")
cy.get('.results-info > :nth-child(1)', { log: false }).should("contain", '1 – 20')
cy.get('#mw-search-DYM-suggestion', { log: false })
    .click()
cy.get(':nth-child(1) > .mw-search-result-heading > a').click()
cy.get('#firstHeading').contains("Paws of Fury")
})//
  it("Check for the article Table Of Content TOC", ()=>{
cy.SearchForSomething('furry rabbits').as("searchItem")
cy.get('.results-info > :nth-child(1)', { log: false }).should("contain", '1 – 20')
cy.get('#mw-search-DYM-suggestion', { log: false })
    .click()
cy.get(':nth-child(1) > .mw-search-result-heading > a').click()
cy.get('#mw-toc-heading').contains("Contents")

})//
  it("Check for the References", ()=>{
cy.SearchForSomething('furry rabbits').as("searchItem")
cy.get('.results-info > :nth-child(1)', { log: false }).should("contain", '1 – 20')
cy.get('#mw-search-DYM-suggestion', { log: false })
    .click()
cy.get(':nth-child(1) > .mw-search-result-heading > a').click()
cy.get('#References').contains("References")

})
  it("Check the user isn't logged-in", ()=>{
cy.SearchForSomething('furry rabbits').as("searchItem")
cy.get('.results-info > :nth-child(1)', { log: false }).should("contain", '1 – 20')
cy.get('#mw-search-DYM-suggestion', { log: false })
    .click()
cy.get(':nth-child(1) > .mw-search-result-heading > a').click()
cy.get('#pt-anonuserpage > span').contains("Not logged in")

})
//
})