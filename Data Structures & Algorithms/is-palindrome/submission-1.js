class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const v = s.replace(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "");

        let st = 0;
        let ed = v.length - 1;


        while(st <= ed){
            if(v.charAt(st).toLowerCase() !== v.charAt(ed).toLowerCase()){
                return false;
            }

            st++;
            ed--;
        }

        return true;
    }
}
