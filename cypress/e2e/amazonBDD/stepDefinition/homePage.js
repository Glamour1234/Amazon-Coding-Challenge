
class homePage {


    static loadHomePage(){
        cy.visit("https://www.amazon.com/").wait(5000)
        cy.url().should("include","amazon")
    }

    static clickOnHamburgerIcon(){
        cy.get(".hm-icon-label").invoke("show").click({force:true}).wait(4000)
    }

    static getProductCategories(){
        cy.get(".hmenu-visible > :nth-child(1) > .hmenu-item").should("be.visible")
    }

    static clickOnComputers(){
         cy.get(".hmenu-visible > :nth-child(8) > .hmenu-item > div").click()
    }

    static getComputerProductList(){
        cy.get(":nth-child(34) > :nth-child(2) > .hmenu-item").contains("Computers")
    }

    static clickOnTabletAccessories(){
        cy.contains("Tablet Accessories").scrollIntoView().click({force: true})   
    }

    static getTabletAccessories(){
        cy.get(".s-no-outline > .a-size-medium-plus").contains("Results").wait(5000)
     }

    static selectJETech(){
        cy.contains("JETech").click({force: true})
        
     }

    static clickOnSortByLink(){
        cy.get("#a-autoid-0-announce").click()  
     }

    static selectNewestArrivals(){
        cy.contains("Newest Arrivals").click({force: true})
     }

    static getJETechNewestArrivals(){
        cy.get(".s-no-outline > .a-size-medium-plus").contains("Results")
     }

    static getLowestItem(){
        cy.xpath("/html/body/div[1]/div[1]/div[1]/div[1]/div/span[1]/div[1]/div[2]/div/div/span/div/div/div[2]/div[1]/h2/a/span").click()
     }

     static getItemInfo(){
        cy.contains("About this item").should("be.visible")
        console.log(this.getItemInfo)
     }

}

export default homePage