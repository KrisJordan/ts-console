import ConsoleDispatch from "./ConsoleDispatch";

class Prompter {

    stringPrompt(prompt: string, cb: (s: string) => void): void {
        ConsoleDispatch.instance().stringPrompt(prompt, cb);
    }

}

export default Prompter;