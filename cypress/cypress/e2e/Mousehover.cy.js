describe('Mousehover demo ', () => {
  it('Mousehover demo', () => {
    cy.visit('https://yatra.com/', {headers: {"Accept-Encoding": "gzip, deflate"}})
    cy.get('.style_cross__q1ZoV > img:nth-child(1)').click()
  })
})


