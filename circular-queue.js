let queue; // queue array object
let head;  // first index in the queue
let tail;  // last index in the queue
let size;  // current number of elements in the queue
let mSize; // maximum number of elements allowed in the queue

/**
 * Initializes the object with the size of the queue to be k.
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    queue = [];
    head  = 0;
    tail  = 0;
    size  = 0;
    mSize = k;

    for (let i = 0; i < mSize; i++) {
        queue[i] = null;
    }
};

/**
 * Inserts an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    // if the queue is full
    // return false
    if (size === mSize) {
        return false;
    }

    // if the queue is empty
    // then add the value at the head
    // increment the queue size
    // return true
    if (queue[head] === null) {
        queue[head] = value;
        size++;
        return true;
    }

    // if the next available slot is empty
    // and within the maximum index limit
    // then increment the tail 
    // add the value to the tail
    // increment the queue size
    // return true
    if (queue[tail + 1] === null && 
        tail + 1 < mSize
    ) {
        queue[++tail] = value;
        size++;
        return true;
    }

    // reset tail to 0
    // begin looping through the queue starting at the new tail
    for (tail = 0; tail < head; tail++) {
        if (queue[tail] === null) {
            queue[tail] = value;
            size++;
            return true;
        }
    }
};

/**
 * Deletes an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    // if the queue is empty
    // return false
    if (size === 0) {
        return false;
    }

    // delete the value in head
    queue[head] = null;
    size--;

    // if the array is not empty
    // adjust the head index
    if (head !== tail) {
        if (head + 1 < mSize) {
            head++;
        } else {
            head = 0;
        }
    }

    return true;
};

/**
 * Gets the front item from the queue. If the queue is empty, return -1.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (size === 0) {
        return -1;
    }

    return queue[head];
};

/**
 * Gets the last item from the queue. If the queue is empty, return -1.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (size === 0) {
        return -1;
    }
    
    return queue[tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return size === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return size === mSize;
};