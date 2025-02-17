// This is Placeholder list of tokens.
// It needs to be replaced by getting fund specific tokens
// from the fund contract.

import { BigNumber, constants } from "ethers";

export type Address = `0x${string}`;

export interface Token {
  chainId: number;
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  logoURI?: string;
  tags?: string[];
}

export const ETH_ADDRESS: Address =
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
export const USD_ADDRESS: Address = constants.AddressZero;

export enum TOKEN_TYPE {
  NATIVE = 0,
  ERC721 = 1,
  ERC20 = 2,
}

export interface ContractToken {
  t: TOKEN_TYPE;
  addr: Address;
  id: BigNumber;
}

export const ETH_TOKEN: ContractToken = {
  t: TOKEN_TYPE.NATIVE,
  addr: ETH_ADDRESS,
  id: BigNumber.from(0),
};

const tokenList: {
  name: string;
  logoURI: string;
  keywords: string[];
  tags: {
    [type: string]: {
      name: string;
      description: string;
    };
  };
  timestamp: string;
  version: {
    major: number;
    minor: number;
    patch: number;
  };
  tokens: Token[];
} = {
  name: "Barren Wuffet Default Token List",
  logoURI: "ipfs://QmWzL3TSmkMhbqGBEwyeFyWVvLmEo3F44HBMFnmTUiTfp1",
  keywords: ["audited", "verified", "lending", "aave"],
  tags: {
    stablecoin: {
      name: "Stablecoin",
      description: "Tokens that are fixed to an external asset",
    },
    atokenv1: {
      name: "aToken V1",
      description: "Tokens that earn interest on the Aave Protocol V1",
    },
    atokenv2: {
      name: "aToken V2",
      description: "Tokens that earn interest on the Aave Protocol V2",
    },
    stktoken: {
      name: "Staked Token",
      description:
        "Tokens that earn interest as they are staked in the Aave Safety Module",
    },
    unilpv1: {
      name: "Uniswap v1 LP token",
      description: "Tokens that represents an LPs stake in a Uniswap pool",
    },
  },
  tokens: [
    {
      chainId: 421613,
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
      address: "0x0000000000000000000000000000000000000000",
      logoURI: "https://wallet-asset.matic.network/img/tokens/eth.svg",
    },
    {
      chainId: 421613,
      name: "USD Coin",
      symbol: "USDC",
      decimals: 6,
      address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
      logoURI: "https://wallet-asset.matic.network/img/tokens/usdc.svg",
    },
    {
      chainId: 421613,
      name: "Tether",
      symbol: "USDT",
      decimals: 6,
      address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
      logoURI: "https://wallet-asset.matic.network/img/tokens/usdt.svg",
    },
    {
      chainId: 421613,
      name: "Dai",
      symbol: "DAI",
      decimals: 18,
      address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
      logoURI: "https://wallet-asset.matic.network/img/tokens/dai.svg",
    },
    {
      chainId: 421613,
      name: "The Graph",
      symbol: "GRT",
      decimals: 18,
      address: "0x23a941036ae778ac51ab04cea08ed6e2fe103614",
      logoURI: "https://wallet-asset.matic.network/img/tokens/grt.svg",
    },
    {
      chainId: 421613,
      name: "Wrapped Bitcoin",
      symbol: "WBTC",
      decimals: 8,
      address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
      logoURI: "https://wallet-asset.matic.network/img/tokens/wbtc.svg",
    },
    {
      name: "Dai Stablecoin",
      decimals: 18,
      symbol: "DAI",
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      chainId: 1,
      tags: ["stablecoin"],
    },
    {
      name: "TrueUSD",
      decimals: 18,
      symbol: "TUSD",
      address: "0x0000000000085d4780B73119b644AE5ecd22b376",
      chainId: 1,
      tags: ["stablecoin"],
    },
    {
      name: "USD Coin",
      decimals: 6,
      symbol: "USDC",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      chainId: 1,
      tags: ["stablecoin"],
    },
    {
      name: "Tether USD",
      decimals: 6,
      symbol: "USDT",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      chainId: 1,
      tags: ["stablecoin"],
    },
    {
      name: "Synth sUSD",
      decimals: 18,
      symbol: "sUSD",
      address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
      chainId: 1,
      tags: ["stablecoin"],
    },
    {
      name: "Lend",
      decimals: 18,
      symbol: "LEND",
      address: "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
      chainId: 1,
    },
    {
      name: "Basic Attention Token",
      decimals: 18,
      symbol: "BAT",
      address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
      chainId: 1,
    },
    {
      name: "ChainLink Token",
      decimals: 18,
      symbol: "LINK",
      address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
      chainId: 1,
    },
    {
      name: "Kyber Network Crystal",
      decimals: 18,
      symbol: "KNC",
      address: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
      chainId: 1,
    },
    {
      name: "Reputation",
      decimals: 18,
      symbol: "REP",
      address: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
      chainId: 1,
    },
    {
      name: "MakerDAO",
      decimals: 18,
      symbol: "MKR",
      address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
      chainId: 1,
    },
    {
      name: "Decentraland MANA",
      decimals: 18,
      symbol: "MANA",
      address: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
      chainId: 1,
    },
    {
      name: "0x Protocol Token",
      decimals: 18,
      symbol: "ZRX",
      address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
      chainId: 1,
    },
    {
      name: "Synthetix Network Token",
      decimals: 18,
      symbol: "SNX",
      address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
      chainId: 1,
    },
    {
      name: "Wrapped BTC",
      decimals: 8,
      symbol: "WBTC",
      address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      chainId: 1,
    },
    {
      name: "Binance USD",
      decimals: 18,
      symbol: "BUSD",
      address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
      chainId: 1,
      tags: ["stablecoin"],
    },
    {
      name: "Enjin Coin",
      decimals: 18,
      symbol: "ENJ",
      address: "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
      chainId: 1,
    },
    {
      name: "Republic Token",
      decimals: 18,
      symbol: "REN",
      address: "0x408e41876cCCDC0F92210600ef50372656052a38",
      chainId: 1,
    },
    {
      name: "yearn.finance",
      decimals: 18,
      symbol: "YFI",
      address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
      chainId: 1,
    },
    {
      name: "Aave Token",
      decimals: 18,
      symbol: "AAVE",
      address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
      chainId: 1,
      logoURI: "ipfs://QmWzL3TSmkMhbqGBEwyeFyWVvLmEo3F44HBMFnmTUiTfp1",
    },
    {
      name: "Uniswap",
      decimals: 18,
      symbol: "UNI",
      address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
      chainId: 1,
    },
    {
      name: "Aave Interest bearing DAI",
      decimals: 18,
      symbol: "aDAI",
      address: "0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d",
      chainId: 1,
      logoURI: "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aDAI.svg",
      tags: ["atokenv1", "stablecoin"],
    },
    {
      name: "Aave Interest bearing TUSD",
      decimals: 18,
      symbol: "aTUSD",
      address: "0x4DA9b813057D04BAef4e5800E36083717b4a0341",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aTUSD.svg",
      tags: ["atokenv1", "stablecoin"],
    },
    {
      name: "Aave Interest bearing USDC",
      decimals: 6,
      symbol: "aUSDC",
      address: "0x9bA00D6856a4eDF4665BcA2C2309936572473B7E",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aUSDC.svg",
      tags: ["atokenv1", "stablecoin"],
    },
    {
      name: "Aave Interest bearing USDT",
      decimals: 6,
      symbol: "aUSDT",
      address: "0x71fc860F7D3A592A4a98740e39dB31d25db65ae8",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aUSDT.svg",
      tags: ["atokenv1", "stablecoin"],
    },
    {
      name: "Aave Interest bearing SUSD",
      decimals: 18,
      symbol: "aSUSD",
      address: "0x625aE63000f46200499120B906716420bd059240",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aSUSD.svg",
      tags: ["atokenv1", "stablecoin"],
    },
    {
      name: "Aave Interest bearing LEND",
      decimals: 18,
      symbol: "aLEND",
      address: "0x7D2D3688Df45Ce7C552E19c27e007673da9204B8",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aLEND.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing BAT",
      decimals: 18,
      symbol: "aBAT",
      address: "0xE1BA0FB44CCb0D11b80F92f4f8Ed94CA3fF51D00",
      chainId: 1,
      logoURI: "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aBAT.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing ETH",
      decimals: 18,
      symbol: "aETH",
      address: "0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04",
      chainId: 1,
      logoURI: "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aETH.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing LINK",
      decimals: 18,
      symbol: "aLINK",
      address: "0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aLINK.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing KNC",
      decimals: 18,
      symbol: "aKNC",
      address: "0x9D91BE44C06d373a8a226E1f3b146956083803eB",
      chainId: 1,
      logoURI: "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aKNC.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing REP",
      decimals: 18,
      symbol: "aREP",
      address: "0x71010A9D003445aC60C4e6A7017c1E89A477B438",
      chainId: 1,
      logoURI: "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aREP.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing MKR",
      decimals: 18,
      symbol: "aMKR",
      address: "0x7deB5e830be29F91E298ba5FF1356BB7f8146998",
      chainId: 1,
      logoURI: "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aMKR.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing MANA",
      decimals: 18,
      symbol: "aMANA",
      address: "0x6FCE4A401B6B80ACe52baAefE4421Bd188e76F6f",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aMANA.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing ZRX",
      decimals: 18,
      symbol: "aZRX",
      address: "0x6Fb0855c404E09c47C3fBCA25f08d4E41f9F062f",
      chainId: 1,
      logoURI: "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aZRX.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing SNX",
      decimals: 18,
      symbol: "aSNX",
      address: "0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE",
      chainId: 1,
      logoURI: "ipfs://QmXj52EGotmpyep84PBycmQnAgCF2sbqxdXFWP3GPZFbEz",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing WBTC",
      decimals: 8,
      symbol: "aWBTC",
      address: "0xFC4B8ED459e00e5400be803A9BB3954234FD50e3",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aWBTC.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing Binance USD",
      decimals: 18,
      symbol: "aBUSD",
      address: "0x6Ee0f7BB50a54AB5253dA0667B0Dc2ee526C30a8",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aBUSD.svg",
      tags: ["atokenv1", "stablecoin"],
    },
    {
      name: "Aave Interest bearing ENJ",
      decimals: 18,
      symbol: "aENJ",
      address: "0x712DB54daA836B53Ef1EcBb9c6ba3b9Efb073F40",
      chainId: 1,
      logoURI: "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aENJ.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing REN",
      decimals: 18,
      symbol: "aREN",
      address: "0x69948cC03f478B95283F7dbf1CE764d0fc7EC54C",
      chainId: 1,
      logoURI: "ipfs://QmUgE3UECZxZcCAiqd3V9otfFWLi5fxR8uHd94RxkT3iYb",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing YFI",
      decimals: 18,
      symbol: "aYFI",
      address: "0x12e51E77DAAA58aA0E9247db7510Ea4B46F9bEAd",
      chainId: 1,
      logoURI: "ipfs://QmauhqAKU8YLhDhT4M5ZcPMuqEfqkBrBaC31uWC9UXd1ik",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing Aave Token",
      decimals: 18,
      symbol: "aAAVE",
      address: "0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aAAVE.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing Uniswap",
      decimals: 18,
      symbol: "aUNI",
      address: "0xB124541127A0A657f056D9Dd06188c4F1b0e5aab",
      chainId: 1,
      logoURI: "ipfs://QmYdpeez387RdMw6zEEa5rMXuayi748Uc15eFuoa3QhGEJ",
      tags: ["atokenv1"],
    },
    {
      name: "Staked Aave",
      decimals: 18,
      symbol: "stkAAVE",
      address: "0x4da27a545c0c5B758a6BA100e3a049001de870f5",
      chainId: 1,
      logoURI: "ipfs://Qmc2N4CsWDH3ZnnggcvbF8dN1JYsKTUyh3rdj5NBZH9KKL",
      tags: ["stktoken"],
    },
    {
      name: "Uniswap DAI LP",
      decimals: 18,
      symbol: "UniDAIETH",
      address: "0x2a1530C4C41db0B0b2bB646CB5Eb1A67b7158667",
      chainId: 1,
      logoURI: "ipfs://QmYNz8J1h5yefkaAw6tZwUYoJyBTWmBXgAY28ZWZ5rPsLR",
      tags: ["unilpv1"],
    },
    {
      name: "Uniswap USDC LP",
      decimals: 18,
      symbol: "UniUSDCETH",
      address: "0x97deC872013f6B5fB443861090ad931542878126",
      chainId: 1,
      logoURI: "ipfs://Qme9QQcNzKvk3FEwEZvvKJWSvDUd41z5geWHNpuJb6di9y",
      tags: ["unilpv1"],
    },
    {
      name: "Uniswap sETH LP",
      decimals: 18,
      symbol: "UnisETHETH",
      address: "0xe9Cf7887b93150D4F2Da7dFc6D502B216438F244",
      chainId: 1,
      logoURI: "ipfs://QmZcwn4eZJpjihH8TApRczQQJdAzpR6Er7g1bvo6PGhxWi",
      tags: ["unilpv1"],
    },
    {
      name: "Uniswap LEND LP",
      decimals: 18,
      symbol: "UniLENDETH",
      address: "0xcaA7e4656f6A2B59f5f99c745F91AB26D1210DCe",
      chainId: 1,
      logoURI: "ipfs://Qmcbin86EXd14LhbqLknH9kM3N7oueBYt9qQmZdmMWqrgu",
      tags: ["unilpv1"],
    },
    {
      name: "Uniswap MKR LP",
      decimals: 18,
      symbol: "UniMKRETH",
      address: "0x2C4Bd064b998838076fa341A83d007FC2FA50957",
      chainId: 1,
      logoURI: "ipfs://QmSS94EJyBeHeUmoDmGjQjeuUHQxTcMaD8Zvw8W8XdGDBv",
      tags: ["unilpv1"],
    },
    {
      name: "Uniswap LINK LP",
      decimals: 18,
      symbol: "UniLINKETH",
      address: "0xF173214C720f58E03e194085B1DB28B50aCDeeaD",
      chainId: 1,
      logoURI: "ipfs://QmQWb2cb9QZbTeMTtoWzUpJGNXcZiGXTygbRLKHNNwhk4Y",
      tags: ["unilpv1"],
    },
    {
      name: "Aave Interest bearing UniETH",
      decimals: 18,
      symbol: "aUniETH",
      address: "0x6179078872605396Ee62960917128F9477a5DdbB",
      chainId: 1,
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing UniDAI",
      decimals: 18,
      symbol: "aUniDAI",
      address: "0x048930eec73c91B44b0844aEACdEBADC2F2b6efb",
      chainId: 1,
      tags: ["atokenv1", "stablecoin"],
    },
    {
      name: "Aave Interest bearing UniUSDC",
      decimals: 6,
      symbol: "aUniUSDC",
      address: "0xe02b2Ad63eFF3Ac1D5827cBd7AB9DD3DaC4f4AD0",
      chainId: 1,
      tags: ["atokenv1", "stablecoin"],
    },
    {
      name: "Aave Interest bearing UniUSDT",
      decimals: 6,
      symbol: "aUniUSDT",
      address: "0xb977ee318010A5252774171494a1bCB98E7fab65",
      chainId: 1,
      tags: ["atokenv1", "stablecoin"],
    },
    {
      name: "Aave Interest bearing UniDAIETH",
      decimals: 18,
      symbol: "aUniDAIETH",
      address: "0xBbBb7F2aC04484F7F04A2C2C16f20479791BbB44",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aUNI%20DAI%20ETH.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing UniUSDCETH",
      decimals: 18,
      symbol: "aUniUSDCETH",
      address: "0x1D0e53A0e524E3CC92C1f0f33Ae268FfF8D7E7a5",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aUNI%20USDC%20ETH.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing UniSETHETH",
      decimals: 18,
      symbol: "aUniSETHETH",
      address: "0x84BBcaB430717ff832c3904fa6515f97fc63C76F",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aUNI%20sETH%20ETH.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing UniLENDETH",
      decimals: 18,
      symbol: "aUniLENDETH",
      address: "0xc88ebbf7C523f38Ef3eB8A151273C0F0dA421e63",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aUNI%20LEND%20ETH.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing UniMKRETH",
      decimals: 18,
      symbol: "aUniMKRETH",
      address: "0x8c69f7A4C9B38F1b48005D216c398Efb2F1Ce3e4",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aUNI%20MKR%20ETH.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Aave Interest bearing UniLINKETH",
      decimals: 18,
      symbol: "aUniLINKETH",
      address: "0x9548DB8b1cA9b6c757485e7861918b640390169c",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aUNI%20LINK%20ETH.svg",
      tags: ["atokenv1"],
    },
    {
      name: "Wrapped Ether",
      decimals: 18,
      symbol: "WETH",
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      chainId: 1,
    },
    {
      name: "Aave interest bearing USDT",
      decimals: 6,
      symbol: "aUSDT",
      address: "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aUSDT.svg",
      tags: ["atokenv2", "stablecoin"],
    },
    {
      name: "Aave interest bearing WBTC",
      decimals: 8,
      symbol: "aWBTC",
      address: "0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656",
      chainId: 1,
      logoURI:
        "ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aWBTC.svg",
      tags: ["atokenv2"],
    },
    {
      name: "Aave interest bearing WETH",
      decimals: 18,
      symbol: "aWETH",
      address: "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",
      chainId: 1,
      logoURI: "ipfs://QmUDc7LQN6zKHon9FChTqZc7WGFvGPZe698Bq5HbSYtfk9",
      tags: ["atokenv2"],
    },
    {
      name: "USD Coin",
      decimals: 6,
      symbol: "USDC",
      address: "0x07865c6e87b9f70255377e024ace6630c1eaa37f",
      chainId: 5,
      logoURI: "https://wallet-asset.matic.network/img/tokens/usdc.svg",
    },
  ],
  timestamp: "2020-12-11T17:08:18.941Z",
  version: { major: 1, minor: 3, patch: 0 },
};

tokenList.tokens = tokenList.tokens.concat(
  tokenList.tokens
    .filter((t) => t.chainId === 421613)
    .map((t) => ({ ...t, chainId: 31337 }))
);

export function getTokens(chainId: number, fundId = null) {
  return tokenList.tokens.filter((token) => token.chainId === chainId);
}

export function getEthToken(chainId: number = 1) {
  return ETH_TOKEN;
}
