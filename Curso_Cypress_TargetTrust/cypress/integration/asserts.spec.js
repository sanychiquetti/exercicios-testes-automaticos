///<reference types="cypress"/>

it("Números igualdades", () => {

    const val1 = 5

    expect(val1).equal(5)
    expect(val1, "Deveria ser 5").equal(5)
    expect(val1).to.be.equal(5)
    expect(val1).not.to.be.equal(10)
})

it("Work with String", () => {
    const name = "Curso de Cypress"

    //valida com a constant que defini em name
    expect(name).to.be.equal("Curso de Cypress")
    //validar pela qdade de letras
    expect(name).to.be.have.length(16)
    //validar que na expressão tem a palavra...
    expect(name).contains("Cypress")
    //validar expressao regular começa(^) com a palavra
    expect(name).to.match(/^Curso/)
    //validar expressao regular termina ($) com a palavra
    expect(name).to.match(/Cypress$/)
    //validar expressao regular não tenha numeros (D) e qual a qdade de caracteres
    expect(name).to.match(/\D{16}/)
})

    //validação de números não inteiros
it("Numbers float", () => {
    const number1 = 5.45615467864
    //valida o valor do number com a constant definida
    expect(number1).to.be.equal(5.45615467864)
    //valida o valor acima de
    expect(number1).to.be.above(5.3)
    // valida o valor abaixo de 
    expect(number1).to.be.below(5.5)
    // valida qualquer valor no intervalo de
    expect(number1).to.be.closeTo(5.4, 0.1)
})

//validar listas
it("List values", () => {
    const values = ["Teclado", "Mouse", "Fones"]
    //valida se as expressôes existem na lista
    expect(values).to.includes.members(["Teclado", "Mouse"])
})

it("Compare Objects",() => {
    const obj1 = [1, 2, 3];
    const obj2 = [1, 2, 3];

    expect(obj1).to.deep.equal(obj2)
})
