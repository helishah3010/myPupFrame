import ConsumerMode from "../pages/ConsumerMode";
const devices = require('puppeteer/DeviceDescriptors');
let consumerMode;

describe('Consumer mode - Identity Sign In', () => {
  beforeAll(async () => {
        jest.setTimeout(150000); 
        consumerMode = new ConsumerMode();
  });
  beforeEach(async () => {
    // this resets the global context so we can run each test independently
    await jestPuppeteer.resetBrowser();
  });

  test('Sign In - My Info page', async() => {
    await page.goto("https://clients-local.mbodev.me/classic/ws?studioid=-4802");
    /* console.info("Hello world!");
    page.on('console', msg => console.log('Page Console:', msg.text()));
    await page.waitFor(5000); */
    await page.waitForSelector('.myInfoSignInButton');
    await page.click('.myInfoSignInButton');  
    await consumerMode.consumerSignIn();
    await page.waitForSelector('#myInfoContainer', {visible: true, timeout: 0});    
  });
  /* test('Sign In - Top Right', async() => {

  }); */
  /* it('Sign Out - top right', async()=>{
    //await page.click('.logo-table #btnLogout');
    await expect(page).toClick('.logo-table #btnLogout')    
});*/
 /*  test('Sign In - Appointments', async() => {
    await page.goto("https://clients-local.mbodev.me/classic/ws?studioid=-4802", {waitUntil: 'domcontentloaded'});
    //await page.reload();
    await page.waitForSelector('#tabTD9 > .tabItem > tbody > tr > .tab-c')
    await page.click('#tabTD9 > .tabItem > tbody > tr > .tab-c')

    await page.waitForSelector('tbody > tr:nth-child(2) > .actions > .btn-group > .add')
    await page.click('tbody > tr:nth-child(2) > .actions > .btn-group > .add')

    await page.waitForSelector('.actions > .open > .dropdown-menu > div:nth-child(2) > .bio')
    await page.click('.actions > .open > .dropdown-menu > div:nth-child(2) > .bio')

    await page.waitForSelector('#selectedAppointments > div > .stepButtons > li > .neutralBtn')
    await page.click('#selectedAppointments > div > .stepButtons > li > .neutralBtn')

    await consumerMode.consumerSignIn();
    await page.waitForSelector('#btnLogout');
    await expect(page).toMatchElement('h2', { text: 'Your appointments' })
  }); */
   /* test('Sign In - Classes tab', async () => {
    await page.goto("https://clients-local.mbodev.me/classic/ws?studioid=-4802", {waitUntil: 'domcontentloaded'});
    await page.waitForSelector('.tabItem #tabA7')
    await page.click('.tabItem #tabA7')
    await page.waitForSelector('.SignupButton');
    await page.click('.SignupButton');
    
    await consumerMode.consumerSignIn();
    await page.waitForSelector('#btnLogout');
    await expect(page).toMatchElement('h1', { text: 'Make a Reservation' })
  }); */
 /*  test('Sign In link inside Create Account Page', async() => {

  }); */
  /* test('Sign In - Hamburger Menu', async() => {
    //await page.setViewport({ width: 1920, height: 800 });
      await page.emulate(devices['iPhone X']);
      await page.goto('https://clients-local.mbodev.me/classic/ws?studioid=-753');
      await page.waitForSelector('.tabItem #tabA114');
      //you can also use page.tap(selector) on mobile screens
      await page.click('.tabItem #tabA114');
      await page.waitForSelector('.Enabled_SalonFiltersStyling > #pageWrapper > .mobile-navigation > .mobile-navigation-wrapper > h2');
      await page.click('.Enabled_SalonFiltersStyling > #pageWrapper > .mobile-navigation > .mobile-navigation-wrapper > h2')

      await page.waitForSelector('.mobile-navigation > .mobile-navigation-wrapper > .hidden > li > .mobile-login');
      await page.click('.mobile-navigation > .mobile-navigation-wrapper > .hidden > li > .mobile-login');
      await page.waitForSelector('.common_pageHeader_hGgxT_nlhc', {visible: true, timeout: 0});
      
      await page.type('#username','hetikprali+aj@gmail.com');
      await page.focus('#password');
      await page.type('#password','Test1234');
      await page.click('.Button_button_YWMBp1OK04');
      
      await page.waitForSelector('.Enabled_SalonFiltersStyling > #pageWrapper > .mobile-navigation > .mobile-navigation-wrapper > h2')
      await page.click('.Enabled_SalonFiltersStyling > #pageWrapper > .mobile-navigation > .mobile-navigation-wrapper > h2')
      await page.waitForSelector('.mobile-navigation > .mobile-navigation-wrapper > .hidden > li > .mobile-logout')
  });  */
 /*  describe('Create Account', () => {
    test('CA - Top Right', async() =>{

    });
    test('CA - My Info', async() => {

    });
    test('CA - Inside Sign In Page', async() => {

    });
    test('CA - No permission to create account', async() => {

    });
  }); */
});