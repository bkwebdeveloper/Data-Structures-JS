// FIFO - First In First Out
// The First item added Into the queue will be the First one taken Out of the Queue.
/*
equeuing - adding item to the back
dequeuing - removes item from front
*/

/*
1. Constructor Function
    - Storage
2. Methods
    - enqueue(value) - adds value to the back, returns size
    - dequeue() - removes value from the front, returns value
    - size() - returns the size of the queue as an integer
*/
print = console.log;

function Queue(capacity){
    this._capacity = capacity || Infinity;
    this._container = {};
    this._size = 0;
    this._tracker = 0;
}

// O(1)
Queue.prototype.enqueue = function(value) {
    if(this._size < this._capacity){
        this._container[this._size++] = value;
        return this._size;
    }
    return 'Max limit has reached. Please dequeuing items before adding new.'
}

// O(1)
Queue.prototype.dequeue = function() {
    let value = this._container[this._tracker];
    if(this._size > 0){
        delete this._container[this._tracker++]
        this._size--;
        return value
    }
    return 'No item has left to be dequeued';
}

// O(1)
Queue.prototype.peek = function() {
    if(this._size > 0){
        return this._container[this._tracker];
    }
    return "No item has in the queue";
}

// O(1)
Queue.prototype.size = function() {
    return this._size;
}

let myQueue = new Queue(2);

/*
print(myQueue.enqueue('BK'));
print(myQueue.enqueue('AK'));
print(myQueue.enqueue('DK'));
print(myQueue.enqueue('CK'));

print(myQueue)

print(myQueue.dequeue());
print(myQueue.dequeue());
print(myQueue.dequeue());

print(myQueue)

print(myQueue.size())

print(myQueue.peek())
*/


