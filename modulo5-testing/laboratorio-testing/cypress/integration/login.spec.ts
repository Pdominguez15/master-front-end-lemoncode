import { literals } from '../../src/core/i18n';
describe('Login specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });

  it('should name input has the focus when it clicks on it', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.findByLabelText(`${literals.components.fields.user} *`).click();

    // Assert
    cy.findByLabelText(`${literals.components.fields.user} *`).should(
      'have.focus'
    );
  });

  it('should password input has the focus when it clicks on it', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.findByLabelText(`${literals.components.fields.password} *`).click();

    // Assert
    cy.findByLabelText(`${literals.components.fields.password} *`).should(
      'have.focus'
    );
  });

  it('should display user error inline when it click on it and lose the focus', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.findByLabelText(`${literals.components.fields.user} *`).click();
    cy.findByLabelText(`${literals.components.fields.password} *`).click();

    // Assert
    cy.findByText('Debe informar el campo').should('exist');
  });

  it('should display password error inline when it click on it and lose the focus', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.findByLabelText(`${literals.components.fields.password} *`).click();
    cy.findByLabelText(`${literals.components.fields.user} *`).click();

    // Assert
    cy.findByText('Debe informar el campo').should('exist');
  });

  it('should show an error inline when type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';
    // Act
    cy.visit('/');
    cy.findByLabelText(`${literals.components.fields.user} *`).as('userInput');
    cy.findByLabelText(`${literals.components.fields.password} *`).as(
      'passwordInput'
    );

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.findByRole('alert').should('exist');
    cy.findByText('Usuario y/o password no válidos').should('exist');
  });

  it('should navigate to submodule-list url when type valid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.visit('/');
    cy.findByLabelText(`${literals.components.fields.user} *`).as('userInput');
    cy.findByLabelText(`${literals.components.fields.password} *`).as(
      'passwordInput'
    );

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.url().should('eq', 'http://localhost:8080/#/submodule-list');
  });
});
