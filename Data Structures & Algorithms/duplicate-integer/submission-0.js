class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsStore = {};

        for(const num of nums ){
            if(num in numsStore){
                return true;
            }else{
                numsStore[num] += 1;
            }
        }

        return false;
    }
}
