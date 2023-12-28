const {RuleTester} = require("eslint");
const normalizeEVMAddressesRule = require("./enforce-normalize-evm-addresses");

const ruleTester = new RuleTester({
    // Must use at least ecmaVersion 2015 because
    // that's when `const` variables were introduced.
    parserOptions: { ecmaVersion: 2015 }
});


// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
    "enforce-normalize-evm-addresses.js", // rule name
    normalizeEVMAddressesRule, // rule code
    { // checks
      // 'valid' checks cases that should pass
      valid: [{
        code: "const nonChecksummedAddress = 'bar';",
      }],
      // 'invalid' checks cases that should not pass
      invalid: [{
        code: "const notEvmAddress = 'bar';",
        output: "const notEvmAddress = 'bar';",
        errors: 1,
      }],
    }
);
console.log("All tests passed!");