const puppeteer = require('puppeteer');
const fs = require('fs'); 
const path = require('path'); 
const creds = require('./creds');

(async function(){
    try{
        const browser = await puppeteer.launch({
            headless:false,
            ignoreHTTPSErrors:true,
            defaultViewport: null
        });
                
        const EmailDestino= '';
        const Assunto = 'Insira o Assunto aqui';
        const texto = 'Esse email foi enviado através de um software automatizado'

        const page = await browser.newPage();
        
        //Entra no email 
        
        await page.goto('https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1602676591&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d69203533-487a-53a3-dc63-01afde43659e&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015');
        
        await page.click('#i0116');
        
        await page.keyboard.type(creds.username);
        
        await page.click('#idSIButton9')

        await new Promise(resolve => setTimeout(resolve, 5000));
        
        await page.keyboard.type(creds.password);
        
        
        await page.click('#idSIButton9')
        await new Promise(resolve => setTimeout(resolve, 3000));

        
        await page.click('#idBtn_Back')
        
        

        await new Promise(resolve => setTimeout(resolve, 5000));
        await page.goto('https://outlook.office365.com/mail/inbox')
        await new Promise(resolve => setTimeout(resolve, 5000));
        await page.keyboard.press('n')
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        await page.keyboard.type(EmailDestino);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await page.keyboard.press('Enter')
        
        for(i=0;i<4;i++){
            await page.keyboard.press('Tab')
        }
        await page.keyboard.type(Assunto);
        await page.keyboard.press('Enter');
        await page.keyboard.press('Tab');
        await page.keyboard.type(texto)
        for(i=0;i<2;i++){
            await page.keyboard.press('Tab')
        }
        await page.keyboard.press('Enter');
        await browser.close();
                  
        
    
    } catch (e){
        console.log('Deu ruim',e);
    }

})();