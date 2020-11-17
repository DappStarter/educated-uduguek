require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remind prosper install desert flock stool'; 
let testAccounts = [
"0x0721f8ee4b26c8d4f84622278a07845667bdf00492923a541f4ad6fda7c85f09",
"0x812c694df0bcb55dd5980f3ccf7128e8c717477ed0c961827729956b8aa92f06",
"0xdaa341baf1fd3eedb63eb3a20d8498d9de0c3428d7d71ed88fcfe8f7f3d2a41e",
"0x1ab65d9a0371a8bd568ca77d1ddbb5e9a7f162b0c1903b94902e24598610ec26",
"0x71b0981ebf4bb3fa0e2b94dd4ae679b356cf6ac2d1d5f588a80089b12dcd1fc3",
"0x4e9b209f02cc38bbb46a32a46273fc5425e6658a1db4c8d5e1eee3f57ba21dfa",
"0xb9130aa78119c5c3c77906cf142751c8bcef364d9c25d967296d158418f18d40",
"0x3997fb81ce6f67a4212db0cdefa935bb74602522b8be1dbecab8f76288e418a1",
"0x3d997d237453fd50e12acde69797a48f532a4f41d724f68e24e86575de9a4da3",
"0xa98fa9ce46785b1971dee7531805b157dac7edbe0a64d750f4866597782cbabb"
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
            version: '^0.5.11'
        }
    }
};
