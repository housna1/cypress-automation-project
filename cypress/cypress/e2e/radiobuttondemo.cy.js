describe('Checkbox functionality', () => {
  it('Checkbox demo', () => {
    cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/home/gettingstarted', {headers: {"Accept-Encoding": "gzip, deflate"}})
    cy.get('rect[width="32"]').click({ force: true })
    cy.contains('a.text-ellipsis', 'Customer').click()
    cy.get('[type="radio"]').check('business')

  })
})

