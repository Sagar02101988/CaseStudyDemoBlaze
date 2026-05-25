import {test} from '@playwright/test'
import CartPage from '../pages/CartPage'
import {products} from '../utils/testData'
test.beforeEach('View and Delete product From Cart',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
})
test('View Cart and Delete Product',async({page})=>{
    const cartPage=new CartPage(page)
    await cartPage.ViewCartPage()
    await cartPage.verifyProductInCart(products[0].productName)
    await cartPage.deleteProduct(products[0].productName)
})