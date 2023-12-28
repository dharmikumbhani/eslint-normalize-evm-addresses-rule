# ESLint Rule to Normalize EVM Addresses
This ESLint Rule finds all evm addresses literals in your code and converts them to checksummed version.

### How to use it
1. Install the (plugin)[https://www.npmjs.com/package/eslint-normalize-evm-addresses] - `npm i --save-dev eslint-normalize-evm-addresses`
2. Create the ESLint config file - `eslint.config.js`
3. Import and add the custom plugin by adding the following lines of code in your file.
```
// eslint.config.js
"use strict";

// Import the plugin downloaded from npm
const eslintPluginNormalizeEVMAddresses = require("eslint-normalize-evm-addresses");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            ecmaVersion: "latest",
        },
        // Using the eslint-plugin-example plugin
        plugins: {"enforce-normalize-evm-addresses": eslintPluginNormalizeEVMAddresses},
        rules: {
            "enforce-normalize-evm-addresses/enforce-normalize-evm-addresses": "error",
        },
    }
]
```
4. Run the following command `npx eslint index.js --fix` to have the eslint rule do its work and convert all addresses to their checksummed version. I ran it on my index.js file, you could run in on any file you wish.

### Dependencies:
1. `ethereum-checksum-address`