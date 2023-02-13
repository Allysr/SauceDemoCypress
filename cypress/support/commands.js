// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password, {log:false});
    cy.get('[data-test="login-button"]').click();
})