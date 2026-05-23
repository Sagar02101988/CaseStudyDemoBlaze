import {Page,Locator,expect} from '@playwright/test'
export default class LoginPage{
    readonly page:Page
    readonly loginLink:Locator
    readonly usernameinput:Locator
    readonly passwordInput:Locator
    readonly loginButton:Locator
    //readonly welcomeUser:Locator

    constructor(page:Page){
        this.page=page
        this.loginLink=this.page.locator('#login2')
        this.usernameinput=this.page.locator('#loginusername')
        this.passwordInput=this.page.locator('#loginpassword')
        this.loginButton=this.page.getByRole('button',{name:'Log in'})
        //this.welcomeUser=this.page.getByRole('link',{name:'Welcome'})
        //this.welcomeUser=this.page.locator('#nameofuser')
    }
    async navigateToHomePage(){
        await this.page.goto('/')
    }
    async login(username:string,password:string){
        await this.loginLink.click()
        await this.usernameinput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
        
    }
    // async verifySuccessfulLogin(){
        
    //     await expect(this.welcomeUser).toBeVisible()
    //     await this.page.waitForTimeout(3000)
    // }
}
