describe('Clofus homepage', function () {

    it('should chat working different interest and different condition', function () {

        browser.get('/signin');
        element(by.model('user.username')).sendKeys("karthikbalu.meng@gmail.com");
        element(by.model('user.password')).sendKeys("1234");
        element(by.id('click_signin')).click();
        expect(browser.getCurrentUrl()).toContain('/home');


        /* element.all(by.repeater('msg in activeChannel.msgs')).then(function (res) {
         console.log(res[0]);
         res[0].element(by.css('.pointer')).getText().then(function (txt) {
         expect(txt).toEqual("has joined #test");
         });
         });
         */

        /*
         element.all(by.repeater('msg in activeChannel.msgs')).get(0).then(function (res) {
         res.element(by.css('.pointer')).getText().then(function (txt) {
         expect(txt).toEqual("has joined #test");
         });
         });*/


        element.all(by.repeater('group in groupList')).get(1).click();
        element(by.model('msg.text')).sendKeys("my message1");
        element(by.id('basic-addon2')).click();


        browser.driver.sleep(3000);


        var temp= element.all(by.repeater('msg in activeChannel.msgs')).get(0);
        temp.element(by.css('.pointer')).getText().then(function(txt) {
            if(txt=="my message1") {
                expect(txt).toEqual("my message1")
            }
            else{
                expect(txt).toEqual("has joined #common");
            }

        });




        element(by.model('msg.text')).sendKeys("my message2");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message3");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message4");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message5");
        element(by.id('basic-addon2')).click();




        element.all(by.repeater('group in groupList')).get(2).click();



        element(by.model('msg.text')).sendKeys("my message1");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message2");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message3");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message4");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message5");
        element(by.id('basic-addon2')).click();



        element.all(by.repeater('group in groupList')).get(3).click();



        element(by.model('msg.text')).sendKeys("my message1");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message2");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message3");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message4");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message5");
        element(by.id('basic-addon2')).click();



        element.all(by.repeater('group in groupList')).get(1).click();



        element(by.model('msg.text')).sendKeys("my message1");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message2");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message3");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message4");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message5");
        element(by.id('basic-addon2')).click();

    });

    it('should show chat box for activechannel',function() {
        browser.get('/articles/0');

        element.all(by.repeater('group in groupList')).get(2).click();

        expect(browser.getCurrentUrl()).toContain('/home');

        browser.driver.sleep(3000);

        element(by.model('msg.text')).sendKeys("my message2");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message3");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message4");
        element(by.id('basic-addon2')).click();

        element(by.model('msg.text')).sendKeys("my message5");
        element(by.id('basic-addon2')).click();
    });

    it('should go to search interest page',function() {
        element(by.id('add_interest')).click();
        expect(browser.getCurrentUrl()).toContain('/searchinterest');
    });

    it('should go to create articles page',function() {
        browser.get('/home');
        element(by.id('create_pages')).click();
        expect(browser.getCurrentUrl()).toContain('/articles/0');
    });

    it('check videos update function  working or not?', function() {
        // browser.get('/home');
        element(by.id('videolink')).click();
        element(by.model('videosurl')).sendKeys("http://www.tutorialspoint.com/angularjs/angularjs_overview.htm");
        element(by.id('addvideobutton')).click();
        browser.driver.sleep(8000);

    });
    it('check links update function  working or not?', function() {
        // browser.get('/home');
        element(by.id('linkslink')).click();
        element(by.model('tutorialurl')).sendKeys("http://www.tutorialspoint.com/angularjs/angularjs_overview.htm");
        element(by.id('linksaddbutton')).click();
        browser.driver.sleep(8000);
    });
    it('check pages function  working or not?', function() {
        // browser.get('/home');
        element(by.id('pagelink')).click();
        element(by.id('createpagearticlebutton')).click();
        browser.driver.sleep(8000);
    });
    it('check people view function  working or not?', function() {
        // browser.get('/home');
        element(by.id('peoplelink')).click();
        element.all(by.repeater('people in peopleList')).get(1).click();
        browser.driver.sleep(8000);
    });


});



/*
 element.all(by.repeater('msg in activeChannel.msgs')).then(function (res) {
 res[5].element(by.css('.pointer')).getText().then(function (txt) {
 expect(txt).toEqual("my message5");
 });
 });*/




/*  browser.driver.sleep(4000);

 element.all(by.repeater('msg in activeChannel.msgs')).get(0).then(function (res) {
 res.element(by.css('.pointer')).getText().then(function (txt) {
 expect(txt).toEqual("has joined #common");
 });
 });
 element.all(by.repeater('group in groupList')).get(1).click();
 element(by.model('msg.text')).sendKeys("my message1");
 element(by.id('basic-addon2')).click();
 browser.driver.sleep(4000);

 element.all(by.repeater('msg in activeChannel.msgs')).get(1).then(function (res) {
 res.element(by.css('.pointer')).getText().then(function (txt) {
 expect(txt).toEqual("my message1");
 });
 });*/

/*  browser.driver.sleep(5000);
 */


/*  element.all(by.repeater('msg in activeChannel.msgs')).get(0).then(function (res) {
 res.element(by.css('.pointer')).getText().then(function (txt) {
 console.log(txt);
 //expect(txt).toEqual("has joined #test");
 });
 });*/

/* element.all(by.repeater('group in groupList')).get(1).click();
 element(by.model('msg.text')).sendKeys("my message1");
 element(by.id('basic-addon2')).click();

 browser.driver.sleep(4000);*/





/*   element.all(by.repeater('msg in activeChannel.msgs')).then(function (res) {
 res[2].element(by.css('.pointer')).getText().then(function (txt) {
 expect(txt).toEqual("my message2");
 });
 });

 browser.driver.sleep(3000);*/




/*element.all(by.repeater('msg in activeChannel.msgs')).then(function (res) {
 res[3].element(by.css('.pointer')).getText().then(function (txt) {
 expect(txt).toEqual("my message3");
 });
 });

 browser.driver.sleep(3000);*/




//        browser.wait();
//        browser.waitForAngular();

/* element.all(by.repeater('msg in activeChannel.msgs')).then(function (res) {
 res[1].element(by.css('.pointer')).getText().then(function (txt) {
 expect(txt).toEqual("my message1");
 });
 });*/


/*     browser.driver.sleep(4000);

 element.all(by.repeater('group in groupList')).get(1).click();
 element(by.model('msg.text')).sendKeys("my message1");
 element(by.id('basic-addon2')).click();

 browser.driver.sleep(4000);

 element.all(by.repeater('msg in activeChannel.msgs')).get(0).then(function (res) {
 res.element(by.css('.pointer')).getText().then(function (txt) {
 expect(txt).toEqual("has joined #common");
 });
 });
 browser.driver.sleep(4000);

 element.all(by.repeater('msg in activeChannel.msgs')).get(1).then(function (res) {
 res.element(by.css('.pointer')).getText().then(function (txt) {
 expect(txt).toEqual("my message1");
 });
 });


 element.all(by.repeater('group in groupList')).get(2).click();
 element(by.model('msg.text')).sendKeys("my message2");
 element(by.id('basic-addon2')).click();

 browser.driver.sleep(4000);

 element.all(by.repeater('msg in activeChannel.msgs')).get(2).then(function (res) {
 res.element(by.css('.pointer')).getText().then(function (txt) {
 expect(txt).toEqual("has joined #common");
 });
 });
 browser.driver.sleep(4000);

 element.all(by.repeater('msg in activeChannel.msgs')).get(2).then(function (res) {
 res.element(by.css('.pointer')).getText().then(function (txt) {
 expect(txt).toEqual("my message2");
 });
 });

 browser.get("/articles/0");
 expect(browser.getCurrentUrl()).toContain('/articles/0');
 element.all(by.repeater('group in groupList')).get(3).click();
 expect(browser.getCurrentUrl()).toContain('/home');

 browser.driver.sleep(4000);

 element.all(by.repeater('group in groupList')).get(3).click();
 element(by.model('msg.text')).sendKeys("from articles to home");
 element(by.id('basic-addon2')).click();

 element.all(by.repeater('msg in activeChannel.msgs')).get(2).then(function (res) {
 res.element(by.css('.pointer')).getText().then(function (txt) {
 expect(txt).toEqual("my message2");
 });
 });*/