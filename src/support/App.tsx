import * as React from "react";
import "./App.css";
import {observer} from "mobx-react";
import Log from "./Log";
import {LogEntry, MessageEntry, PromptEntry} from "./LogEntry";

@observer
class App extends React.Component<{logger: Log}, void> {

  messagesEnd: HTMLDivElement;

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Console <small>(Preview)</small></h2>
        </div>
        <div className="App-log">
          {this.props.logger.history.map(this.renderEntry)}
        </div>
        <div 
            style={{float: "left", clear: "both"}}
            ref={(el: HTMLDivElement) => { this.messagesEnd = el; }}
        />
      </div>
    );
  }

  renderEntry(entry: LogEntry, index: number) {
    if (entry instanceof MessageEntry) {
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
              <div key={`entry-${index}`} className="App-log-message">
                <div className="App-log-message-message">{message}</div>
                <div className="App-log-message-type">{type}</div>
              </div>
              );
    } else if (entry instanceof PromptEntry) {
      type EventHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
      let callback: EventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        entry.cb(e.target.value);
      };
      return <div>{entry.prompt}: <input type="text" onChange={callback} /></div>;
    } else {
      return <div key={`entry-${index}`}>{entry.toString()}</div>;
    }
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({behavior: "smooth"});
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    setTimeout(() => {this.scrollToBottom(); }, 0);
  }

}

export default App;