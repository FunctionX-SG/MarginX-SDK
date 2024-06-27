import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | string | number

export enum ChainId {
  DHOBYGHAUT = 90001,
  FXCORE = 530,
  ATHENS = 7001
}

export const SUPPORTED_CHAINS = [
  ChainId.DHOBYGHAUT,
  ChainId.FXCORE,
  ChainId.ATHENS
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  FX = 'FX',
  ZETA = 'ZETA'
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)

export type NativeMapType = { [chainId: number]: NativeCurrencyName }
export const NativeMap: NativeMapType = {
  [ChainId.FXCORE]: NativeCurrencyName.FX,
  [ChainId.DHOBYGHAUT]: NativeCurrencyName.FX,
  [ChainId.ATHENS]: NativeCurrencyName.ZETA
}

type NativeToken = {decimal:number,name:string,symbol:string}
export type NativeTokenMapType = { [chainId: number]: NativeToken }
export const NativeTokenMap: NativeTokenMapType = {
  [ChainId.FXCORE]: {decimal:18,name:"Function X",symbol:"FX"},
  [ChainId.DHOBYGHAUT]: {decimal:18,name:"Function X",symbol:"FX"},
  [ChainId.ATHENS]: {decimal:18,name:"Zeta",symbol:"ZETA"},
}