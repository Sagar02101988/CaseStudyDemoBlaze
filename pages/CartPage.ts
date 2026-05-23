import{Page,Locator,expect} from '@playwright/test'
export default class CartPage{
    readonly page:Page
    readonly CartLink:Locator
    readonly deleteProductFromCart:Locator
    constructor(page:Page){
        this.page=page
        this.CartLink=this.page.getByRole('link', { name: 'Cart' })
        this.deleteProductFromCart=this.page.getByRole('link', { name: 'Delete' }).first()
    }
    async ViewCartPage(){
        await this.CartLink.click()
    }
    async verifyProductInCart(productName:string){
        await expect(this.page.locator('#tbodyid')).toContainText(productName)
    }
    async deleteProduct(productName:string){
        const productRow=this.page.locator('#tbodyid tr',{hasText:productName})
        //await productRow.locator('text=Delete').click()
        await productRow.locator('deleteProductFromCart').click()
        await this.page.waitForTimeout(3000)
    }
}