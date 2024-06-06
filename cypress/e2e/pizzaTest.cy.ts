describe('visit home page', () => {
  it('visit', () => {
    cy.visit('/')
    cy.contains('Teknolojik Yemekler')
  })
})

describe('home page to pizza page', () => {
  it('click button', () => {
    cy.visit('/')
    cy.get('[data-testid="home-to-pizza"]').should('exist').click()
    cy.url().should('include', '/pizza')
  })
})

describe('e2e test', () => {
  it('e2e', () => {
    cy.visit('/')
    cy.get('[data-testid="home-to-pizza"]').should('exist').click()

    cy.url().should('include', '/pizza')

    cy.get('[data-testid="size-1"]').should('exist').click()
    cy.get('[data-testid="paste-select"]').should('exist').select(2)

    cy.get('[data-testid="materials-2"]').should('exist').check()
    cy.get('[data-testid="materials-4"]').should('exist').check()
    cy.get('[data-testid="materials-6"]').should('exist').check()
    cy.get('[data-testid="materials-8"]').should('exist').check()
    cy.get('[data-testid="materials-10"]').should('exist').check()

    cy.get('[data-testid="pizza-note"]').should('exist').type('Test Note')
    cy.get('[data-testid="pizza-note"]')
      .should('exist')
      .should('have.value', 'Test Note')
    cy.get('[data-testid="pizza-note"]').should('exist').clear()
    cy.get('[data-testid="pizza-note"]').should('exist').type('Test Note')

    cy.get('[data-testid="pizza-count-plus"]').should('exist').click()
    cy.get('[data-testid="pizza-count-plus"]').should('exist').click()
    cy.get('[data-testid="pizza-count-plus"]').should('exist').click()
    cy.get('[data-testid="pizza-count-minus"]').should('exist').click()
    cy.get('[data-testid="pizza-count"]').should('exist').contains('3')

    cy.get('[data-testid="pizza-submit"]').should('exist').click()

    cy.url().should('include', '/success')

    cy.contains('SİPARİŞ ALINDI').should('exist')
  })
})
