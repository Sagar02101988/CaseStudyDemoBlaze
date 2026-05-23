import {Page, Locator} from '@playwright/test'

export default class productListPage{
    readonly page:Page
    //readonly item1:Locator
    //readonly item2:Locator
    readonly addToBtn:Locator
    readonly backToProd:Locator
    //readonly removeItem1:Locator
    //readonly CartLink:Locator

    constructor(page:Page)
    {
        this.page=page
        // this.item1=this.page.getByAltText('Sauce Labs Backpack')
        // this.item2=this.page.getByAltText('Sauce Labs Bolt T-shirt')
        //this.addToBtn=this.page.getByRole('button',{name: ' Add To cart'})
        this.addToBtn=this.page.getByRole('link',{name: ' Add To cart'})
        //this.backToProd=this.page.getByRole('button',{name : 'Back to products'})
        this.backToProd=this.page.getByRole('link',{name : 'Home'})
        //this.removeItem1=this.page.locator('[data-test="remove"]')
        //this.CartLink=this.page.locator('[data-test="shopping-cart-link"]')

    }

    // async addItemsToCart(){
    //     await this.item1.click()
    //     await this.addToBtn.click()
    //     await this.backToProd.click()
    //     await this.item2.click()
    //     await this.addToBtn.click()
    //     await this.backToProd.click()
    // }

    async addItemToCart(itemname:string)
    {
        //const item=this.page.getByAltText(`${itemname}`)
        const item=this.page.getByRole('link', { name: `${itemname}` })
        //await this.page.waitForTimeout(3000)
        await this.addToBtn.click()
        await this.backToProd.click()
    }

    
}