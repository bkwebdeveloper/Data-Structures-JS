/*
Implement a function that flattens a nested array.
flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/
p = console.log;

function flatten(array){

    for (var i = 0; i < array.length; i++) {
        if(array[i] instanceof Array){
            array.splice.apply(array, [i,1].concat(array[i]));
            i--;
        }
    };
    return array;
    
}

flatten([1,[2],[3, [[4]]]]);