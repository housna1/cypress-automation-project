describe('Handling dynamic dropdowns functionality', () => {
  it('Dynamic dropdown', () => {
    cy.visit('https://www.yatra.com', {headers: {"Accept-Encoding": "gzip, deflate"}})
    cy.get('#input-with-icon-adornment').click().clear().type("New", {delay:200})
    cy.get(".MuiBox-root.css-134xwrj span.fw-600.mb-0").each($el,index,$list)
      cy.log($el.text()) //read the text of the element
      if($el.text() === 'JFK') {
        cy.wrap($el).click()
      }
  })
})

