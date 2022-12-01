const fs = require('fs')
let inputData = fs.readFileSync('./Day1/input1.txt', 'utf-8').split(/\n/);

//console.log(inputData);

function subArrys(arr){
    let result = [];
    let subArray = [];
    for (let i = 0; i < arr.length; i++) {
        if(!(arr[i] === "")){
            subArray.push(parseInt(arr[i]));
        }else{
            result.push(subArray);
            subArray = [];
        }
        
    }
    return result;
}

//console.log(JSON.stringify(subArrys(inputData)));

function addSubArrys(arr){
    let sumedArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i].reduce((a,b) => a + b, 0);
        sumedArr.push(sum);
        
    }
    return sumedArr;
}

function maxNumber(arr){
    let highestNumber = arr.reduce((a, b) => {
        return Math.max(a, b);
    })
    return highestNumber;
}

function topThree(arr){
    let first = 0;
    let second = 0;
    let third = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > first) {
            third = second; 
            second = first;
            first = arr[i];
        }else if(arr[i] > second){
            third = second;
            second = arr[i];
        }else if (arr[i] > third){
            third = arr[i];
        }
        
    }
    return first+second+third;
}

console.log(JSON.stringify(topThree(addSubArrys(subArrys(inputData)))));

