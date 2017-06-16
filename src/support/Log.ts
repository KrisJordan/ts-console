import {observable, action} from "mobx";
import {LogEntry} from "./LogEntry";

class Log {

    @observable
    history: LogEntry[];

    idCount: number = 1;

    constructor() {
        this.history = [];
    }

    @action
    log(entry: LogEntry): void {
        entry.id = this.idCount++;
        this.history.push(entry);
    }

    @action
    clear(): void {
        this.history = [];
    }

}

export default Log;