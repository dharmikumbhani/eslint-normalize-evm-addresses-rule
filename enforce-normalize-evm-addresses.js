const { toChecksumAddress } = require('ethereum-checksum-address')
module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Enforce that all evm addresses declared in the code are normalised to their checksummed versions",
        },
        fixable: "code",
        schema: []
    },
    create(context) {
        return {
            Literal(node) {
                const ethValidAddressRegex = /^0x[a-f0-9]{40}$/gm;
                if (node.value && ethValidAddressRegex.test(node.value)) {
                    context.report({
                        node,
                        message: "Found EVM Address",
                        data: {
                            notChecksummedEVMAddress: node.value
                        },
                        fix(fixer) {
                            // function stripHexPrefixAddress(value) {
                            //     return String(value).slice(0, 2) === "0x" ? value.slice(2) : value;
                            // }
                            const checkSummedAddress = toChecksumAddress(node.value);
                            return fixer.replaceText(node, `\'${checkSummedAddress}\'`);
                        }
                    });
                }
            }
        };
    }
};