function arraySum(input){
    newArray = [];

    for (let i = 0; i < input.length; i++) {
        sum =1;

        for(let j = 0; j < input.length; j++){
            if(i != j){
                sum *= input[j];
            }
        }
        newArray[i] = sum;
    }
}

arr = [1,2,3,4,5];
console.log(arraySum(arr));