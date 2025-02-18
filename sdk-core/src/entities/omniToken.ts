import { Token } from './token'
import { Ether } from './ether'
import { ChainId, ConnectedChainId } from '../constants'

export class OmniToken extends Token {
    public readonly connectedToken: Token | Ether
    public readonly connectedChainId: ConnectedChainId | number
    public constructor(
        chainId: ChainId | number, 
        address: string, 
        decimals: number, 
        connectedChainId: ConnectedChainId | number,
        connectedToken: Token | Ether,
        symbol?: string,
        name?: string,
    ) {
        super(chainId, address, decimals, symbol, name)
        this.connectedChainId = connectedChainId
        this.connectedToken = connectedToken
    }
}