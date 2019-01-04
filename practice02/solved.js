
function selfPower(num){
    let result = 0;
    for(let i =1; i<=num; i++){
        result = (result) + (Math.pow(i,i));
    }
    return result;
}

// lets test 10 and it should result 10405071317
console.log(selfPower(10));
