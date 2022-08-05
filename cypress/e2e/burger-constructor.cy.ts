describe('burger constructor page', () => {
  it('page user activity', () => {
    cy.visit('http://localhost:3000/')

    // Wait ingredients loaded
    cy.get('.loader').should('not.exist');
    
    // Click first ingredient item
    cy.get('.ingredient-item').first().click();
    
    // Check if modal dialog opened and close it
    cy.get('.modal-dialog').should('exist');
    cy.get('.burger-ingredient-details-container').should('exist');
    cy.get('.modal-dialog-close-button')
      .trigger('mousedown');
    cy.get('.modal-dialog').should('not.exist');

    // Drop bun ingredient to constructor
    cy.get('.ingredient-item-bun').last()
      .trigger("dragstart");
    cy.get('.burger-constructor-drop-zone')
      .trigger("drop");

    // Drop 2 main ingredients to constructor
    cy.get('.ingredient-item-main').eq(0)
    .trigger("dragstart");
    cy.get('.burger-constructor-drop-zone')
      .trigger("drop");
    
      cy.get('.ingredient-item-main').eq(1)
      .trigger("dragstart");
      cy.get('.burger-constructor-drop-zone')
        .trigger("drop");

    // Drop 2 sauce ingredients to constructor
    cy.get('.ingredient-item-sauce').eq(0)
    .trigger("dragstart");
    cy.get('.burger-constructor-drop-zone')
      .trigger("drop");

    cy.get('.ingredient-item-sauce').eq(1)
    .trigger("dragstart");
    cy.get('.burger-constructor-drop-zone')
      .trigger("drop");

    // Place order
    cy.get('.burger-constructor-totals-container button').click();

    // Check if login form opened
    cy.get('.login-form').should('exist');

    // Login with test user
    cy.get('.login-form input').eq(0).type('test0001@testdomain.ru');
    cy.get('.login-form input').eq(1).type('1234567890!!');
    cy.get('.login-form button').click();

    // Place order
    cy.get('.burger-constructor-totals-container button').click();

    // Check if modal dialog opened and close it
    cy.get('.modal-dialog').should('exist');

    cy.get('.order-details-container').should('exist');

    cy.get('.modal-dialog-close-button')
      .trigger('mousedown');
    cy.get('.modal-dialog').should('not.exist');
  });
});