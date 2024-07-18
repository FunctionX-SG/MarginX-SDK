import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
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

export const WETH9: { [chainId in ChainId]: Token } = {
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
}
