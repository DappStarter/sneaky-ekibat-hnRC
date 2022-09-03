require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name razor pumpkin clump gesture pave army gas'; 
let testAccounts = [
"0xcf7b89d72ef5e11285ec42d63355c3c22313fc7844ff1e777532ad5308ede50b",
"0x2e4225f36a26b0d2ed892f9ad8828801860eb55786ff41a516ce66449783941c",
"0x5c36e5cae9a6a5edbb98f62dfd3c325269fede338a77d0deee86f0bc449cf33f",
"0x86774c0f972d4eb2d25a788c64ac7a70eaa009bbed77f7a92a188bdbb951ecd6",
"0x237d661039b91d3600db7400ae71816a1d45a29d21dca3e56806aa96cb953464",
"0x480442c5c4b7a6a2b0e9d2ca1a00d3d2fba833923c1e9f87edb323051a6fb7aa",
"0xd230d00c0be9d9f54deb0187a0a594fc950030e0342afea9fed0b81b7a3007fa",
"0x4993b749c2d620bf974722d3e11514964cdda224a654bd9caa5284fc116a561b",
"0x8b3f7f375ed3f632ae606adc07a4dbdf816f2712468ceac1794227b64f67da70",
"0x71eb3c4fa5286929094dffd6c41f3192050eb9279a2d6653e11c0f71998d6226"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

