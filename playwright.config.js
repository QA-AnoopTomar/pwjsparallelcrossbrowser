const { defineConfig } = require('@playwright/test');
 
module.exports = defineConfig({

testDir: './tests',

retries: 1,

timeout: 30000,

workers: 3, // Parallel execution (default is # of cores)

reporter: [['html', { open: 'never' }]],

use: {

baseURL: 'http://localhost:5500',

headless: true,

},

projects: [

{

name: 'Chromium',

use: { browserName: 'chromium' },

},

{

name: 'Firefox',

use: { browserName: 'firefox' },

},

{

name: 'WebKit',

use: { browserName: 'webkit' },

},

],
});