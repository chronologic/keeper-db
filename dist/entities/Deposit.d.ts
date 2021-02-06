import { BigNumber } from 'ethers';
import { Operator } from './Operator';
import { DepositTx } from './DepositTx';
export declare enum Status {
    START = 0,
    AWAITING_SIGNER_SETUP = 1,
    AWAITING_BTC_FUNDING_PROOF = 2,
    FAILED_SETUP = 3,
    ACTIVE = 4,
    AWAITING_WITHDRAWAL_SIGNATURE = 5,
    AWAITING_WITHDRAWAL_PROOF = 6,
    REDEEMED = 7,
    COURTESY_CALL = 8,
    FRAUD_LIQUIDATION_IN_PROGRESS = 9,
    LIQUIDATION_IN_PROGRESS = 10,
    LIQUIDATED = 11
}
declare enum SystemStatus {
    QUEUED_FOR_REDEMPTION = "QUEUED_FOR_REDEMPTION",
    REDEEMING = "REDEEMING",
    REDEEMED = "REDEEMED",
    ERROR = "ERROR"
}
export declare class Deposit {
    static Status: typeof Status;
    Status: Status;
    static SystemStatus: typeof SystemStatus;
    SystemStatus: SystemStatus;
    id: number;
    operators: Operator[];
    depositTxs: DepositTx[];
    mintedDeposit: Deposit;
    mintedDepositId: number;
    depositAddress: string;
    keepAddress: string;
    blockNumber: number;
    lotSizeSatoshis: BigNumber;
    bondedEth: BigNumber;
    redemptionCostEthEquivalent: BigNumber;
    redemptionCostUsdEquivalent: number;
    redemptionCostEthEquivalentWithFee: BigNumber;
    redemptionCostUsdEquivalentWithFee: number;
    undercollateralizedThresholdPercent: number;
    redemptionAddress: string;
    redemptionAddressIndex: number;
    status: Status;
    statusCode: number;
    systemStatus: SystemStatus;
    createdAt: Date;
    createDate: Date;
    updateDate: Date;
}
export {};
