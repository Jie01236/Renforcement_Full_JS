describe('login', () => {
    it('page login', () => {
      cy.visit('http://localhost:5173/login');
  
      cy.get('input[placeholder="Nom d\'utilisateur"]').type('testuser');
      cy.get('input[type="password"]').type('testpassword');
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/');
      cy.contains('Bienvenue à votre gestion des tâches');
    });
  });
  