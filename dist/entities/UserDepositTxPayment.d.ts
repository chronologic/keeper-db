import { BigNumber } from 'ethers';
import { User } from './User';
import { DepositTx } from './DepositTx';
export declare class UserDepositTxPayment {
    id: number;
    user: User;
    userId: number;
    depositTx: DepositTx;
    depositTxId: number;
    txCostEthEquivalent: BigNumber;
    txCostUsdEquivalent: number;
    txCostEthEquivalentWithFee: BigNumber;
    txCostUsdEquivalentWithFee: number;
    createDate: Date;
    updateDate: Date;
}
