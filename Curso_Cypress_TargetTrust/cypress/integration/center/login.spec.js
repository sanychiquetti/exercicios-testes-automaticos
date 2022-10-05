///<reference types="cypress"/>

//para importar os locators da pasta feita com os logins
import loc from '../../support/locators'

describe("Login Tests", () =>{

    beforeEach(() => {
        cy.visit("https://center.umov.me/")
    })

    it("Should be login successful", () => {
        cy.login('trindade', 'cypress', '123456')
        cy.get(loc.MAIN.IMG_MENU).should("to.be.visible")
    })
    //vamos criar login inválido, pegue uma mensagem de erro para validar
    it("Should be login invalid", () => {
        cy.login('trindade', 'inexistente', 'invalida')
        cy.get(loc.LOGIN.MESSAGE_ERROR).should("have.text", "Login invalid.")
    })
})