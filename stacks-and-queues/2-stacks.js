/*
STACK

Abstract data type

LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack
*/

print = console.log;

function Stack(capacity){
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._size = 0;
}

Stack.prototype.push = function(value){
    if(this._size < this._capacity){
        this._storage[this._size++] = value;
        return this._size;
    } else{
        return 'Max capacity already reached. Remove element before adding one.';
    }
};

Stack.prototype.pop = function() {
    let value = this._storage[--this._size]
    // delete the last object 
    delete this._storage[this._size];
    if(this._size <= 0){
        return this._size = 0;
    }
    return value;
}

Stack.prototype.peek = function() {
    return this._storage[this._size - 1];
};

Stack.prototype.size = function(){
    return this._size; 
}

let myWeeklyMenu = new Stack(3);


print(myWeeklyMenu.push('ReadBeans'));
print(myWeeklyMenu.push('hello'));
print(myWeeklyMenu.push('there'));
print(myWeeklyMenu.push('JavaScript'));


print(myWeeklyMenu)

myWeeklyMenu.pop();
print(myWeeklyMenu.size());

myWeeklyMenu.pop();
print(myWeeklyMenu.size());


print(myWeeklyMenu)
print(myWeeklyMenu.peek());
