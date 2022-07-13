Cypress.Commands.add("SearchForSomething", (Something) => {
  const TODO_ITEM_ONE = `${Something}`

  let cc=Cypress.log({
    name: "=========>",
    consoleProps() {
      return {
        "==>": [TODO_ITEM_ONE],
      }
    },
  })
cy.get('#searchInput')
    .type(`${TODO_ITEM_ONE}{enter}`,{ log: false })

cy.get('#mw-search-DYM-suggestion', { log: false })
//        cmd.set({ el: listItems }).snapshot().end()

    .contains('fury rabbit')

})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })