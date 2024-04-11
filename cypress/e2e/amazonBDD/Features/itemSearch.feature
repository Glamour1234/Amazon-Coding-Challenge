Feature: Select an item on Amazon

   Background: 
   Given User navigates to Amazon website

    
    Scenario: Search for JETech Tablet Accessory
    When User clicks on the hamburger menu
    Then User should see various categories of products available on the website
    When User clicks on Computers
    Then User sees the different categories of computer items available on the website

    
    When User clicks on Tablet Accessories
    Then User sees different Tablet Accessories listed as one of the items in the computer category

    When User filters for JETech Tablet Accessory by clicking on the JETEch checkbox
    When User clicks on "sort by" link on the top right of the page
    When User filters with newest arrival
    Then User sees Tablet Accessories returned based on filter applied

    Then User selects lowest priced item
    Then User should see "About this item"

  

