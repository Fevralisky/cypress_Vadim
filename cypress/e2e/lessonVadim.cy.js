describe('Форма логина и пароля', function () {

    it ('Верный логин и пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru'); //верный логин 
        cy.get('#pass').type('iLoveqastudio1'); // верный пароль
        cy.get('#loginButton').click(); //кнопка войти
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст отображается корректно 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // крестик виден 

    })
    it ('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('vaddikkor@mail.ru'); //ввел любой логин
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // текст введен верно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') //крестик виден
        
    })
    it ('Негативный кейс авторизации пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru'); //верный логин 
        cy.get('#pass').type('iLoveqastudio11'); // неверный пароль
        cy.get('#loginButton').click(); //кнопка войти
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст отображается корректно 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // крестик виден 

})
    it ('Негативный кейс авторизации логина', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germani@dolnikov.ru'); //неверный логин 
        cy.get('#pass').type('iLoveqastudio1'); // верный пароль
        cy.get('#loginButton').click(); //кнопка войти
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст отображается корректно 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // крестик виден  
    })
    it ('Негативный кейс валидации', function (){
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru'); //логин без @ 
        cy.get('#pass').type('iLoveqastudio1'); // верный пароль
        cy.get('#loginButton').click(); //кнопка войти
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст отображается корректно 
    })
    it ('Строчные буквы в логине', function (){
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //логин с заглавными буквами 
        cy.get('#pass').type('iLoveqastudio1'); // верный пароль
        cy.get('#loginButton').click(); //кнопка войти
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст отображается корректно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // крестик виден 
    })
})