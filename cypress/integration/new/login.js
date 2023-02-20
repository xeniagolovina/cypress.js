describe('Тестирование формы логина', function () {
    
    it('Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })

    it('Позитивный кейс восстановления пароля', function () {
        cy.reload();
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#mailForgot').type('german@dolnikov.ru')
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })

    it('Негативный кейс неверный пароль', function () {
        cy.reload();
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqa');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })

    it('Негативный кейс неверный логин', function () {
        cy.reload();
        cy.get('#mail').type('ger@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })

    it('Негативный кейс ошибка валидации', function () {
        cy.reload();
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })

    it('Позитивный кейс проверка парсинга', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })

})
