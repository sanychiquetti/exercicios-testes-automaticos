// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// adiciona xpath a execução do cypress
require('cypress-xpath');

//para alterar a ordem de preferência dos seletores no playground
Cypress.SelectorPlayground.defaults({
    selectorPriotity:['id', 'class', 'tag', 'attributes', 'data-test','nht-child'],
  })
