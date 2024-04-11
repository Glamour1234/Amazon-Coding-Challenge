import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import homePage from './homePage'
import stepDefinition from './homePage'



Given('User navigates to Amazon website', ()=> {
   homePage.loadHomePage()
    })

When('User clicks on the hamburger menu', ()=> {
        homePage.clickOnHamburgerIcon()  
    }) 

Then('User should see various categories of products available on the website', () => {
        homePage.getProductCategories()
        })

When('User clicks on Computers', ()=> {
        homePage.clickOnComputers()     
        }) 

Then('User sees the different categories of computer items available on the website', () => {
        homePage.getComputerProductList
        })

When('User clicks on Tablet Accessories', ()=> {
        homePage.clickOnTabletAccessories()     
        }) 
Then('User sees different Tablet Accessories listed as one of the items in the computer category', () => {
        homePage.getTabletAccessories()
        })

When('User filters for JETech Tablet Accessory by clicking on the JETEch checkbox', ()=> {
        homePage.selectJETech()     
         })  
                        
When('User clicks on "sort by" link on the top right of the page', ()=> {
        homePage.clickOnSortByLink()     
        })  
        
When('User filters with newest arrival', ()=> {
         homePage.selectNewestArrivals()     
        })    
        
Then('User sees Tablet Accessories returned based on filter applied', ()=> {
        homePage.getJETechNewestArrivals()     
        })
        
Then('User selects lowest priced item', ()=> {
         homePage.getLowestItem()     
         }) 

Then('User should see "About this item"', ()=> {
        homePage.getItemInfo()     
        }) 


         
            