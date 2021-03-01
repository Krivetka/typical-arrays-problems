
exports.min = function min (array) {
     if(array != null && array.length!=0){
         minim=array[0];
         for(i=0; i<array.length;i++){
             if(array[i]<minim) minim=array[i];
         }
         return minim;
     }
    return 0;
}

exports.max = function max (array) {
    if(array != null && array.length!=0){
        maxim=array[0];
        for(i=0; i<array.length;i++){
            if(array[i]>maxim) maxim=array[i];
        }
        return maxim;
    }
    return 0;
}

exports.avg = function avg (array) {
       if(array != null && array.length!=0){
         sum=0;
        for(i=0;i<array.length;i++){
            sum+=array[i];
        }
        return (sum/array.length);
     }
  return 0;
}
