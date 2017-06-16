import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import Log from "./Log";
import ConsoleDispatch from "./ConsoleDispatch";
import "./Framework.css";

class Framework {

    static log: Log;

    static init(): void {
        Framework.log = new Log();
        ConsoleDispatch.instance(Framework.log);
        Framework.render(Framework.log);
    }

    static print(s: string): void {
        console.log(s);
    }

    private static render(logger: Log): void {
        ReactDOM.render(
            <App logger={logger} />,
            document.getElementById("root") as HTMLElement
        );
    }

}

export default Framework;