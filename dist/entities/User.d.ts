import { BigNumber } from 'ethers';
import { Payment } from './Payment';
import { Operator } from './Operator';
export declare class User {
    id: number;
    payments: Payment[];
    operators: Operator[];
    address: string;
    balanceEth: BigNumber;
    email: string;
    createDate: Date;
    updateDate: Date;
}
