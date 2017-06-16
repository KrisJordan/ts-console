import * as React from "react";
import {observer} from "mobx-react";
import {MessageEntry} from "./../LogEntry";

import "./Message.css";

@observer
class Message extends React.Component<{entry: MessageEntry}, void> {
    render(): JSX.Element {
        let entry: MessageEntry = this.props.entry;
        let message: string;
        let type: string;

        if (entry.message === null) {
            message = "null";
            type = "null";
        } else {
            message = entry.message.toString();
            type = entry.message.constructor.name.toLowerCase();
        }
        return (
                <div className="App-log-message">
                    <div className="App-log-message-message">{message}</div>
                    <div className="App-log-message-type">{type}</div>
                </div>
        );
    }
}

export default Message;