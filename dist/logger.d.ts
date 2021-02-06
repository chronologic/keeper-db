import { LeveledLogMethod } from 'winston';
interface ICustomLogger {
    error: LeveledLogMethod;
    info: LeveledLogMethod;
    debug: LeveledLogMethod;
}
export declare function createLogger(source: string): ICustomLogger;
declare const logger: ICustomLogger;
export default logger;
