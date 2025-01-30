// Merge two sorted list

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Approach
// BF - TC - O((N1 + N2)+log(N1 +N2)) and SC - O(N)
// In this approach we will merge the lists data to a new sorted list. Intially we will take a empty arr and insert the list data in it and sort it.

// Solution

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const arrayToLinkedList = function(arr) {
    let dummy = new Node(0);
    let current = dummy;
    for(let data of arr) {
        current.next = new Node(data);
        current = current.next;
    }
    return dummy.next;
};

const mergeTwoList = function(list1, list2) {
    let arr = [];
    let temp1 = list1;
    let temp2 = list2;

    while(temp1 !== null) {
        arr.push(temp1.data);
        temp1 = temp1.next;
    }

    while(temp2 !== null) {
        arr.push(temp2.data);
        temp2 = temp2.next;
    }

    arr.sort((a, b) => a - b);

    return arrayToLinkedList(arr);
};

const linkedListToArray = function(head) {
    let result = [];
    while(head !== null) {
        result.push(head.data);
        head = head.next;
    }
    
    return result;
};

const list1 = new Node(1);
list1.next = new Node(3);
list1.next = new Node(5);

const list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);

const mergeList = mergeTwoList(list1, list2);
console.log("Sorted lists in arr: ", linkedListToArray(mergeList));

// Optimal - TC - O(N1 + N2) and SC - O(1)
// Here we will not use the extra space ie the arr. We will return in place.

const sortedTwoLinkedList = function(list1, list2) {
    let dummy = new Node(0);
    let current = dummy;

    while(list1 !== null && list2 !== null) {
       if(list1.data <= list2.data) {
            current.next = list1;
            list1 = list1.next;
       } else {
            current.next = list2;
            list2 = list2.next;
       }
       current = current.next;
    }

    if(list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
};

const sortedLinkedList = sortedTwoLinkedList(list1, list2);
console.log("Sorted lists optimized without extra space: ", linkedListToArray(sortedLinkedList));