import { Deposit } from './Deposit';
import { User } from './User';
export declare class Operator {
    id: number;
    users: User[];
    deposits: Deposit[];
    address: string;
    createDate: Date;
    updateDate: Date;
}
