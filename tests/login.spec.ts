import { test } from '@playwright/test'
import LoginPage from  '../pages/LoginPage'
import {users} from '../utils/testData'

test('Valid login',async({page})=>{
    const loginPage=new LoginPage(page)
    await loginPage.navigateToHomePage()
    await loginPage.login(users.validUser.username,users.validUser.password)
    //await loginPage.verifySuccessfulLogin()
})
