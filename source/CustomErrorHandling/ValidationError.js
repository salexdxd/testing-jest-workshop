class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name="ValidationError";
    }
}

function numberValidator(num){
    if(isNaN(num)){
        throw new ValidationError("Value is not a number");
    }
}

function divValidator(result){
    if(!isFinite(result)){
        throw new ValidationError("Can't divide with zero!");
    }
}

module.exports = { numberValidator, ValidationError, divValidator};
