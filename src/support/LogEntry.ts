abstract class LogEntry {}

class MessageEntry extends LogEntry {
    
    message: string | number | boolean | null;

    constructor(message: string | number | boolean | null) {
        super();
        this.message = message;
    }

}

class PromptEntry extends LogEntry {
    prompt: string;
    cb: (s: string) => void;

    constructor(prompt: string, cb: (s: string) => void) {
        super();
        this.prompt = prompt;
        this.cb = cb;
    }
}

export {LogEntry, MessageEntry, PromptEntry};