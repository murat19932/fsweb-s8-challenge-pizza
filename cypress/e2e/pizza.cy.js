describe('Pizza Siparişi Testi', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); // Uygulamanızın çalıştığı doğru URL
  });

  it('Metin alanına sipariş notu ekleme', () => {
    cy.get('textarea[placeholder="Siparişine eklemek istediğin bir not var mı?"]')
      .type('Ekstra acı olsun lütfen')
      .should('have.value', 'Ekstra acı olsun lütfen');
  });

  it('Birden fazla malzeme seçme', () => {
    cy.get('input[type="checkbox"][value="Pepperoni"]').check().should('be.checked');
    cy.get('input[type="checkbox"][value="Sucuk"]').check().should('be.checked');
  });

  it('Formu gönderme', () => {
    // Sipariş notu girme ve malzeme seçme
    cy.get('textarea[placeholder="Siparişine eklemek istediğin bir not var mı?"]')
      .type('Ekstra peynir lütfen');
    cy.get('input[type="checkbox"][value="Pepperoni"]').check();
    
    // Sipariş ver butonunun aktif olduğunu doğrula
    cy.get('.order-button').should('not.be.disabled');

    // Sipariş Ver butonuna tıkla
    cy.get('.order-button').click();

    // Siparişin gönderildiğini doğrulayacak bir bildirim veya yönlendirme bekliyoruz
    // Örneğin, bir onay mesajı veya yönlendirme:
    cy.contains('Siparişiniz alındı').should('exist');
  });
});
