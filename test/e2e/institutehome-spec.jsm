
describe('Clofus Sigin Page', function() {

    it('should login the user', function() {
        browser.get('/signin');

        expect(browser.getTitle()).toBe("Clofus");


  /!*      element(by.model('user.username')).sendKeys("manager2@zion.com");
        element(by.model('user.password')).sendKeys("12345");
        element(by.id('click_signin')).click();
        expect(element(by.id('msg_signin')).isDisplayed()).toBeTruthy();
        expect(browser.getCurrentUrl()).toContain('/signin');

        element(by.model('user.username')).clear();
        element(by.model('user.password')).clear();*!/

        element(by.model('user.username')).sendKeys("manager2@zion.com");
        element(by.model('user.password')).sendKeys("1234");
        element(by.id('click_signin')).click();
        expect(browser.getCurrentUrl()).toContain('/wall');
        element.all(by.repeater('client in user.clients')).get(0).click();

        var value = element(by.id('page')).evaluate('activeClient.client_id').then(function(text) {
            console.log(text);
            expect(browser.getCurrentUrl()).toContain('/institute/');

            element(by.id('apps')).click();
            expect(browser.getCurrentUrl()).toContain('/dashboard');

            element.all(by.repeater('app in apps')).get(0).click();

            element(by.id('find')).click();

            browser.waitForAngular().then(function(){
                element(by.id('page')).evaluate('Approws.length').then(function(totalRows) {
                    expect(totalRows).toBeGreaterThan(0);
                    element(by.id('cancel')).click();

                    element(by.id('addnew')).click();
                    element(by.model('form.year_range')).sendKeys("2001-2002");
                    element(by.model('form.start_date')).sendKeys("2013-04-02T00:00:00.000Z");
                    element(by.model('form.end_date')).sendKeys("2014-04-17T00:00:00.000Z");
                    element(by.id('save')).click();

                    browser.waitForAngular().then(function() {
                        //element(by.id('page')).evaluate('Approws.length').then(function(totalRows) {
                        //   console.log(totalRows);
                        //});

                        //expect(element(by.id('save_notify')).isDisplayed()).toBeTruthy();

                        element(by.id('cancel')).click();
                        element(by.model('form.year_range')).sendKeys("2001-2002");
                        element(by.model('form.start_date')).sendKeys("2013-04-02T00:00:00.000Z");
                        element(by.model('form.end_date')).sendKeys("2014-04-17T00:00:00.000Z");
                        element(by.id('find')).click();
                        browser.waitForAngular().then(function(){
                            element.all(by.repeater('row in Approws').row(0)).click();
                            element(by.id('delete')).click();
                            browser.waitForAngular().then(function() {
                                //expect(element(by.id('delete_notify')).isDisplayed()).toBeTruthy();
                            });
                        });

                    });
                    //accd_id
                });
                //element.all(by.repeater('row in Approws')).row(0).column('book.name')
            });

            //webdriver.WebDriver.wait();
        });




    });
});
