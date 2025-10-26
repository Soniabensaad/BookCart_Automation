import { Locator, Page} from "playwright-core";

export default class BasePage {
    protected readonly page: Page;
    constructor (page: Page){
        this.page = page;
    }
    protected async clickElement(element:Locator){
        await element.click()
    }
    protected async enterText(element:Locator, text:string){
        await element.fill(text)
    }
}
