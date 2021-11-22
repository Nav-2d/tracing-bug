const { PDPPage } = require('./pageObject');

test('/route-test', async ({
  page,
}) => {
  const pdpPage = new PDPPage(page);
  await pdpPage.navigateAndVerifyStatusCode();
});
