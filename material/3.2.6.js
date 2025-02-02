function checkBrackets(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of str) {
        if (brackets[char]) {
            stack.push(char);
        } else if (Object.values(brackets).includes(char)) {
            if (brackets[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const someFn = `
function example() {
    if (true) {
        console.log("Hello, world!");
    }
}
`;
console.log(checkBrackets(someFn)); 

const invalidCode = `
function example() {
    if (true) {
        console.log("Hello, world!";
    }
`;
console.log(checkBrackets(invalidCode)); 
