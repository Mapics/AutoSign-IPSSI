const puppeteer = require('puppeteer');
require('dotenv').config();

(async () => {
    // lance une nouvelle page
    const browser = await puppeteer.launch({ headless : "new" });
    const page = await browser.newPage();
    
    await page.goto('https://ecole-ipssi.ymag.cloud/index.php/login/2/');

    await page.setViewport({width: 1024, height: 720});

    // rempli le formulaire
    await page.type('#login', process.env.EMAIL);
    await page.type('#password', process.env.PASSWORD);
    await page.click('#btnSeConnecter');
    
    console.log('Connecter vie le compte');

    // attendre 5 secondes
    await new Promise(resolve => setTimeout(resolve, 3000));


    // click sur le bouton pour aller singer
    await page.waitForSelector('div.modal-footer > span.btn.btn-primary.btn-submit.js-btn-signer');

    await page.click('div.modal-footer > span.btn.btn-primary.btn-submit.js-btn-signer');

    await new Promise(resolve => setTimeout(resolve, 3000));

    // click bouton confirmer signature
    await page.waitForSelector('div.modal-footer > span.btn.btn-primary.btn-submit.js-enregistrer-signature')
    // await page.waitForSelector('div.modal-footer > span.btn.btn-primary.btn-submit.js-enregistrer-signature')
    await page.click('div.modal-footer > span.btn.btn-primary.btn-submit.js-enregistrer-signature');
    console.log('Signature validé !');
    await new Promise(resolve => setTimeout(resolve, 2000));
    // prendre un screen
    await page.screenshot({path: 'example.png'});
    await browser.close();
})();