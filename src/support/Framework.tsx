import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import Log from "./Log";
import ConsoleDispatch from "./ConsoleDispatch";
import "./Framework.css";

class Framework {

    static init() {
        let log: Log = new Log();
        ConsoleDispatch.instance(log);
        Framework.render(log);
    }

    private static render(logger: Log) {
        ReactDOM.render(
            <App logger={logger} />,
            document.getElementById("root") as HTMLElement
        );
    }

}

export default Framework;