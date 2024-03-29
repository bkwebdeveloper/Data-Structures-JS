//1.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
p = console.log;

function exponent(base, expo){
    let result = 1;
    let loopingOverTimes = 0;
    while(loopingOverTimes < expo){
        result *= base;
        loopingOverTimes++;
    }
    return result;
}

p(exponent(2, 3))


//2. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function recursiveExponent(base, expo){
    let loopingOverTimes = 0;

    function recurse(expo){
        if(expo === loopingOverTimes){
            return 1;
        }
        return base*recurse(expo-1)
    }
    return recurse(expo);
}

p(recursiveExponent(5, 3))

//3. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num){
    let newArr = [];
    function multiplier(arr, num){
        if(arr.length === 0){
            return 1;
        }
        newArr.push(num * arr.shift());
        return multiplier(arr, num);
    }
    multiplier(arr, num);
    return newArr;
}

p(recursiveMultiplier([1,2,3,4], 2));



//4. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr){
    let reversedArray = [];
    function reverse(arr){
        if(arr.length === 0){
            return '';
        }
        reversedArray.push(arr.pop())
        return reverse(arr)
    }
    reverse(arr)
    return reversedArray;
}

p(recursiveReverse([1,2,3,4,5]));