class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = l + 1;

        let maxProfit = 0;

        while(r <= (prices.length - 1)){
            const buyDay = prices[l];
            const sellDay = prices[r];

            if(buyDay < sellDay){
                if(sellDay - buyDay > maxProfit){
                    maxProfit = sellDay - buyDay; 
                }
             

            }else{
                l = r;
             
            }

               r++;
        }

        return maxProfit;
    }
}
