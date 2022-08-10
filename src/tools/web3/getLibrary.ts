import { ExternalProvider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { provider } from "web3-core";

function getLibrary(provider: provider) {
  const library = new ethers.providers.Web3Provider(
    provider as ExternalProvider
  );
  library.pollingInterval = 8000;
  return library;
}

export default getLibrary;