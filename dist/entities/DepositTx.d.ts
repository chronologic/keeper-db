import { BigNumber } from 'ethers';
import { Deposit } from './Deposit';
declare enum Type {
    REDEEM_APPROVE_TBTC = "REDEEM_APPROVE_TBTC",
    REDEEM_REDEMPTION_REQUEST = "REDEEM_REDEMPTION_REQUEST",
    REDEEM_PROVIDE_REDEMPTION_SIG = "REDEEM_PROVIDE_REDEMPTION_SIG",
    REDEEM_BTC_RELEASE = "REDEEM_BTC_RELEASE",
    REDEEM_PROVIDE_REDEMPTION_PROOF = "REDEEM_PROVIDE_REDEMPTION_PROOF",
    MINT_CREATE_DEPOSIT = "MINT_CREATE_DEPOSIT",
    MINT_RETRIEVE_PUBKEY = "MINT_RETRIEVE_PUBKEY",
    MINT_FUND_BTC = "MINT_FUND_BTC",
    MINT_PROVIDE_FUNDING_PROOF = "MINT_PROVIDE_FUNDING_PROOF",
    MINT_APPROVE_TDT = "MINT_APPROVE_TDT",
    MINT_TDT_TO_TBTC = "MINT_TDT_TO_TBTC"
}
declare enum Status {
    BROADCASTED = "BROADCASTED",
    CONFIRMED = "CONFIRMED",
    ERROR = "ERROR"
}
export declare class DepositTx {
    static Status: typeof Status;
    Status: Status;
    static Type: typeof Type;
    Type: Type;
    id: number;
    deposit: Deposit;
    depositId: number;
    operationType: Type;
    status: Status;
    txHash: string;
    txCostEthEquivalent: BigNumber;
    txCostUsdEquivalent: number;
    txCostEthEquivalentWithFee: BigNumber;
    txCostUsdEquivalentWithFee: number;
    createDate: Date;
    updateDate: Date;
}
export {};
