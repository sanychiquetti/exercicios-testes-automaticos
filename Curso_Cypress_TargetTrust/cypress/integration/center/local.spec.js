///<reference types="cypress"/>

import loc from '../../support/locators'

describe("Work with locals", () => {

    beforeEach(() => {
        cy.visit("https://center.umov.me/")
        cy.login('trindade', 'cypress', '123456')
        cy.get(loc.MAIN.MENU_LOCALS).click()
    })

    it("Should be create new local", () => {

    })
    
})