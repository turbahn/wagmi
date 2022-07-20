import * as Exports from './'

it('should expose correct exports', () => {
  expect(Object.keys(Exports)).toMatchInlineSnapshot(`
    [
      "connect",
      "disconnect",
      "fetchBalance",
      "fetchBlockNumber",
      "fetchEnsAddress",
      "fetchEnsAvatar",
      "fetchEnsName",
      "fetchEnsResolver",
      "fetchFeeData",
      "fetchSigner",
      "fetchToken",
      "getAccount",
      "getContract",
      "getNetwork",
      "getProvider",
      "getWebSocketProvider",
      "prepareWriteContract",
      "prepareSendTransaction",
      "readContract",
      "readContracts",
      "sendTransaction",
      "signMessage",
      "signTypedData",
      "switchNetwork",
      "waitForTransaction",
      "watchAccount",
      "watchBlockNumber",
      "watchContractEvent",
      "watchNetwork",
      "watchProvider",
      "watchReadContract",
      "watchReadContracts",
      "watchSigner",
      "watchWebSocketProvider",
      "writeContract",
      "createClient",
      "Client",
      "Connector",
      "InjectedConnector",
      "alchemyRpcUrls",
      "allChains",
      "chain",
      "chainId",
      "defaultChains",
      "defaultL2Chains",
      "erc20ABI",
      "erc721ABI",
      "etherscanBlockExplorers",
      "infuraRpcUrls",
      "publicRpcUrls",
      "units",
      "AddChainError",
      "ChainDoesNotSupportMulticallError",
      "ChainMismatchError",
      "ChainNotConfiguredError",
      "ConnectorAlreadyConnectedError",
      "ConnectorNotFoundError",
      "ContractMethodDoesNotExistError",
      "ContractMethodNoResultError",
      "ProviderChainsNotFound",
      "ProviderRpcError",
      "ResourceUnavailableError",
      "RpcError",
      "SwitchChainError",
      "SwitchChainNotSupportedError",
      "UserRejectedRequestError",
      "createStorage",
      "noopStorage",
      "configureChains",
      "deepEqual",
      "normalizeChainId",
      "parseContractResult",
    ]
  `)
})
