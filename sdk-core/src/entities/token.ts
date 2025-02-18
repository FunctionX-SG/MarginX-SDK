import invariant from 'tiny-invariant'
import { ChainId, ConnectedChainId } from '../constants'
import { validateAndParseAddress } from '../utils/validateAndParseAddress'
import { BaseCurrency } from './baseCurrency'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends BaseCurrency {
  public readonly isEther: false = false
  public readonly isToken: true = true

  public readonly chainId: ChainId | number
  public readonly address: string

  public constructor(chainId: ChainId | number, address: string, decimals: number, symbol?: string, name?: string) {
    super(chainId, decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Currency): boolean {
    return other.isToken && this.chainId === other.chainId && this.address.toLowerCase() === other.address.toLowerCase()
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }

  public get wrapped(): Token {
    return this
  }
}

export const WETH9: { [chainId in ChainId|ConnectedChainId]: Token } = {
  [ChainId.FXCORE]: new Token(
    ChainId.FXCORE,
    '0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd',
    18,
    'FX',
    'Wrapped FX'
  ),
  [ChainId.DHOBYGHAUT]: new Token(
    ChainId.DHOBYGHAUT,
    '0x3452e23F9c4cC62c70B7ADAd699B264AF3549C19',
    18,
    'FX',
    'Wrapped FX'
  ),
  [ChainId.ATHENS]: new Token(
    ChainId.ATHENS,
    '0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf',
    18,
    'ZETA',
    'Wrapped ZETA'
  ),
  [ChainId.ZETACHAIN]: new Token(
    ChainId.ZETACHAIN,
    '0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf',
    18,
    'ZETA',
    'Wrapped ZETA'
  ),
  [ConnectedChainId.ETHEREUM]: new Token(
    ConnectedChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'ETH',
    'Wrapped Ether'
  ),
  [ConnectedChainId.BSC]: new Token(
    ConnectedChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'BNB',
    'Wrapped BNB'
  ),
  [ConnectedChainId.POLYGON]: new Token(
    ConnectedChainId.POLYGON,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'POL',
    'Wrapped POL'
  ),
  [ConnectedChainId.BSCTEST]: new Token(
    ConnectedChainId.BSCTEST,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'BNB',
    'Wrapped BNB'
  ),
  [ConnectedChainId.BASETEST]: new Token(
    ConnectedChainId.BASETEST,
    '0x4200000000000000000000000000000000000006',
    18,
    'ETH',
    'Wrapped Ether'
  )
}
