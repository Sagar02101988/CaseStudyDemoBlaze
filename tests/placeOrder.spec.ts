import {test} from '@playwright/test'
import LoginPage from '../pages/LoginPage'
import CartPage from '../pages/CartPage'
import PlaceOrderPage from '../pages/PlaceOrderPage'
import {users} from '../utils/testData'

test('Place Order',async({page})=>{
    const loginPage=new LoginPage(page)
    const cartPage=new CartPage(page)
    const placeOrderPage=new PlaceOrderPage(page)
    await loginPage.navigateToHomePage()
    await loginPage.login(users.validUser.username,users.validUser.password)
    //await loginPage.verifySuccessfulLogin()
    await cartPage.ViewCartPage()
    await placeOrderPage.placeOrder()
    await placeOrderPage.verifyOrderPlaced()
})