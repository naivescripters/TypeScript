enum RESULT_TYPES {
    AS_NUMBER = 'as-number',
    AS_TEXT = 'as-text',
}


function combine(
    input1: number | string,
    input2: number | string,
    resultType: string
) {
    let result;

    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    if(resultType === 'as-number'){
        return +result;
    } else {
        return result.toString();
    }
}

let result = combine(1, 2, 'as-text');

console.log(result);

console.log(combine(1, 2, 'as-number'));
