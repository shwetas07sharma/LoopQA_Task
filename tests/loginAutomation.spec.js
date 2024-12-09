const {test, expect} = require('@playwright/test');
import { Weblocators } from '../locators/locatorsFile.json'


//First Test Case
test.beforeEach('Login', async({page}) => {
    //Go to URL
    await page.goto(process.env.URL);
    await page.locator(Weblocators.loginPage.userName).fill(process.env.Email);
    await page.locator(Weblocators.loginPage.password).fill(process.env.Password);
    await page.getByText(Weblocators.loginPage.SignIn).click();

})

test('Validate Implement user authentication in To Do Column', async({page}) => {
    //validate navigation to Web Application
    await expect(page.locator(Weblocators.WebApplicationPage.WebApplicationHeading)).toBeVisible;
    //Fetch all items in to do column
    for(const row of await page.locator(Weblocators.WebApplicationPage.ToDoItems).all()){
        console.log("Items in To do column:")
        console.log(await row.textContent());
    }

    //Validate presence of Implement user authentication in To Do Column
    await expect(page.locator(Weblocators.WebApplicationPage.ToDoItems).filter({hasText:'Implement user authentication'})).toBeVisible();
    //Validate feature tag as high priority
    //console.log(await page.locator(Weblocators.WebApplicationPage.Featuretag_ImplementUserAuthentication).textContent());
    expect(await page.locator(Weblocators.WebApplicationPage.Featuretag_ImplementUserAuthentication).textContent()).toBe("High Priority");
})

test('Validate Fix navigation bug', async({page}) => {
    //validate navigation to Web Application
    await expect(page.locator(Weblocators.WebApplicationPage.WebApplicationHeading)).toBeVisible;
    //Fetch all items in to do column
    for(const row of await page.locator(Weblocators.WebApplicationPage.ToDoItems).all()){
        console.log("Items in To do column:")
        console.log(await row.textContent());
    }

    //Validate presence of Fix navigation bug in To Do Column
    await expect(page.locator(Weblocators.WebApplicationPage.ToDoItems).filter({hasText:'Fix navigation bug'})).toBeVisible();
    //Validate Bug tag
    console.log(await page.locator(Weblocators.WebApplicationPage.Featuretag_ImplementUserAuthentication).textContent());
    expect(await page.locator(Weblocators.WebApplicationPage.Bugtag_FixNavigationBug).textContent()).toBe("Bug");

})

test('Validate Design System Updates', async({page}) => {
    //validate navigation to Web Application
    await expect(page.locator(Weblocators.WebApplicationPage.WebApplicationHeading)).toBeVisible;
    //Fetch all items in InProgress column
    for(const row of await page.locator(Weblocators.WebApplicationPage.InProgressItems).all()){
        console.log("Items in InProgress column:")
        console.log(await row.textContent());
    }

    //Validate presence of Fix navigation bug in To Do Column
    await expect(page.locator(Weblocators.WebApplicationPage.InProgressItems).filter({hasText:'Design system updates'})).toBeVisible();
    //Validate Design tag
    expect(await page.locator(Weblocators.WebApplicationPage.Designtag_DesignSystemUpdates).textContent()).toBe("Design");

})

test('Validate push notification system', async({page}) => {
    //navigate to mobile application
    await page.getByText(Weblocators.WebApplicationPage.link_mobileApplication).click();
    //validate navigation to Web Application
    await expect(page.locator(Weblocators.MobileApplicationPage.MobileApplicationHeading)).toBeVisible;
    //Fetch all items in InProgress column
    for(const row of await page.locator(Weblocators.MobileApplicationPage.ToDoItems).all()){
        console.log("Items in InProgress column:")
        console.log(await row.textContent());
    }

    //Validate presence of Fix navigation bug in To Do Column
    await expect(page.locator(Weblocators.MobileApplicationPage.ToDoItems).filter({hasText:'Push notification system'})).toBeVisible();
    //Validate Design tag
    expect(await page.locator(Weblocators.MobileApplicationPage.Featuretag_PushNotificationSystem).textContent()).toBe("Feature");

})

test('Offline mode', async({page}) => {
    //navigate to mobile application
    await page.getByText(Weblocators.WebApplicationPage.link_mobileApplication).click();
    //validate navigation to Web Application
    await expect(page.locator(Weblocators.MobileApplicationPage.MobileApplicationHeading)).toBeVisible;
    //Fetch all items in InProgress column
    for(const row of await page.locator(Weblocators.MobileApplicationPage.InProgressItems).all()){
        console.log("Items in InProgress column:")
        console.log(await row.textContent());
    }

    //Validate presence of Fix navigation bug in To Do Column
    await expect(page.locator(Weblocators.MobileApplicationPage.InProgressItems).filter({hasText:'Offline mode'})).toBeVisible();
    //Validate Design tag
    expect(await page.locator(Weblocators.MobileApplicationPage.Featuretag_OfflineMode).textContent()).toBe("High Priority");

})

test('App icon design', async({page}) => {
    //navigate to mobile application
    await page.getByText(Weblocators.WebApplicationPage.link_mobileApplication).click();
    //validate navigation to Web Application
    await expect(page.locator(Weblocators.MobileApplicationPage.MobileApplicationHeading)).toBeVisible;
    //Fetch all items in InProgress column
    for(const row of await page.locator(Weblocators.MobileApplicationPage.Done).all()){
        console.log("Items in Done column:")
        console.log(await row.textContent());
    }

    //Validate presence of Fix navigation bug in To Do Column
    await expect(page.locator(Weblocators.MobileApplicationPage.InProgressItems).filter({hasText:'App icon design'})).toBeVisible();
    //Validate Design tag
    expect(await page.locator(Weblocators.MobileApplicationPage.DesignTag_AppIconDesign).textContent()).toBe("Design");

})


