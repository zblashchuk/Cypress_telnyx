const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    "watchForFileChanges":true,
    viewportWidth: 1920,
    defaultCommandTimeout: 20000,
    viewportHeight: 1080,
    baseUrl: 'https://telnyx.com',
    projectId: "rx2i2c"
  },
});
