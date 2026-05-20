class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let lp = 0;
        let rp = heights.length - 1;

        while(lp < rp){
            const area = Math.min(heights[lp], heights[rp]) * (rp - lp);

            if(area > maxArea){
                maxArea = area;
            } 

            if(heights[lp] < heights[rp]){
                lp++;
            }else{
                rp--;
            }
        }

        return maxArea;
    }
}
