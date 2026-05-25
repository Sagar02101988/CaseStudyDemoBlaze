import {test as setup, expect} from '@playwright/test'
import { STORAGE_STATE} from '../playwright.config'
import {users} from '../utils/testData'

setup('DemoBlaze Login Test',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill(users.validUser.username)
    await page.locator('#loginpassword').fill(users.validUser.password)
    await page.getByRole('button',{name:'Log in'}).click()
    await expect(page.locator('#nameofuser')).toContainText('Welcome')
    await page.context().storageState({path:STORAGE_STATE})
    
})