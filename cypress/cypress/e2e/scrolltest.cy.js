describe('scroll demo', () => {
  it('scroll demo', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm', {headers: {"Accept-Encoding": "gzip, deflate"}})
    cy.scrollTo('bottom')
    cy.scrollTo('top')
    cy.scrollTo(0,100)
    //cy.get('#footerPanel > ul:nth-child(1) > li:nth-child(4) > a').scrollIntoView()
  })
})

