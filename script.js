const { Builder, By, Key, until } = require("selenium-webdriver");

async function main() {
  // Set up Edge WebDriver
  const driver = await new Builder().forBrowser("MicrosoftEdge").build();

  // Array of search queries (replace with your actual queries)
  const searchQueries = ["query1", "query2", "query3", ..."query30"];

  try {
    for (const query of searchQueries) {
      // Navigate to Edge search bar
      const searchBar = await driver.findElement(By.id("search-box"));
      await searchBar.sendKeys(query);

      // Submit the search
      await searchBar.sendKeys(Key.ENTER);

      // Wait for search results to load
      await driver.wait(until.elementLocated(By.id("b_results")), 10000); // Adjust timeout as needed
    }
  } catch (error) {
    console.error("Error during search:", error);
  } finally {
    // Close the WebDriver
    await driver.quit();
  }
}

main();
