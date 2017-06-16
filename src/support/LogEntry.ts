import {observable} from "mobx";

abstract class LogEntry {
    @observable
    id: number;
}

type Primitive = string | number | boolean;

class MessageEntry extends LogEntry {
    message: string | number | boolean | null;

    constructor(message: string | number | boolean | null) {
        super();
        this.message = message;
    }

}

class PromptEntry<T extends Primitive> extends LogEntry {
    prompt: string;
    cb: (s: T) => void;

    constructor(prompt: string, cb: (s: T) => void) {
        super();
        this.prompt = prompt;
        this.cb = cb;
    }
}

class NumberPromptEntry extends PromptEntry<number> { 
    constructor(prompt: string, cb: (s: number) => void) { 
        super(prompt, cb); 
    }
}

class StringPromptEntry extends PromptEntry<string> {
    constructor(prompt: string, cb: (s: string) => void) { 
        super(prompt, cb); 
    }
}
class BooleanPromptEntry extends PromptEntry<boolean> {}

export {Primitive, LogEntry, MessageEntry, PromptEntry, NumberPromptEntry, StringPromptEntry, BooleanPromptEntry};