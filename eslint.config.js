// eslint.config.js
"use strict";

// Import the ESLint plugin locally
const eslintPluginNormalizeEVMAddresses = require("./eslint-plugin-normalize-evm-addresses");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            ecmaVersion: "latest",
        },
        // Using the eslint-plugin-example plugin defined locally
        plugins: {"enforce-normalize-evm-addresses": eslintPluginNormalizeEVMAddresses},
        rules: {
            "enforce-normalize-evm-addresses/enforce-normalize-evm-addresses": "error",
        },
    }
]