///<reference types="cypress"/>

describe("Testes com elementos web", () => {

    //com o before ele vai rodar antes das classes o testes configurar nojson e aqui ele roda o subdominio
beforeEach(() => {
   cy.visit("/elementsweb.html")
  })

it("Deveria acessar o título da página", () => {
    cy.title().should("to.be.equal", "WebElements Test Page Lab")
  })

// se colocar o only após o (it.only) vai rodar apenas esse teste - cuidado para não esquecer
  it.only("Deveria escrever o nome", () => {
    //para fazer esse seletor com lacators podemos usar crase ou aspas duplas, se essa não estiver usando no seletor
    cy.get("[name='txtbox1']")
      .type("Sany")
      .should("have.value", "Sany")
     
    cy.get("[name='txtbox2']")
      .type("Sany")
      .should("have.value", "Sany")

  })

  it("Deveria validar textfields habilidades", () => {
    cy.get("[name='txtbox1']")
      .should("be.enabled")

    cy.get("[name='txtbox2']")
      .should("be.disabled")
      .should("not.be.enabled")
    })
    it.only("Deveria validar o text de um label", function () {
      cy.get('form > :nth-child(1) > .text-muted')
      .should("have.text", "TextField:")
    })

})
