describe('clear text demo', () => {
  it('clear text demo', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type("standard_user")
    cy.get('#user-name').clear()
   
  })
})

