/// <reference types="Cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('should display correct title', () => {
    cy.contains('Pig Latin Translator').should('be.visible');
  });
});
