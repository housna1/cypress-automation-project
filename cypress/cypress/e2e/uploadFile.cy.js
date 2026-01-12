describe('Upload File demo', () => {
  it('Upload File demo', () => {
    cy.visit('https://practice.expandtesting.com/upload?', {headers: {"Accept-Encoding": "gzip, deflate"}})
    cy.get('#fileInput').scrollIntoView()
    cy.get('#fileInput').selectFile("C:\\Users\\Housna\\Desktop\\ISTQB prep\\ISTQB_CTFL_Syllabus_v4.0.1.pdf")
  })
})


