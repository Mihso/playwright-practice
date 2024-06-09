const { chromium } = require("playwright");

async function getWebsite() {

  const prompt = require('prompt-sync')({'fake_val':' '});
  
  let site = prompt('Enter a website (full url): ');
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto(`${site}`);
  await page.evaluate(([]) => {

}, []);

}

(async () => {
  await getWebsite();
})();
