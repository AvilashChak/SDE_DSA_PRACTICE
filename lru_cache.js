// LRU Cache
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

// Approach
// Doubly Linked List (Node class): Each node stores a key, value, and pointers to prev and next.
// Map for O(1) lookups: this.map stores key-node pairs for quick access.
// Remove & Insert Operations:
// remove(node): Deletes a node from the list and removes it from the map.
// insert(node): Adds a node to the front of the list (most recently used).
// Eviction Strategy:
// If the cache exceeds capacity, the least recently used item (before tail) is removed.
// This implementation ensures O(1) time complexity for both get and put operations.
// TC - O(1) and SC - O(1)

// Solution
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        if(this.map.has(key)) {
            let node = this.map.get(key);
            this.remove(node);
            this.insert(node);
            return node.value;
        }
        return -1;
    }

    put(key, value) {
        if(this.map.has(key)) {
            this.remove(this.map.get(key));
        }
        if(this.map.size === this.capacity) {
            this.remove(this.tail.prev);
        }
        this.insert(new Node(key, value));
    }

    remove(node) {
        this.map.delete(node.key);
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insert(node) {
        this.map.set(node.key, node);
        node.next = this.head.next;
        node.next.prev = node;
        this.head.next = node;
        node.prev = this.head;
    }
}

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // returns 1
cache.put(3, 3); // evicts key 2
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4