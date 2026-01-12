describe('Registration functionality', () => {
  it('Register new user', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get("#loginPanel > p:nth-child(3) > a").click()
    cy.get("input[id='customer.firstName']").type("Housna")
    cy.get("input[id='customer.lastName']").type("Fahim")
    cy.get("input[id='customer.address.street']").type("420 Sherwood boulevard")
    cy.get("input[id='customer.address.city']").type("Calgary")
    cy.get("input[id='customer.address.state']").type("Alberta")
    cy.get("input[id='customer.address.zipCode']").type("T2R 1V1")
    cy.get("input[id='customer.phoneNumber']").type("5679874309")
    cy.get("input[id='customer.ssn']").type("ssn")
    cy.get("input[id='customer.username']").type("housna")
    cy.get("input[id='customer.password']").type("123Hf456@")
    cy.get("#repeatedPassword").type("123Hf456@")
    cy.get("#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input").click()
  })
})

