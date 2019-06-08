// LIFO - Last In First Out
// The Last item added Into the stack will become the First one taken Out of the stack.

// Implementation of stack using only a string rather than an array.

// Constructor Function
    // Storage
// Methods:
    // Push(value) - adds value to the front, return size of stack
    // Pop() - remove value from front, return value
    // Size() - returns size of stack as an integer

print = console.log;

let Stack = function(){
    this.storage = "";
}

Stack.prototype.push = function(value){
    this.storage = this.storage.concat(value + '-');
    this.size();
}

Stack.prototype.pop = function() {
    if(this.size() === 0){
        print('Invalid operation. No item to pop')
    }

    let menus = this.storage.split('-');
    if(menus[menus.length - 1] === ''){
        menus.pop();
        this.storage = menus.join('-');
        return menus.pop();
    }
    let popedItem = menus.pop();
    this.storage = menus.join('-');
    return popedItem;
}

Stack.prototype.size = function(){
    let menus = this.storage.split('-');
    if(menus[menus.length - 1] === ''){
        menus.pop();
        return menus.length;
    }
    return menus.length;
}

let myWeeklyMenu = new Stack();

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

myWeeklyMenu.pop();
print(myWeeklyMenu.size());

myWeeklyMenu.pop();
print(myWeeklyMenu.size());

myWeeklyMenu.pop();
print(myWeeklyMenu.size());

print(myWeeklyMenu)


myWeeklyMenu.pop();
print(myWeeklyMenu.size());
*/