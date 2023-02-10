///<reference types="cypress"/>

describe("Agrupamento de teste A", () => {
  it("Meu primeiro teste", () => {
  });

  it("Meu segundo teste", () => {
  });
})

describe("Agrupamento de testes B", () => {

  describe("Mais um agrupamento", () => {
    it("Meu terceiro teste", () => {});
  });

  it("Meu quarto teste", () => {});
});