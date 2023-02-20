describe('Тестирование магазина мебели', function () {
    
    it('Позитивный кейс авторизации', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
        cy.get('.header-right-items > .header-cart > a > .razzi-svg-icon > svg').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('xenia');
        cy.get('#billing_last_name').type('golovina');
        cy.get('#billing_address_1').type('пушкина 8');
        cy.get('#billing_city').type('москва');
        cy.get('#billing_state').type('химки');
        cy.get('#billing_postcode').type('195220');
        cy.get('#billing_phone').type('88005553535');
        cy.get('#billing_email').type('german@dolnikov.ru');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.');
        cy.get('.woocommerce-order-details').contains('БРОММС Двухместная кровать');
        cy.get('.product-quantity').contains('3');
        cy.get('.woocommerce-order-details').contains('КЛЛАРИОН Низкий столик');
        cy.get('.woocommerce-order-details').contains('47,800.00');
    })
})