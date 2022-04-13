require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/WhGmEN1LTJj8o1guekahOhMna1L1J7OT',
      accounts: ['4ef6d4e29424f708d84dd517ef7d156f20b017f9fe216d237a82cb90f5135b9b'],
    },
  },
};