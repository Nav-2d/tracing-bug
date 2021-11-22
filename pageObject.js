const route = '/realestateandhomes-detail/2632-Laura-Vista-Dr-NW_Albany_OR_97321_M23270-90475';
class PDPPage {
  constructor(page) {
    this.page = page;
  }

  async navigateAndVerifyStatusCode() {
    const response = await this.page.goto(route, {
      waitUntil: 'load',
      timeout: 60 * 3000,
    });
    this.page.waitForResponse((response) => response.status() === 200);
  }
}

module.exports = { PDPPage, route };
