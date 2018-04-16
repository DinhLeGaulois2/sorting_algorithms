var sortMerge = {
    numbers:[],
    //!!!!!!!! a1 and a2 are SORTED lists ....
    merging:function(a1, a2){ 
        var list=[];
        var i=0, j=0, isOk=false;
        while(!isOk){
            if(a1[i]<=a2[j]){
                list.push(a1[i]);
                i++;
                // if the list "a1" is done, we put the a2's elements left into the common list
                if(i>=a1.length){ 
                    for(;j<a2.length;j++)
                        list.push(a2[j])
                    isOk = true;
                }
            }
            else{ // if the list "a2" is done, we put the a1's elements left into the common list
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

    mergeSort:function(a1, a2){
        var middle1=0, middle2=0;
        if((a1.length==1)||(a2.length==1)){
            if(a1.length==1){ 
                if(a2.length==1) return sortMerge.merging(a1, a2);
                else{
                    middle2 = Math.floor(a2.length/2);
                    // as long as we don't have "array" of one element, we keep "slicing"
                    return sortMerge.merging(a1, sortMerge.mergeSort(a2.slice(0, middle2), a2.slice(middle2, a2.length)));
                }
            }
            if(a2.length==1){
                if(a1.length==1) return sortMerge.merging(a1, a2);
                else{
                    middle1 = Math.floor(a1.length/2);
                    // as long as we don't have "array" of one element, we keep "slicing"
                    return sortMerge.merging(a2, sortMerge.mergeSort(a1.slice(0, middle1), a1.slice(middle1, a1.length)));
                }
            }
        }
        else{ // recursivity
            middle1 = Math.floor(a1.length/2);
            middle2 = Math.floor(a2.length/2);            
            // as long as we don't have "array" of one element, we keep "slicing"
            return sortMerge.merging(sortMerge.mergeSort(a1.slice(0, middle1), a1.slice(middle1, a1.length)),
                sortMerge.mergeSort(a2.slice(0, middle2), a2.slice(middle2, a2.length)));
        }        
    },

    getSortedList:function(){
        var middle = Math.floor(sortMerge.numbers.length/2);
        var list = sortMerge.mergeSort(sortMerge.numbers.slice(0, middle), sortMerge.numbers.slice(middle, sortMerge.numbers.length));
        return list.reduce((a,b) => a + ", " + b);
    },

    getOriginalList:function(){
        return sortMerge.numbers.reduce((a,b) => a + ", " + b);
    },
};