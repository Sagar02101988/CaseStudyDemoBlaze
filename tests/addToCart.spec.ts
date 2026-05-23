import {test} from '@playwright/test'
import LoginPage from '../pages/LoginPage'
import productListPage from '../pages/HomePage'
import{users,products} from '../utils/testData'

test('Add 3 products to cart',async({page})=>{
    const loginPage=new LoginPage(page)
    const homePage=new productListPage(page)
    await loginPage.navigateToHomePage()
    await loginPage.login(users.validUser.username,users.validUser.password)
    //await loginPage.verifySuccessfulLogin()
    for(const item of products){
        await homePage.addItemToCart(item.productName)
    }
})