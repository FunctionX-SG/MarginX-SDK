import invariant from 'tiny-invariant'
import { Currency } from './currency'
import { Token } from './token'
import { ChainId } from '../constants'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export abstract class BaseCurrency {
  public abstract readonly isEther: boolean
  public abstract readonly isToken: boolean

  public readonly chainId: ChainId
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
  * @param chainId the chain ID on which this currency resides 
  * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(chainId: ChainId, decimals: number, symbol?: string, name?: string) {
    invariant(Number.isSafeInteger(chainId), 'CHAIN_ID')
    invariant(decimals >= 0 && decimals < 255 && Number.isInteger(decimals), 'DECIMALS')

    this.chainId = chainId
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  /**
   * Returns whether this currency is functionally equivalent to the other currency
   * @param other the other currency
   */
  public abstract equals(other: Currency): boolean

  /**
   * Return the wrapped version of this currency that can be used with the Uniswap contracts. Currencies must
   * implement this to be used in Uniswap
   */
  public abstract get wrapped(): Token
}
