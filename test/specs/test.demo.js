import { browser, expect } from "@wdio/globals";

describe('Test Saucedemo', () => {
    it('Test 1 - Login Successfully ', async () => {
        await browser.url("https://www.saucedemo.com/")

        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')

        await usernameTextbox.addValue("standard_user")
        await passwordTextbox .addValue("secret_sauce")
        await loginButton.click()

        
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')  
        await expect(browser).toHaveTitle('Swag Labs')  
    });

    it('Test 2 - Add Item to Cart ', async () => {
        await browser.url("https://www.saucedemo.com/inventory.html")

        const addToCartButton = await browser.$('//button[@data-test="add-to-cart-sauce-labs-backpack"]')
        const shoppingCart = await browser.$('//a[@data-test="shopping-cart-link"]')

        await addToCartButton.click()
        await shoppingCart.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(browser).toHaveTitle('Swag Labs')
        await browser.pause(1000)
    
    });
});