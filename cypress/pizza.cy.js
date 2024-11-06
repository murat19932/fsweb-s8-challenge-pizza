describe('Pizza Siparişi Testi', () => {
    // Testlerin her birinden önce uygulama URL'sine gidiyoruz
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Uygulamanızın çalıştığı portu kontrol edin
    });
  
    it('Metin alanına sipariş notu ekleme', () => {
      cy.get('textarea[placeholder="Siparişine eklemek istediğin bir not var mı?"]')
        .type('Ekstra acı olsun lütfen')
        .should('have.value', 'Ekstra acı olsun lütfen');
    });
  
    it('Birden fazla malzeme seçme', () => {
      // İki malzeme seçiyoruz ve seçildiklerini doğruluyoruz
      cy.get('input[type="checkbox"][value="Pepperoni"]').check().should('be.checked');
      cy.get('input[type="checkbox"][value="Sucuk"]').check().should('be.checked');
      // Seçili malzemeleri kaldırıp tekrar kontrol ediyoruz
      cy.get('input[type="checkbox"][value="Pepperoni"]').uncheck().should('not.be.checked');
      cy.get('input[type="checkbox"][value="Sucuk"]').uncheck().should('not.be.checked');
    });
  
    it('Formu gönderme', () => {
      // Sipariş miktarını artırma
      cy.get('.order-controls button').contains('+').click();
      cy.get('.order-controls input[type="text"]').should('have.value', '2');
  
      // Sipariş Ver butonuna tıklama
      cy.get('.order-button').click();
  
      // Siparişin gönderildiğini doğrulayacak bir bildirim veya yönlendirme bekliyoruz
      // Örneğin, bir onay mesajı veya yönlendirme:
      cy.contains('Siparişiniz alındı').should('exist');
    });
  });
  