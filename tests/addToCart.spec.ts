import {test} from '@playwright/test'
import productListPage from '../pages/HomePage'
import{products} from '../utils/testData'

test.beforeEach('Item Search',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
})
test.only('Add 3 products to cart',async({page})=>{
    const homePage=new productListPage(page)
    for(const item of products){
        await homePage.addItemToCart(item.productName)
    }
})