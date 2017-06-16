import ConsoleDispatch from "./ConsoleDispatch";

window.print = (s) => ConsoleDispatch.instance().log(s);
window.prompt = (s, cb) => ConsoleDispatch.instance().stringPrompt(s, cb);
window.promptNumber = (s, cb) => ConsoleDispatch.instance().promptNumber(s, cb);
window.clear = () => ConsoleDispatch.instance().clear();