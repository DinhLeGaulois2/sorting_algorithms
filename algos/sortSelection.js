var sortSelection = {
    numbers:[],

    getSortedList:function(){
        for(let i=0 ; i<(sortSelection.numbers.length-1) ; i++){
            let minInd = i;
            for(let j=i+1 ; j<sortSelection.numbers.length ; j++)
                if(sortSelection.numbers[j] < sortSelection.numbers[minInd])
                    minInd = j;
            if(minInd != i){
                let n = sortSelection.numbers[i];
                sortSelection.numbers[i] = sortSelection.numbers[minInd];
                sortSelection.numbers[minInd] = n;
            }
        }
        return sortSelection.numbers.reduce((a,b) => a + ", " + b);
    }
};