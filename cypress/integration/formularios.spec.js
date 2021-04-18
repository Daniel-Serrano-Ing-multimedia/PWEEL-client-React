/// <reference types = "cypress"/>
describe( '<Formularios/>', () => {
  const baseUrl = 'http://localhost:3000';
  it( '<Registro/> - Verificar Pantalla de registro', () => {
    cy.visit( `${ baseUrl }/registro` );
    // probar que este en el form de registro
    cy.get( '[ data-cy = registro-title ]' )
      .invoke( 'text' )
      .should( 'equal', 'Registrarse' );
    // Revisar que el formulario exista
    cy.get( '[ data-cy = registro-form ]' ).should( 'exist' );
    cy.get( '[ data-cy = registro-input-name ]' ).should( 'exist' );
    cy.get( '[ data-cy = registro-input-lastname ]' ).should( 'exist' );
    cy.get( '[ data-cy = registro-input-password ]' ).should( 'exist' )
      .should( 'have.prop', 'type' )
      .should( 'eq', 'password' )	
    ;
    cy.get( '[ data-cy = registro-input-submit ]' ).should('exist');
  } ); 
} );