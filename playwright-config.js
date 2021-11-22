
module.exports = {
  timeout: 28000,
  workers: 2,
  use: {
    baseURL: 'https://rdc-x-web-pr-122.x.realtor.com',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  reporter: [
    ['list'],
    ['html'],
  ],
  projects: [
    {
      name: 'Desktop Chrome',
      use: { browserName: 'chromium' },
    },
  ],
};
