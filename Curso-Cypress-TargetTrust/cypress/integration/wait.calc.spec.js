///<reference types="cypress"/>

describe("Test work with Waits",() => {
    beforeEach(() => {
        cy.visit("/desafiosoma.html")
    })

    it("Should be sum", () => {
        cy.get('#number1').type("5")
        cy.get('#number2').type("4")
        cy.get('#somar').click()
        //uma forma de colocar um tempo para apenas um teste, menos usado:
        //cy.wait(3000)
        //para colocar espera de forma mais certa usar o timeout apenas no teste:
        cy.get('#total', {timeout: 4000} ).should("have.value", "9")
    })
})