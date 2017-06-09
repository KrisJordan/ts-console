import Log from "./Log";
import {MessageEntry, PromptEntry} from "./LogEntry";

class ConsoleDispatch {

    private static _instance: ConsoleDispatch;

    private _logger: Log;

    public static instance(logger?: Log): ConsoleDispatch {
        if (ConsoleDispatch._instance === undefined && logger) {
            ConsoleDispatch._instance = new ConsoleDispatch(logger);
        }
        return ConsoleDispatch._instance;
    }

    public log = (message: string, ...optionalParams: string[]): void => {
        this._logger.log(new MessageEntry(message));
    }

    public stringPrompt = (prompt: string, cb: (s: string) => void): void => {
        this._logger.log(new PromptEntry(prompt, cb));
    }

    private constructor(logger: Log) {
        this._logger = logger;
        window.console.log = this.log;
    }

}

export default ConsoleDispatch;