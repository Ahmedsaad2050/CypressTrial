const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'Ahmed',
  e2e: {
    setupNodeEvents(on, config) {
        baseUrl: 'http://localhost:1234'

      // implement node event listeners here
    },
  },
});
