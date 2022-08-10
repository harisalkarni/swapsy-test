import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNetworkErrorOpening } from 'store/app/reducer';
import Web3 from 'web3';

import { connectors, ConnectorType } from './connectors';

function useWalletHooks() {
  const { active, deactivate, activate, account } = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProvider = window.localStorage.getItem(
      "provider"
    ) as ConnectorType;

    if (getProvider) {
      activate(connectors[getProvider], ({ name }) => {
        checkNetworkError(name);
      });
    }
  }, []);

  const checkNetworkError = (name: string) => {
    switch (name) {
      case "NoEthereumProviderError":
        break;
      case "UnsupportedChainIdError":
        dispatch(setNetworkErrorOpening(true));
        break;
    }
  };

  const connect = (type: ConnectorType) => {
    window.localStorage.setItem("provider", type);
    activate(connectors[type], ({ name }) => {
      checkNetworkError(name);
    });
  };

  const disconnect = () => {
    window.localStorage.removeItem("provider");
    deactivate();
  };

  const switchNetwork = async () => {
    connectors.metamask.getProvider().then((provider) => {
      provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: Web3.utils.toHex(1) }],
      });
    });
  };

  return {
    active,
    connect,
    disconnect,
    account,
    switchNetwork,
  };
}

export default useWalletHooks;
