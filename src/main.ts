let weight: number;
let height: number;

function main(): void {
    promptNumber("How much do you weigh?", recordWeight);
}

function recordWeight(input: number): void {
    weight = input;
    promptNumber("How tall are you?", recordHeight);
}

function recordHeight(input: number): void {
    height = input;
    print("Your BMI is: " + bmi());
}

function bmi(): number {
    let heightInInches: number = (height * 12.0);
    print("Weight: " + weight);
    print("Height: " + height);
    print("Inches: " + heightInInches);
    return 703.0 * (weight / square(heightInInches));
}

function square(n: number): number {
    return n * n;
}

main();