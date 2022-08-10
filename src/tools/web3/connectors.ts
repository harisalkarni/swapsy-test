import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { BscConnector } from "@binance-chain/bsc-connector";

export type ConnectorType =
  | "metamask"
  | "wallet-connect"
  | "binance"
  | "trust-wallet";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3],
});

const walletconnect = new WalletConnectConnector({
  // rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const binance = new BscConnector({
  supportedChainIds: [56, 97], // later on 1 ethereum mainnet and 3 ethereum ropsten will be supported
});

export const connectors = {
  metamask: injected,
  "wallet-connect": walletconnect,
  binance: binance,
  "trust-wallet": walletconnect,
};
