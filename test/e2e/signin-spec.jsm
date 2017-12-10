describe('Clofus Sigin Page', function() {


    it('should login the user', function() {
        browser.get('/signin');


        expect(browser.getTitle()).toBe("Clofus - Learn Collaboratively");


        element(by.model('user.username')).sendKeys("karthikbalu.meng@gmail.com");
        element(by.model('user.password')).sendKeys("12345");
        element(by.id('click_signin')).click();

        $('.notifications-container .error .message').getText().then(function(text) {
            console.log(text)
           expect(text).toContain('Oops! You have just entered a wrong username/password!');
        });

        expect(browser.getCurrentUrl()).toContain('/signin');


        element(by.model('user.username')).clear();
        element(by.model('user.password')).clear();

        element(by.model('user.username')).sendKeys("karthikbalu.meng@gmail.com");
        element(by.model('user.password')).sendKeys("1234");
        element(by.id('click_signin')).click();
        expect(browser.getCurrentUrl()).toContain('/home');

        element(by.model('user.username')).sendKeys("dennyjose.be@gmail.com");
        element(by.model('user.password')).sendKeys("sabari");
        element(by.id('click_signin')).click();
        expect(browser.getCurrentUrl()).toContain('/home');


        browser.driver.sleep(4000);

        element.all(by.repeater('group in groupList')).get(1).click();
        element(by.model('msg.text')).sendKeys("my message1");
        element(by.id('basic-addon2')).click();

//        browser.wait();
//        browser.waitForAngular();
        browser.driver.sleep(4000);

       /* element(by.model('msg.text')).sendKeys("my message2");
        element(by.id('basic-addon2')).click();

        browser.driver.sleep(2000);*/

        element.all(by.repeater('msg in activeChannel.msgs')).get(0).then(function(res){
            res.element(by.css('.pointer')).getText().then(function(txt){
                 expect(txt).toEqual("has joined #common");
            });
        });
        browser.driver.sleep(4000);

        element.all(by.repeater('msg in activeChannel.msgs')).get(1).then(function(res){
            res.element(by.css('.pointer')).getText().then(function(txt){
                expect(txt).toEqual("my message1");
            });
        });

    });
});
