//  any types
// let abc: any[];

// abc.push('apple');
// abc.push(1);

// union types

// function add(number1: number, number2: number) {
//     return number1 + number2;
// }

// let result = add(1, 2);
// console.log(result);

function combine(input1: number | string, input2: number | string) {
    let result;

    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

let result = combine('ABC', 'ABC');
console.log(result);