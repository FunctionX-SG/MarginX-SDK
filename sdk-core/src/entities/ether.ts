import { BaseCurrency } from './baseCurrency'
import { Currency } from './currency'
import { Token, WETH9 } from './token'
import { ChainId, NativeTokenMap } from '../constants'
import invariant from 'tiny-invariant'

/**
 * Represents the currency Ether
 */
export class Ether extends BaseCurrency {
  public readonly isEther: true = true
  public readonly isToken: false = false

  /**
   * Only called once by this class
   * @protected
   */
  protected constructor(chainId: ChainId) {
    super(chainId, NativeTokenMap[chainId]?.decimal || 18, NativeTokenMap[chainId]?.symbol || 'FX', NativeTokenMap[chainId]?.name || 'Function X')
  }

  public get wrapped(): Token {
    const weth9 = WETH9[this.chainId]
    invariant(!!weth9, 'WRAPPED')
    return weth9
  }

  /**
   * The only instance of the class `Ether`.
   */
  public static readonly ETHER: Ether = new Ether(530)

  private static _etherCache: { [chainId: number]: Ether } = {}

  public static onChain(chainId: number): Ether {
    return this._etherCache[chainId] ?? (this._etherCache[chainId] = new Ether(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isEther && other.chainId === this.chainId
  }
}

export const ETHER = Ether.ETHER
