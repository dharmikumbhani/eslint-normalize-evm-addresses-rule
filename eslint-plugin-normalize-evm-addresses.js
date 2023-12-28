const normalizeEVMAddressesRule = require("./enforce-normalize-evm-addresses");
const plugin = { rules: { "enforce-normalize-evm-addresses": normalizeEVMAddressesRule } };
module.exports = plugin;