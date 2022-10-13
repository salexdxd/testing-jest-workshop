const { authOrigin } = require("firebase-tools/lib/api");
const myValidator = require("../source/CustomErrorHandling/ValidationError")

function addCalculator(...args){
    try{
        let myNum = 0;
        args.forEach((x)=>{
            if(myValidator.numberValidator(x)){
                console.error;
            }
            myNum+=x
        })
        return myNum;
    } catch (error){
        console.error;
    }
}

function subCalculator(a,b){
    try{
        if(!myValidator.numberValidator(a) && !myValidator.numberValidator(b)){
            return a-b;
        }
    } catch (error){
        throw error;
    }
}

function divCalculator(a,b){
    try{
        if(myValidator.divValidator(a/b) || a!==0 || b!==0){
            return a/b;
        }
    } catch (error){
        throw error;
    }
}

function multCalculator(a,b,result=0){
    try{
        if(!myValidator.numberValidator(a) && !myValidator.numberValidator(b)){
            result = a*b
            return result;
        }
    } catch (error){
        throw error;
    }
}

function analyzeArrayOfNums(arrayOfNums=[]){
    return getValuesFromArray(arrayOfNums)
}

// arrayLen, avgValue, minValue, maxValue
function getValuesFromArray(arrayOfNums=[]){

    let arrVals = {
        lenghtOfArray:0,
        averageValueInArray:0,
        minValueInArray:0,
        maxValueInArray:0
    }

    if(!validateNumsInArray(arrayOfNums)){
        arrayLen=arrayOfNums.length;
        avgVal = arrayOfNums.reduce((sum,num) => sum + num, 0) / arrayOfNums.length;
        minVal = arrayOfNums.reduce((a, b) => Math.min(a, b));
        maxVal = arrayOfNums.reduce((a, b) => Math.max(a, b));

        arrVals.lenghtOfArray=arrayLen;
        arrVals.averageValueInArray=avgVal;
        arrVals.minValueInArray=minVal;
        arrVals.maxValueInArray=maxVal;

        return arrVals;
    }
}

function validateNumsInArray(arrayToValidate=[]){
    arrayToValidate.forEach(x=>{
        if(x instanceof String || x === undefined){

            throw new myValidator.ValidationError("Value can't be string or undefined!")
        }
    })
}












module.exports = {addCalculator, subCalculator, divCalculator, multCalculator, analyzeArrayOfNums};