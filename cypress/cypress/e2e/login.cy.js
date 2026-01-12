describe('Login functionality', () => {
  it('Login regitered user', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm',{headers: {"Accept-Encoding": "gzip, deflate"}})
    cy.get("#loginPanel > form > div:nth-child(2) > input").type("housna")
    cy.get("#loginPanel > form > div:nth-child(4 > input").type("123Hf456@")
    cy.get('#loginPanel > form > div:nth-child(5 > input').click()
    cy.get('#accounTable > tbody > tr.ng-scope > td:nth-child(1) > a').click()
    cy.get('#month').select(11)
    cy.get('#month').select('March')
    cy.get('#month').select('May')
  })
})

