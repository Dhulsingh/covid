const zero = (operation = () => 0) => operation(0);
const one = (operation = () => 1) => operation(1);
const two = (operation = () => 2) => operation(2);
const three = (operation = () => 3) => operation(3);
const four = (operation = () => 4) => operation(4);
const five = (operation = () => 5) => operation(5);
const six = (operation = () => 6) => operation(6);
const seven = (operation = () => 7) => operation(7);
const eight = (operation = () => 8) => operation(8);
const nine = (operation = () => 9) => operation(9);

const plus = (number) => (other_number) => other_number + number;
const minus = (number) => (other_number) => other_number - number;
const times = (number) => (other_number) => other_number * number;
const dividedBy = (number) => (other_number) => other_number / number;

console.log(seven(times(five())), 35); // must return 35
console.log(four(plus(nine())), 13); // must return 13
console.log(eight(minus(three())), 5); // must return 5
console.log(six(dividedBy(two())), 3); // must return 3
