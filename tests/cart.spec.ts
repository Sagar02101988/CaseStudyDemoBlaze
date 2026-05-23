import {test} from '@playwright/test'
import LoginPage from '../pages/LoginPage'
import CartPage from '../pages/CartPage'
import {users,products} from '../utils/testData'

test('View Cart and Delete Product',async({page})=>{
    const loginPage=new LoginPage(page)
    const cartPage=new CartPage(page)
    await loginPage.navigateToHomePage()
    await loginPage.login(users.validUser.username,users.validUser.password)
    //await loginPage.verifySuccessfulLogin()
    await cartPage.ViewCartPage()
    await cartPage.verifyProductInCart(products[0].productName)
    await cartPage.deleteProduct(products[0].productName)
})