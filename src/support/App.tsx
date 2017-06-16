import * as React from "react";
import "./App.css";
import {observer} from "mobx-react";
import Log from "./Log";
import {LogEntry, MessageEntry, PromptEntry} from "./LogEntry";
import Message from "./components/Message";
import Prompt from "./components/Prompt";

@observer
class App extends React.Component<{logger: Log}, void> {

  messagesEnd: HTMLDivElement;

  render(): JSX.Element {
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

  renderEntry(entry: LogEntry, index: number): JSX.Element {
    if (entry instanceof MessageEntry) {
      return <Message entry={entry} key={entry.id} />;
    } else if (entry instanceof PromptEntry) {
      return <Prompt entry={entry} key={entry.id} />;
    } else {
      return <div key={entry.id} >{entry.toString()}</div>;
    }
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({behavior: "smooth"});
  }

  componentDidMount(): void {
    this.scrollToBottom();
  }

  componentDidUpdate(): void {
    setTimeout(() => {this.scrollToBottom(); }, 0);
  }

}

export default App;