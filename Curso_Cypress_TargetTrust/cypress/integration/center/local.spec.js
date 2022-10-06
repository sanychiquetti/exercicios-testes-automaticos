///<reference types="cypress"/>

import loc from "../../support/locators";

describe("Work with locals", () => {
  beforeEach(() => {
    cy.visit("https://center.umov.me/");
    cy.login("trindade", "cypress", "a");
    cy.get(loc.MAIN.MENU_LOCALS).click();
  });

  it("Should be create new local", () => {
    //como fazer para não coencidir os nomes a cada novo este, pois não pode ter dois nomes iguais:
    const descriptionLocal = "My Home - " + Math.floor(Math.random() * 1001);
    const descriptionIdentifier = "Sany - " + Math.floor(Math.random() * 1001);
    //Preenche os dados do cadastro:
    cy.get(loc.LIST_LOCAL.BTN_NEW_LOCAL).click();
    cy.get(loc.DETAIL_LOCAL.TF_DESCRIPTION).type(descriptionLocal);
    cy.get(loc.DETAIL_LOCAL.TF_CORPORATE_NAME).type(descriptionLocal);
    cy.get(loc.DETAIL_LOCAL.TF_CELL_PHONE_STD).type("47");
    cy.get(loc.DETAIL_LOCAL.TF_CELL_PHONE_NUMBER).type("99991111");
    cy.get(loc.DETAIL_LOCAL.TF_ALTERNATIVE_IDENTIFIER).type(
      descriptionIdentifier
    );
    cy.get(loc.DETAIL_LOCAL.TF_COUNTRY).type("Brasil");
    cy.get(loc.DETAIL_LOCAL.TF_STATE).type("Santa Catarina");
    cy.get(loc.DETAIL_LOCAL.TF_CITY).type("Itapema");
    cy.get(loc.DETAIL_LOCAL.TF_CITY_NEGHBORHOOD).type("Meia Praia");
    cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click();

    // Para se certificar que foi criado a nova lista e salva corretamente:
    cy.get(loc.LIST_LOCAL.TF_SEARCH).type(descriptionLocal);
    cy.get(loc.LIST_LOCAL.BTN_SEARCH).click();
    //montar o lacator com base no nome que vamos pesquisar:
    cy.xpath(`//td[contains(text(),'${descriptionLocal}')]`).should("exist");
  });
});
