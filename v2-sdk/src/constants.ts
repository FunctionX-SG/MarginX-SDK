import JSBI from 'jsbi'
import { V2_FACTORY_ADDRESSES, ChainId } from '@marginx/sdk-core'

export const FACTORY_ADDRESS = '0x9E229BE3812228454499FAf771b296bedFe8c904'
export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = V2_FACTORY_ADDRESSES

export const INIT_CODE_HASH = '0x89bbd161b7f9309df13e388d6b1f71f5ff07259b5149560e726a4df10971bceb'
export const INIT_CODE_HASH_MAP: {[chainId:number]:string} = {
    [ChainId.FXCORE]: '0x89bbd161b7f9309df13e388d6b1f71f5ff07259b5149560e726a4df10971bceb',
    [ChainId.DHOBYGHAUT]: '0x89bbd161b7f9309df13e388d6b1f71f5ff07259b5149560e726a4df10971bceb',
    [ChainId.ATHENS]: '0x8feedbf085933ab06ceb0988d6c1241f33f51cd3f3e31b61062f75be752daa55',
    [ChainId.ZETACHAIN]: '0x8feedbf085933ab06ceb0988d6c1241f33f51cd3f3e31b61062f75be752daa55'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
