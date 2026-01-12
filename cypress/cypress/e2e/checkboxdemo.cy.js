describe('Checkbox functionality', () => {
  it('Checkbox demo', () => {
    cy.visit('https://practice.expandtesting.com/checkboxes?', {headers: {"Accept-Encoding": "gzip, deflate"}})
    //cy.get("#checkbox1").click()
    cy.get('[type="checkbox"]').click({multiple:true})
    
  })
})

