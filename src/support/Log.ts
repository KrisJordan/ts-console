import {observable} from "mobx";
import {LogEntry} from "./LogEntry";

class Log {

    @observable
    history: LogEntry[];

    constructor() {
        this.history = [];
    }

    log(entry: LogEntry) {
        this.history.push(entry);
    }

}

export default Log;