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
  it("Deveria escrever o nome", () => {
    //para fazer esse seletor com lacators podemos usar crase ou aspas duplas, se essa não estiver usando no seletor
    cy.get("[name='txtbox1']")
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
    it("Deveria validar o text de um label", function () {
      cy.get('form > :nth-child(1) > .text-muted')
      .should("have.text", "TextField:")
    })

    it("Validar Radio Group", () => {

      // valida o primeiro checkado
      cy.get("[name='radioGroup1']").first().check().should("be.checked")
      //valida o terceiro checkado
      cy.get("[name='radioGroup1']").check("Radio 3").should("be.checked")
      //valida o ultimo não checkado
      cy.get("[name='radioGroup1']").last().should("not.be.checked")
      //valida que são 4 radio
      cy.get("[name='radioGroup1']").should("have.length", 4)
    })

    it("Validar CheckBox",() => {

      cy.get("[name='chkbox']").should("have.length", 4)

      cy.get("[name='chkbox']")
          .check("Check 2")
          .should("be.checked")
          .uncheck("Check 2")
          .should("not.be.checked")

        cy.get("[name='chkbox']").check( {multiple:true} )
        cy.get("[name='chkbox']").first().should("be.checked")

        cy.get("[name='chkbox']").uncheck( {multiple:true} )
        cy.get("[name='chkbox']").should("not.be.checked")

      })

        it("Valida seleção em um select", () => {

          cy.get("[name='dropdownlist']")
              .select("Item 2")
              .should("have.value", "item2")
          cy.get("[name='dropdownlist'] option")
          .first()
          .should("have.value", "item1")

          cy.get("[name='dropdownlist'] option").should("have.length", 10)

          //TODO varrer o componente validando os 10 existentes
      })

      it("Valida a seleção do select", () => {

        cy.get("[name='multiselectdropdown']")
          .select(["Item 1", "Item 4", "Item 6"])

          //TODO identificar que são esses 3 acima selecionados
      })
})
