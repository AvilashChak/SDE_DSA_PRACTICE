// Vertical order traversal
// Problem Statement: Given a Binary Tree, return the Vertical Order Traversal of it starting from the Leftmost level to the Rightmost level. If there are multiple nodes passing through a vertical line, then they should be printed as they appear in level order traversal of the tree.

// Approach
// We can assign a vertical and level to every node. This will help us in categorising nodes based on their position in the binary tree. Vertical Coordinates (x): The vertical coordinate, denoted as 'x', represents the vertical column in the tree. It essentially signifies the horizontal position of a node in relation to its parent. Nodes with the same 'x' value are aligned vertically, forming a column. Level Coordinates (y): The level coordinate, denoted as 'y', represents the depth or level of a node in the tree. It signifies the vertical position of a node within the hierarchy of levels. As we traverse down the tree, the 'y' value increases, indicating a deeper level.

// We create a map that serves as our organisational structure. The map is based on the vertical and level information of each node. The vertical information, represented by 'x', signifies the vertical column, while the level information, denoted as 'y', acts as the key within the nested map. This nested map utilises a multiset to ensure that node values are stored in a unique and sorted order. With our map structure in place, we initiate a level order BFS traversal using a queue. Each element in the queue is a pair containing the current node and its corresponding vertical and level coordinates. Starting with the root node, we enqueue it with initial vertical and level values (0, 0). During traversal, for each dequeued node, we update the map by inserting the node value at its corresponding coordinates and enqueue its left and right children with adjusted vertical and level information. When traversing to the left child, the vertical value decreases by 1 and the level increases by 1, while traversal to the right child leads to an increase in both vertical and level by 1.

// After completing the BFS traversal, we prepare the final result vector. We iterate through the map, creating a column vector for each vertical column. This involves gathering node values from the multiset and inserting them into the column vector. These column vectors are then added to the final result vector, resulting in a 2D representation of the vertical order traversal of the binary tree.

// Step 1: Create an empty map to store the nodes based on their vertical and horizontal levels.The key of the map ‘x’ represents the vertical column, and the nested map uses ‘y’ as the key for the level. Initialise a ‘multiset’ to store node values at a specific vertical and level to ensure unique and sorted order of nodes.

// Step 2: Initialise a queue for level order BFS traversal. Each element in the queue should be a pair containing the current node and its vertical and level order information as x and coordinates. Enqueue the root node into the queue with its initial vertical and level order values as (0, 0)

// Step 3: While the queue is not empty, pop the front node of the queue:
// Get this nodes vertical ie. ‘x’ and level order ‘y’ information.
// Insert this node into the map at its corresponding coordinate.
// Push the left and right child of the node with their updated horizontal distance and level order.
// For the left child, decrement the vertical value ‘x’ by 1 to indicate a move towards the left. Increment the level value ‘y’ by 1 to indicate a move down to the next level. For the right child, increment the vertical value ‘x’ by 1 to indicate a move towards the right. Increment the level value ‘y’ by 1 to indicate a move down to the next level.
// Enqueue both the left and right children along with their updated vertical and level information into the queue.

// Step 4: After the BFS traversal using the queue is complete, initialise a final result 2D vector ‘ans’.
// Iterate through the map, creating a column vector for each vertical column. Gather the node values from the multiset and insert them into the column vector.
// Add these column vectors to the final result vector ‘ans’.
// Step 5: Return the 2D vector `ans` representing the vertical order traversal of the binary tree.


// TC - O(N log N) and SC - O(N) 

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const findVertical = function(root) {
    // if the tree is empty
    if(root === null) return [];

    // Map to store nodes in format {x: {y: sortedSet}}
    let nodesMap = new Map();

    // Queue for BFS: Each element contains [node, x, y]
    let queue = [[root, 0, 0]];

    while(queue.length > 0) {
        let [node, x, y] = queue.shift();

        if(!nodesMap.has(x)) {
            nodesMap.set(x, new Map());
        }

        if(!nodesMap.get(x).has(y)) {
            nodesMap.get(x).set(y, []);
        }

        // Push node value in sorted order at (x, y)
        nodesMap.get(x).get(y).push(node.val);
        nodesMap.get(x).get(y).sort((a, b) => a - b);

        // Enqueue children with updated cordinates
        if(node.left !== null) {
            queue.push([node.left, x - 1, y + 1]);
        }
        if(node.right !== null) {
            queue.push([node.right, x + 1, y + 1]);
        }
    }

    // Prepare the final result
    let result = [];
    let sortedX = [...nodesMap.keys()].sort((a, b) => a - b);

    for(x of sortedX) {
        let col = [];
        let sortedY = [...nodesMap.get(x).keys()].sort((a, b) => a - b);

        for(y of sortedY) {
            col.push(...nodesMap.get(x).get(y));
        }
        result.push(col);
    }

    return result;
};



// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.left.left.right = new Node(5);
root.left.left.right.right = new Node(6);
root.right = new Node(3);
root.right.right = new Node(10);
root.right.left = new Node(9);

console.log("Vertical Traversal:", findVertical(root));