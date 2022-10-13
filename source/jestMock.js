const axios = require("axios");
async function getUserAsync() {
    try{
      let response = await axios({
          method: 'get',
          url: 'https://api.nationalize.io/?name=nathaniel',
          json: true
      });
    //   console.log(response.data)
      return response.data;
    } catch(err){
        // console.error(err);
    }
}

const myResponse = getUserAsync();

const myNewShitArray = []

myNewShitArray.push(myResponse);

function getParsedData(){
    return myResponse;
}
// // let response = axios.get('https://api.nationalize.io/?name=nathaniel')


// // let pareseRes = JSON.parse(JSON.stringify(response))
// let pareseRes = myResponse

// // let resultObj = pareseRes
// let myTestArray = []
// myTestArray.push(pareseRes);

// let objToPush = {"country":[{"country_id":"RS","probability":0.1},{"country_id":"HR","probability":0.04},{"country_id":"NG","probability":0.3}],"name":"newCountry"}

// myTestArray.push(objToPush);


// // resultObj.push(objToPush)



function addValuesToArray(myArray, valueToAdd){
    let myNewArray = []
    // let myObj = JSON.parse(myArray);
    myNewArray.push(myArray);
    myNewArray.push(valueToAdd)
    
    return myNewArray;
}

// let myMocks = jest.mock(getUserAsync)
module.exports = { getUserAsync, getParsedData, myResponse, getUserAsync, myNewShitArray, addValuesToArray }


// module.exports = { addValuesToArray, pareseRes, myTestArray, objToPush, myResponse, getUserAsync, res, getShitData }