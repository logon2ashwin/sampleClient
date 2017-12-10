
describe('Clofus Sigin Page', function() {


   it('check user signup page ', function(){
        //wrong password checking
        browser.get('/signup');
       element(by.model('user.username')).clear();
        element(by.model('user.username')).sendKeys("james@gmail.com");
       element(by.model('user.password')).clear();
        element(by.model('user.password')).sendKeys("1234");
       element(by.model('cuser.password')).clear();
        element(by.model('cuser.password')).sendKeys("123456");
        element(by.id('usersign')).click();
        browser.driver.sleep(4000);

        // correct password already have an account
        browser.get('/signup');
        element(by.model('user.username')).sendKeys("james@gmail.com");
        element(by.model('user.password')).sendKeys("1234");
        element(by.model('cuser.password')).sendKeys("1234");
        element(by.id('usersign')).click();
        browser.driver.sleep(4000);
    });


    it('check user signin ', function(){
        browser.get('/signin');
        expect(browser.getTitle()).toBe("Clofus - Learn Collaboratively");

        element(by.model('user.username')).sendKeys("kavin.beece@gmail.com");
        element(by.model('user.password')).sendKeys("12344");
        element(by.id('click_signin')).click();

       $('.notifications-container .error .message').getText().then(function(text) {
       expect(text).toContain('Oops! You have just entered a wrong username/password!');
 });
       expect(browser.getCurrentUrl()).toContain('/signin');
        element(by.model('user.username')).clear();
       element(by.model('user.password')).clear();


       element(by.model('user.username')).sendKeys("kavin.beece@gmail.com");
       element(by.model('user.password')).sendKeys("12345");
        element(by.id('click_signin')).click();
       expect(browser.getCurrentUrl()).toContain('/home');

    });


    it('check create article working or not?', function(){

         element(by.id('create_pages')).click();
         element(by.model('page.title')).clear();
         element(by.model('page.title')).sendKeys("my latest article");
         //element(by.model('page.content')).sendKeys("tesababsabcgcbccvdcvcsacsacvascsa csabcsacsvcascbsbsbcbasb");
         browser.driver.sleep(500);
         element(by.id('postpagebutton')).click();
         element(by.model('newTag.text')).sendKeys("testscript");
         element(by.model('page.topic')).sendKeys('angularjs');
         element(by.id('selectchannelbutton')).click();
         element(by.id('postarticlepagebutton')).click();
    });

    it('check view article working or not?', function(){
       //view article  like  function test///
        element.all(by.repeater('Pages in myPages')).get(2).click();
        element(by.id('likebutton')).click();
        browser.driver.sleep(4000);

        //view article  dislike  function test///
        browser.get('/home');
        element.all(by.repeater('Pages in myPages')).get(4).click();
        element(by.id('dislikebutton')).click();
        browser.driver.sleep(4000);

    });
   it('check search function  working or not?', function() {
        browser.get('/home');
        element(by.model('searchkey')).sendKeys("tutorial");
        element(by.id('basic-addon')).click();
        element(by.id('viewresultbutton')).click();
        element.all(by.repeater('data in searchResults')).get(2).click();
        browser.driver.sleep(1000);
        element(by.id('deletearticlebutton')).click();
    });
    it('check delete article function  working or not?', function() {
        browser.get('/home');
        element.all(by.repeater('Pages in myPages')).get(3).click();
        element(by.id('deletearticlebutton')).click();
        browser.driver.sleep(1000);
    });

     it('check Edit article function  working or not?', function() {
         browser.get('/home');
        element.all(by.repeater('Pages in myPages')).get(5).click();
         element(by.id('editarticlebutton')).click();
         element(by.model('page.title')).clear();
         element(by.model('page.title')).sendKeys("my update article");
         element(by.id('postpagebutton')).click();
         element(by.model('newTag.text')).sendKeys("testscrt");
         browser.driver.sleep(1000);
         element(by.id('postarticlepagebutton')).click();
        element(by.id('gotoviewarticle')).click();
        browser.driver.sleep(4000);

    });
    it('check profile edit function  working or not?', function() {
         browser.get('/profile/20');
         // expect(element(by.css('span.MsgRoundDownToHours')).isDisplayed()).toBe(true);
         element(by.id('profilebutton1')).click();
         element(by.model('profile.firstname')).clear();
         element(by.model('profile.firstname')).sendKeys("jeeva");
         element(by.model('profile.lastname')).clear();
         element(by.model('profile.lastname')).sendKeys("madras");
         element(by.model('profile.nick_name')).clear();
         element(by.model('profile.nick_name')).sendKeys("jee");
         element(by.model('profile.city')).clear();
         element(by.model('profile.city')).sendKeys("madras");
         element(by.cssContainingText('option','France')).click();
         element(by.model('profile.phoneno')).clear();
         element(by.model('profile.phoneno')).sendKeys("98745612345");
         // element(by.id('profilesavebutton')).click();

    });
    it('check education details function  working or not?', function() {
        browser.get('/profile/20');
       element(by.id('addedubutton')).click();
        element(by.model('education.institute_name')).sendKeys("madras Institute of Technology");

        element(by.model('education.country')).sendKeys("india");
        element(by.model('education.edulevel')).sendKeys("first class");
        element(by.id('saveedubutton')).click();
        browser.driver.sleep(2000);
        element(by.id('addedubutton')).click();
        browser.driver.sleep(1000);
        element(by.id('canceledubutton')).click();
        browser.driver.sleep(1000);
        element.all(by.repeater('edu in vieweducation')).get(1).click();
        element(by.id('removebut')).click();
        browser.driver.sleep(4000);

    });


    it('check work details function  working or not?', function() {
        element(by.id('addworkdetailsbutton')).click();
        element(by.model('work.company_name')).sendKeys("Clofus software solutions");
        element(by.model('work.title')).sendKeys("Software Developer");
        element(by.model('work.domain')).sendKeys("script");
        element(by.id('saveworkdetailsbutton')).click();
        element(by.id('addworkdetailsbutton')).click();
        browser.driver.sleep(2000);
        element(by.id('cancelworkdetailbutton')).click();
        element.all(by.repeater('workshow in viewwork')).get(2).click();
        element(by.id('removeworkdetailsbutton')).click();
    });


    it('check search function  working or not?', function() {
        browser.get('/searchinterest');
        element(by.model('searchtext')).sendKeys("bootrap");
        element(by.id('basic-addon3')).click();
        element(by.id('interestbutton')).click();
        browser.driver.sleep(8000);
    });

   it('check password change with mismatch function   working or not?', function() {
        browser.get('/profile/20');
        element(by.id('2')).click();
        element(by.model('password.oldpassword')).sendKeys("1234");
        element(by.model('password.newpassword')).sendKeys("12345");
        element(by.model('password.confirmpassword')).sendKeys("1234");
        browser.driver.sleep(1000);

    });
    it('check password change with correct password function  working or not?', function() {
        browser.get('/profile/20');
        element(by.id('2')).click();
        element(by.model('password.oldpassword')).sendKeys("12345");
        element(by.model('password.newpassword')).sendKeys("1234");
        element(by.model('password.confirmpassword')).sendKeys("1234");
        element(by.id('changepassbutton')).click();
        browser.driver.sleep(8000);

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
