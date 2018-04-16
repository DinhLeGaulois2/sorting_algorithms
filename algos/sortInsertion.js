var sortInsertion = {
    numbers:[],

    sort:function(){

        var val=0;
        for(let i=1 ; i<sortInsertion.numbers.length ; i++){
            val = sortInsertion.numbers[i];
            for(var j=i ; j>0 ; j--){
                if(sortInsertion.numbers[j-1]>val)
                    sortInsertion.numbers[j] = sortInsertion.numbers[j-1]
                else if(j>1){
                    sortInsertion.numbers[j] = val;
                    break;
                }
            }
            if(j==0) sortInsertion.numbers[j] = val;
        }
    },

    getSortedList:function(){
        sortInsertion.sort();
        return sortInsertion.numbers.reduce((a,b) => a + ", " + b);
    }
};