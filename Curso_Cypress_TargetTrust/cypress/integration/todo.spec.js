///<reference types="cypress"/>

describe("Testes with Todo List", () => {

beforeEach(() => {
   cy.visit("https://example.cypress.io/todo")
  })

  it("Should be todo new task", () => {
    const newTask = "Fazer exercícios de bugs"
    cy.get("[data-test='new-todo']").type(`${newTask}{enter}`)
    cy.get(".todo-list li").should("have.length", 3)
    cy.get(".todo-list li").last().should("have.text", `${newTask}`)

  })

  describe("Tests with Todo New Task created", () => {
    const newTask = "Fazer exercícios de bugs"

      beforeEach(() => {
      cy.get("[data-test='new-todo']").type(`${newTask}{enter}`)
     })

    it("Should task check", () => {
     // cy.get(".todo-list li")
     // .last()
     // .find("input")
     // .check()
     // .should("be.checked")
      cy.get(".todo-list")
                .contains(`${newTask}`)
                .parent()
                .find("input")
                .check()
                .should("be.checked")
    })

    it("Should validate complete task list", () => {
       //check na nova tarefa
        cy.get(".todo-list").contains(`${newTask}`).parent()
          .find("input").check()
     //clica no filtro Completed
       cy.get('.filters').contains("Completed").click()

      //validações tamanho e item da lista
       cy.get(".todo-list li").should("have.length", 1)
       cy.get(".todo-list li").should("have.text", `${newTask}`)
    })

    it("Should delete new task", () => {
      cy.get(".todo-list").contains(`${newTask}`).parent()
          .find("input").check()

      cy.get(".todo-list").contains(`${newTask}`).parent()
          .find("button").click({force:true})

      //validações tamanho e item da lista
      cy.get(".todo-list li").should("have.length", 2)
      cy.get(".todo-list li").should("not.have.text", `${newTask}`)

    })

  })

})