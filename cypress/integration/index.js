describe('TEST1', () => {
    it('dd', ()=>{
        cy.intercept('POST', 'http://localhost:5000/api/sample');
        cy.visit('http://localhost:5000')
        expect(true).to.equal(true)
    })
})