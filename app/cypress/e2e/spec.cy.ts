describe('Watched It!', () => {
  const apiUrl = 'http://127.0.0.1:8000/api/programmes';
  let testProgramme: any;

  beforeEach(() => {
    cy.request(
        'POST',
        apiUrl,
        {
          name: 'Testing Programme',
          genre: 'Test',
          rating: '3',
          comments: 'This is just a test'
        }
    ).then((response) => { testProgramme = response.body; });
  });

  afterEach(() => {
    cy.request(
        'DELETE',
        `${apiUrl}/${testProgramme.id}`
    );
  });

  it('Visits the Watched It! project page and displays the correct title', () => {
    cy.visit('/');
    cy.title().should('eq', 'Watched it!');
  });

  it('Should open the page, check the grid view, and ascertains that the data is correct', () => {
    cy.visit('/');

    // Check for page elements (heading, grid appears without having to change the toggle, and grid length 3)
    cy.get('#programmes_main_heading').should('have.text', 'List of Programmes');
    cy.get('#programmes__grid')
        .invoke('css', 'grid-template-columns')
        .then((col) => {
          expect(col.toString() === '1fr 1fr 1fr');
        });

    // Check that movie exists with the values we entered earlier
    cy.get('.programmes__grid__item ').contains('Testing Programme');
    cy.get('.programmes__grid__item ').contains('3/5');
  });

  it('Should open the page, toggle to list view, and ascertains that the data is correct', () => {
    cy.visit('/');

    // Check for page elements (heading, grid appears without having to change the toggle, and grid length 3)
    cy.get('#programmes_main_heading').should('have.text', 'List of Programmes');
    cy.get('select[name="view-mode"]').select('List');
    cy.get('.programmes__list').should('exist');

    // Check that movie exists with the values we entered earlier
    cy.get('.programmes__list__item input[id="name"]').last()
        .invoke('attr', 'ng-reflect-model').should('eq', 'Testing Programme');
    cy.get('.programmes__list__item input[id="genre"]').last()
        .invoke('attr', 'ng-reflect-model').should('eq', 'Test');
    cy.get('.programmes__list__item select[id="rating"]').last()
        .invoke('attr', 'ng-reflect-model').should('eq', '3');
    cy.get('.programmes__list__item input[id="comments"]').last()
        .invoke('attr', 'ng-reflect-model').should('eq', 'This is just a test');
  });
});


