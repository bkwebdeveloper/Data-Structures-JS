// Recursion - a function that calls itself; however it doesn't stop there.
// 5! = 5*4*3*2*1

p = console.log;

function factorialWithLoop(num){
    let result = 1;
    for(let i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}

p(factorialWithLoop(4))


function factorialWithRecursion(num){
    let result = num;
    if(num === 1 || num === 0){
        return 1;
    }
    return result * factorialWithRecursion(num-1)
}

p(factorialWithRecursion(3)) // 6

