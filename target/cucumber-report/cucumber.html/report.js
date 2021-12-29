$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/mobilephone.feature");
formatter.feature({
  "line": 1,
  "name": "Mobile Test",
  "description": "",
  "id": "mobile-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19618347500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LaptopSteps.userIsOnTheAmazonHomepage()"
});
formatter.result({
  "duration": 1032193700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should be able to purchase mobile phone successfully",
  "description": "",
  "id": "mobile-test;user-should-be-able-to-purchase-mobile-phone-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Sanity"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User search for \"Mobile Phone\" laptop in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "finds the selection from the pages \"Nokia XR20 5G | Android 11 | Unlocked Smartphone | Dual SIM | US Version | 6/128GB | 6.67-Inch Screen | 48MP Dual Camera | Polar Night\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "selects the quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verifies the add to cart message \"Added to Cart\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Phone",
      "offset": 17
    }
  ],
  "location": "LaptopSteps.userSearchForLaptopInTheSearchBar(String)"
});
formatter.result({
  "duration": 1272894600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clicksOnTheSearchButton()"
});
formatter.result({
  "duration": 4653764000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia XR20 5G | Android 11 | Unlocked Smartphone | Dual SIM | US Version | 6/128GB | 6.67-Inch Screen | 48MP Dual Camera | Polar Night",
      "offset": 36
    }
  ],
  "location": "LaptopSteps.findsTheSelectionFromThePages(String)"
});
formatter.result({
  "duration": 55855228500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "LaptopSteps.selectsTheQuantity(String)"
});
formatter.result({
  "duration": 4149033000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clicksOnAddToCartButton()"
});
formatter.result({
  "duration": 2795970000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to Cart",
      "offset": 34
    }
  ],
  "location": "LaptopSteps.verifiesTheAddToCartMessage(String)"
});
formatter.result({
  "duration": 5775682300,
  "status": "passed"
});
formatter.after({
  "duration": 1523162000,
  "status": "passed"
});
});