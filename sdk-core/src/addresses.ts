import { ChainId } from './constants'

type AddressMap = { [chainId: number]: string }

/**
 * @deprecated use V2_FACTORY_ADDRESSES instead
 */
export const V2_FACTORY_ADDRESS = '0x9E229BE3812228454499FAf771b296bedFe8c904'
export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.FXCORE]: '0x9E229BE3812228454499FAf771b296bedFe8c904',
  [ChainId.DHOBYGHAUT]: '0x9E229BE3812228454499FAf771b296bedFe8c904',
  [ChainId.ATHENS]: '0x26c2b5f121812e53a771cde8dca4143d6860b3fa'
}
/**
 * @deprecated use V2_ROUTER_ADDRESSES instead
 */
export const V2_ROUTER_ADDRESS = '0x4de97358343E530F2f49B76DdD7b151b21e16c57'
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.FXCORE]: '0x4de97358343E530F2f49B76DdD7b151b21e16c57',
  [ChainId.DHOBYGHAUT]: '0x4bb12259D84821B57BE5e385DBCf41E4e2654B4d',
  [ChainId.ATHENS]: '0x62EB0ab34Fc699bED29d937Eab5F115Fee37f44D'
}