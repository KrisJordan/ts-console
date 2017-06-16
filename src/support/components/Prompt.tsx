import * as React from "react";
import {observer} from "mobx-react";
import {PromptEntry, NumberPromptEntry, StringPromptEntry, BooleanPromptEntry, Primitive} from "./../LogEntry";

import "./Prompt.css";

interface PromptProps {
    entry: PromptEntry<Primitive>;
}

interface PromptState {
    value: string;
    submitted: boolean;
}

@observer
class Prompt extends React.Component<PromptProps, PromptState> {

    constructor() {
        super();
        this.callback = this.callback.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {value: "", submitted: false};
    }

    render(): JSX.Element {
        let entry: PromptEntry<Primitive> = this.props.entry;
        return (
            <div className="App-log-message" key={entry.id}>
                {entry.prompt}: 
                <input type="text" onChange={this.callback} value={this.state.value} />
                <input type="button" onClick={this.submit} value="Submit" disabled={this.state.submitted} />
            </div>
        );
    }

    private callback(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({value: event.target.value});
    }

    private submit(event: React.MouseEvent<HTMLInputElement>): void {
        
        let entry: NumberPromptEntry | StringPromptEntry | BooleanPromptEntry  = this.props.entry;
        if (entry instanceof NumberPromptEntry) {
            entry.cb(parseFloat(this.state.value));
        } else if (entry instanceof StringPromptEntry) {
            entry.cb(this.state.value);
        } else if (entry instanceof BooleanPromptEntry) {
            entry.cb(this.state.value.toLowerCase() === "true");
        }
        this.setState({submitted: true});
    }

}

export default Prompt;