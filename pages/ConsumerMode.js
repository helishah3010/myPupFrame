export default class ConsumerMode {
    
    async consumerSignIn() {
        await page.waitForSelector('.common_pageHeader_hGgxT_nlhc', {visible: true, timeout: 0});
        await page.type('#username','hellytest10+scooby@gmail.com');
        await page.focus('#password');
        await page.type('#password','Test1234');
        await page.click('.Button_button_YWMBp1OK04');
    }
    async facebookSignIn() {

    }
    async googleSignIn() {

    }
    
}