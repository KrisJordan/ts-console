import Prompter from "./support/Prompter";
let prompter: Prompter = new Prompter();

function main() {
    console.log("hello, world");
    prompter.stringPrompt("Enter a string", yell);
}

function yell(input: string) {
    console.log(input.toUpperCase());
}

main();