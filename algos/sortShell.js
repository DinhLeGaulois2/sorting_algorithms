var sortShell = {
    numbers:[],

    merging:function(a1, a2){
        var list=[];
        var i=0, j=0, isOk=false;
        while(!isOk){
            if(a1[i]<=a2[j]){
                list.push(a1[i]);
                i++;
                if(i>=a1.length){
                    for(;j<a2.length;j++)
                        list.push(a2[j])
                    isOk = true;
                }
            }
            else{
                list.push(a2[j]);
                j++;
                if(j>=a2.length){
                    for(;i<a1.length;i++)
                        list.push(a1[i])
                    isOk = true;                    
                }
            }
        }
        return list;
    },

    mergeSort:function(){
        var minPos=0;
        for(var i=0 ; i<sortShell.numbers.length ; i++){
            minPos = i;
            for(var j=i ; j<sortShell.numbers.length ; j++){
                if(sortShell.numbers[j]<sortShell.numbers[minPos]){
                    minPos = j;
                }
            }
            if(minPos!=i){
                var t = sortShell.numbers[i];
                sortShell.numbers[i] = sortShell.numbers[minPos];
                sortShell.numbers[minPos] = t;
            }
        }
    },

    getSortedList:function(){
        sortShell.mergeSort();
        return sortShell.numbers.reduce((a,b) => a + ", " + b);
    }
};