import { ChainId } from 'hecc_swap_sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ROPSTEN]: '0xa8C5246641022C5F5b0Db581b66a4c9B26e7a2c0',
  [ChainId.RINKEBY]: '0xa8C5246641022C5F5b0Db581b66a4c9B26e7a2c0',
  [ChainId.HecoChain]: '0xa8C5246641022C5F5b0Db581b66a4c9B26e7a2c0',
  [ChainId.BinanceChain]: '0xa8C5246641022C5F5b0Db581b66a4c9B26e7a2c0'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
