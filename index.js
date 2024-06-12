const { chromium } = require("playwright");

async function getWebsite() {

  const prompt = require('prompt-sync')({'fake_val':' '});
  
  let site = prompt('Enter a website (full url): ');
  let highlight = prompt('Do you want to hightlight links? Yes or No: ');
  highlight.toLowerCase();
  while(highlight != 'yes' && highlight != 'no'){
    console.log(highlight);
    console.log('Please answer with yes or no.');
    highlight = prompt('Do you want to highlight links? Yes or No: ');
  }
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto(`${site}`);
  await page.evaluate(([data]) => {
    if(data == 'yes'){
      const lister = Array.from(document.getElementsByTagName('body'));
      lister.map((unit) => {
        console.log("Changer!");
        unit.style.color = 'red';}
      );
    }
}, [highlight]);

}

(async () => {
  await getWebsite();
})();
