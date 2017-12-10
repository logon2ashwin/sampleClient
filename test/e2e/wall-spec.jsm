describe('Clofus Sigin Page', function() {

    it('should login the user', function() {
        browser.get('/signin');

        expect(browser.getTitle()).toBe("Clofus");


  /*      element(by.model('user.username')).sendKeys("manager2@zion.com");
        element(by.model('user.password')).sendKeys("12345");
        element(by.id('click_signin')).click();
        expect(element(by.id('msg_signin')).isDisplayed()).toBeTruthy();
        expect(browser.getCurrentUrl()).toContain('/signin');

        element(by.model('user.username')).clear();
        element(by.model('user.password')).clear();*/

        element(by.model('user.username')).sendKeys("manager2@zion.com");
        element(by.model('user.password')).sendKeys("1234");
        element(by.id('click_signin')).click();
        expect(browser.getCurrentUrl()).toContain('/wall');

        element(by.model('fwall.status')).sendKeys("Hi buddy");
        element(by.cssContainingText('div .btn', 'Post')).click();
       /* console.log(element(by.model('wall')))*/

        //console.log(element(by.binding('appear.status')).getText());
        expect(element.all(by.repeater('appear in wall')).get(0).getText()).toContain("Hi buddy");



    });
});
