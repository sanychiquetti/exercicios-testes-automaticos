///<reference types="cypress"/>

describe("Testes com elementos web", () => {

    //com o before ele vai rodar antes das classes o testes configurar nojson e aqui ele roda o subdominio
    beforeEach(() => {
        cy.visit("/elementsweb.html")
    })

  it("Deveria acessar o título da página", () => {
    cy.title().should("to.be.equal", "WebElements Test Page Lab")
  })

// se colocar o only vai rodar apenas esse teste - cuidado para não esquecer
  it.only("Deveria escrever o nome", () => {
    //para fazer esse seletor com lacators podemos usar crase ou aspas duplas, se essa não estiver usando no seletor
    cy.get("[name='txtbox1']")
      .type("Sany")
      .should("have.value", "Sany");
  })

})
