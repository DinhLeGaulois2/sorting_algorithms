var sortHeap = {
    numbers:[],

    // Construction of a binary tree (of a Array) with property: every parent is greater (in value)
    //    then its children. Strategy: we start with the ... last descendants and go up to the root
    //    ----->  parentOfParent = Math.floor(childPosition/2)     // any of the children's position
    maxHeap:function(ind){
        var t=0, parentInd=0;
        var tempoInd = ind;
        while(tempoInd>0){
            // parentOfParent = Math.floor(childPosition/2)     // any of the children's position
            parentInd = Math.floor((tempoInd-1)/2);
            if(tempoInd%2==0){ // odd number
                if(sortHeap.numbers[tempoInd]>sortHeap.numbers[tempoInd-1]){
                    // if a child's value is greater then its parent
                    // we exchange its value with the latter
                    if(sortHeap.numbers[tempoInd]>sortHeap.numbers[parentInd]){
                        t = sortHeap.numbers[tempoInd];
                        sortHeap.numbers[tempoInd] =  sortHeap.numbers[parentInd];
                        sortHeap.numbers[parentInd] = t;
                    }
                }
                else{
                    // if a child's value is greater then its parent
                    // we exchange its value with the latter
                    if(sortHeap.numbers[tempoInd-1]>sortHeap.numbers[parentInd]){
                        t = sortHeap.numbers[tempoInd-1];
                        sortHeap.numbers[tempoInd-1] =  sortHeap.numbers[parentInd];
                        sortHeap.numbers[parentInd] = t;
                    }                
                }
                tempoInd -= 2;
            }
            else{
                // if a child's value is greater then its parent
                // we exchange its value with the latter
                if(sortHeap.numbers[tempoInd]>sortHeap.numbers[parentInd]){
                    t = sortHeap.numbers[tempoInd];
                    sortHeap.numbers[tempoInd] =  sortHeap.numbers[parentInd];
                    sortHeap.numbers[parentInd] = t;
                }            
                tempoInd--;
            }
        }
    },

    heapSort:function(){
        for(var i=(sortHeap.numbers.length-1) ; i>0 ; i--){
            sortHeap.maxHeap(i);
            var t = sortHeap.numbers[i];
            sortHeap.numbers[i] = sortHeap.numbers[0];
            sortHeap.numbers[0] = t;
        }
    },

    getSortedList:function(){
        sortHeap.heapSort();
        return sortHeap.numbers.reduce((a,b) => a + ", " + b);
    }
};