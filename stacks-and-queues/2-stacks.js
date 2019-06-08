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
    this._storage[this._size++] = value;
    return this.size()
}

Stack.prototype.pop = function() {
    // delete the last object 
    delete this._storage[this._size - 1];
    this._size--;
}

Stack.prototype.peek = function() {
    return this._storage[this._size - 1];
};

Stack.prototype.size = function(){
    return this._size; 
}

let myWeeklyMenu = new Stack(10);

/*
myWeeklyMenu.push('ReadBeans');
print(myWeeklyMenu.size());

myWeeklyMenu.push('hello');
print(myWeeklyMenu.size());

myWeeklyMenu.push('there');
print(myWeeklyMenu.size());

myWeeklyMenu.push('JavaScript');
print(myWeeklyMenu.size());

print(myWeeklyMenu)

myWeeklyMenu.pop();
print(myWeeklyMenu.size());

myWeeklyMenu.pop();
print(myWeeklyMenu.size());



print(myWeeklyMenu)
print(myWeeklyMenu.peek());
*/