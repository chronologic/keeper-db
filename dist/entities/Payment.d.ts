import { BigNumber } from 'ethers';
import { User } from './User';
declare enum Status {
    CONFIRMED = "CONFIRMED",
    ERROR = "ERROR"
}
export declare class Payment {
    Status: Status;
    static Status: typeof Status;
    id: number;
    user: User;
    userId: number;
    txHash: string;
    amount: BigNumber;
    status: string;
    blockNumber: number;
    createDate: Date;
    updateDate: Date;
}
export {};
