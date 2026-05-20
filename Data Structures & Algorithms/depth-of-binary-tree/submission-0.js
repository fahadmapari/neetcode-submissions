/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (root === null) return 0          // base case: empty = depth 0

        let leftDepth  = this.maxDepth(root.left)   // ask left subtree
        let rightDepth = this.maxDepth(root.right)  // ask right subtree

        return 1 + Math.max(leftDepth, rightDepth)  
    }
}
