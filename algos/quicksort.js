var quicksort = {
    numbers:[],


    quickSortRecursive:function(wall, currentElement, pivot){
        var i=wall, j=currentElement, val=0;

        if(pivot<=wall) return;

        while(j<=pivot-1){
            if(quicksort.numbers[j]<=quicksort.numbers[pivot]){
                val = quicksort.numbers[j];
                quicksort.numbers[j] = quicksort.numbers[i];
                quicksort.numbers[i] = val;
                i++;
                j++;
            }
            else j++;
        }
        val = quicksort.numbers[pivot];
        quicksort.numbers[pivot] = quicksort.numbers[i];
        quicksort.numbers[i] = val;

        quicksort.quickSortRecursive(wall, wall, i-1);
        quicksort.quickSortRecursive(i+1, i+1, pivot);
    },

    getSortedList:function(){
        quicksort.quickSortRecursive(0, 0, quicksort.numbers.length-1);
        return quicksort.numbers.reduce((a,b) => a + ", " + b);
    }
};