// LFU Cache
// Design and implement a data structure for a Least Frequently Used (LFU) cache.

// Implement the LFUCache class:

// LFUCache(int capacity) Initializes the object with the capacity of the data structure.
// int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
// void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
// To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

// When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.

// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, 3, null, -1, 3, 4]

// Explanation
// // cnt(x) = the use counter for key x
// // cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
// LFUCache lfu = new LFUCache(2);
// lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
// lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
// lfu.get(1);      // return 1
//                  // cache=[1,2], cnt(2)=1, cnt(1)=2
// lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
//                  // cache=[3,1], cnt(3)=1, cnt(1)=2
// lfu.get(2);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,1], cnt(3)=2, cnt(1)=2
// lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
//                  // cache=[4,3], cnt(4)=1, cnt(3)=2
// lfu.get(1);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,4], cnt(4)=1, cnt(3)=3
// lfu.get(4);      // return 4
//                  // cache=[4,3], cnt(4)=2, cnt(3)=3


// Approach
// Uses two maps (keyToNode and freqToDLL) for fast lookups.
// Maintains a minFreq tracker for quick LFU eviction.
// Uses Doubly Linked List (DLL) for fast inserts/removals.
// All operations run in O(1) time complexity.
// This approach efficiently handles LFU caching while maintaining LRU order for ties.
// TC - O(1) and SC - O(1)

// Solution
class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.minFreq = 0;
        this.keyNode = new Map();
        this.freqToDLL = new Map();
    }

    get(key) {
        if(!this.keyNode.has(key)) return -1;
        const node = this.keyNode.get(key);
        this.updateFreq(node);
        return node.value;
    }

    put(key, value) {
        if(this.capacity === 0) return;

        if(this.keyNode.has(key)) {
            const node = this.keyNode.get(key);
            node.value = value;
            this.updateFreq(node);
            return;
        }

        if(this.keyNode.size >= this.capacity) this.evictLFU();

        const newNode = new Node(key, value);
        this.keyNode.set(key, newNode);
        this.addToFreqList(newNode, 1);
        this.minFreq = 1;
    }

    updateFreq(node) {
        this.removeFromFreqList(node);
        node.freq++;
        this.addToFreqList(node, node.freq);
        if(!this.freqToDLL.has(this.minFreq)) this.minFreq++;
    }

    evictLFU() {
        const node = this.freqToDLL.get(this.minFreq).removeLast();
        this.keyNode.delete(node.key);
    }

    addToFreqList(node, freq) {
        if(!this.freqToDLL.has(freq)) {
            this.freqToDLL.set(freq, new DoublyLinkedList());
        }
        this.freqToDLL.get(freq).insertAtHead(node);
    }

    removeFromFreqList(node) {
        const list = this.freqToDLL.get(node.freq);
        list.removeNode(node);
        if(list.isEmpty()) this.freqToDLL.delete(node.freq);
    }
}

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
        this.freq = 1;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insertAtHead(node) {
        node.next = this.head.next;
        node.next.prev = node;
        this.head.next = node;
        node.prev = this.head;
    }

    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    removeLast() {
        if(this.isEmpty()) return null;
        let node = this.tail.prev;
        this.removeNode(node);
        return node;
    }

    isEmpty() {
        return this.head.next === this.tail;
    }
}

const lfu = new LFUCache(2);

console.log(lfu.put(1, 1)); // Cache: {1: (1, freq=1)}
console.log(lfu.put(2, 2)); // Cache: {1: (1, freq=1), 2: (2, freq=1)}

console.log(lfu.get(1));    // Returns 1, increases freq of 1 → {2: (2, freq=1), 1: (1, freq=2)}

console.log(lfu.put(3, 3)); // Cache is full, remove LFU key (2) → {1: (1, freq=2), 3: (3, freq=1)}

console.log(lfu.get(2));    // Returns -1 (not found)

console.log(lfu.get(3));    // Returns 3, increases freq of 3 → {1: (1, freq=2), 3: (3, freq=2)}

console.log(lfu.put(4, 4)); // Both 1 and 3 have freq=2, remove LRU (1) → {3: (3, freq=2), 4: (4, freq=1)}

console.log(lfu.get(1));    // Returns -1 (not found)
console.log(lfu.get(3));    // Returns 3, increases freq of 3 → {3: (3, freq=3), 4: (4, freq=1)}
console.log(lfu.get(4));    // Returns 4, increases freq of 4 → {3: (3, freq=3), 4: (4, freq=2)}