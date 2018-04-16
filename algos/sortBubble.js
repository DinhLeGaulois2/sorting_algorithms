var sortBubble = {
    numbers:[],


    getSortedList:function(){
        var t=0;
        for(var i=sortBubble.numbers.length-1 ; i>=0 ; i--)
            for(var j=0 ; j<i ; j++){
                if(sortBubble.numbers[j]>sortBubble.numbers[j+1]){
                    t = sortBubble.numbers[j];
                    sortBubble.numbers[j] = sortBubble.numbers[j+1];
                    sortBubble.numbers[j+1] = t;
                }
            }

        return sortBubble.numbers.reduce((a, b) => a + ", " + b);
    }
};