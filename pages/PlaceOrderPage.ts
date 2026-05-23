import {Page,Locator,expect} from '@playwright/test'
export default class PlaceOrderPage{
    readonly page:Page
    readonly PlaceOrder:Locator
    readonly Name:Locator
    readonly Country:Locator
    readonly City:Locator
    readonly CardNumber:Locator
    readonly Month:Locator
    readonly Year:Locator
    readonly PurchaseOrder:Locator

    constructor(page:Page){
        this.page=page
        this.PlaceOrder=this.page.getByRole('button', { name: 'Place Order' })
        this.Name=this.page.locator('#name')
        this.Country=this.page.locator('#country')
        this.City=this.page.locator('#city')
        this.CardNumber=this.page.locator('#card')
        this.Month=this.page.locator('#month')
        this.Year=this.page.locator('#year')
        this.PurchaseOrder=this.page.getByRole('button',{name:'Purchase'})
    }

    async placeOrder(){
        await this.PlaceOrder.click()
        await this.Name.fill('Sagar')
        await this.Country.fill('India')
        await this.City.fill('Pune')
        await this.CardNumber.fill('123456789')
        await this.Month.fill('May')
        await this.Year.fill('2026')
        await this.PurchaseOrder.click()
        await this.page.waitForTimeout(3000)
    }

    async verifyOrderPlaced(){
        await expect(this.page.locator('.sweet-alert')).toContainText('Thank you for your purchase')
    }
}