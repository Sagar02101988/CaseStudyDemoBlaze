import {test} from '@playwright/test'
import CartPage from '../pages/CartPage'
import PlaceOrderPage from '../pages/PlaceOrderPage'

test.beforeEach('PlaceOrder',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
})
test('Place Order',async({page})=>{
    const cartPage=new CartPage(page)
    const placeOrderPage=new PlaceOrderPage(page)
    await cartPage.ViewCartPage()
    await placeOrderPage.placeOrder()
    await placeOrderPage.verifyOrderPlaced()
})