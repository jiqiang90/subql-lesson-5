import {Erc20Transfer} from "../types";
import {MoonbeamEvent} from "@subql/contract-processors/dist/moonbeam"
import {BigNumber} from '@ethersproject/bignumber'

import {SubstrateEvent} from '@subql/types'




export async function erc20Transfer(event: MoonbeamEvent<[string,string, BigNumber] & {from:string, to: string,value:BigNumber}>): Promise<void> {
   const transfer = Erc20Transfer.create({
       id: event.transactionHash,
       from: event.args.from,
       to: event.args.to,
       amount: event.args.value.toBigInt(),
       contractAddress: event.address,
   })

    await transfer.save();
}



