const calc = require("../source/calculator");
const myMock = require("../source/jestMock");

// describe("first group of calculator tests", ()=>{
//    test("addition of 2 and 3 to equal 5", ()=>{
//       expect(calc.addCalculator(2,2,2)).toBe(6);
//    });

//    test("subtraction of 8 and 3 to equal 5", ()=>{
//       expect(calc.subCalculator(8,3)).toBe(5);
//    });

//    test("division of 15 and 3 to equal 5", ()=>{
//       expect(calc.divCalculator(15,0)).toBe(5);
//    });

//    test("multiplication of 2 and 3 to equal 6", ()=>{
//       expect(calc.multCalculator(2,3)).toBe(6);
//    });
// })

// describe("second group of calculator tests", ()=>{
   // test("addition of numbers mixed with strings", ()=>{
   //    expect(calc.addCalculator(2,2,4)).toBe(8);
   // });

   // test("of numbers mixed with strings", ()=>{
   //    expect(calc.subCalculator(8," ")).toBe(5);
   // });

   // test("division of of numbers mixed with strings", ()=>{
   //    expect(calc.divCalculator(15," ")).toBe(5);
   // });

   // test("multiplication of numbers mixed with strings", ()=>{
   //    expect(calc.multCalculator(2," ")).toBe(6);
   // });
// })
// let arrVals = {
//         lenghtOfArray:2,
//         averageValueInArray:4,
//         minValueInArray:2,
//         maxValueInArray:6
//     }
// describe("third group of calculator tests", ()=>{
//    test("if values in array are either string or undefined", ()=>{
//       expect(calc.analyzeArrayOfNums([2,6])).toEqual(arrVals);
//    })
// })


// let response = fetch('https://api.nationalize.io/?name=nathaniel')
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));


// let myObj = JSON.parse(response)

let existingArray = {"country":[{"country_id":"RS","probability":0.1},{"country_id":"HR","probability":0.04},{"country_id":"NG","probability":0.3}],"name":"newCountry"}

let objToPush = {"country":[{"country_id":"KEKW","probability":0.1}]}

// myObj.push(objToPush)

let myTestNewArray = []
myTestNewArray.push(existingArray)
myTestNewArray.push(objToPush)

describe("fourth group of testing - mock api test", ()=>{
   test("add value to array",()=>{
      const toExpect = jest.fn(()=>existingArray)

      expect(myMock.addValuesToArray(toExpect,objToPush)).toMatch(existingArray.push(objToPush));
   })
})


// const axios = require("axios");
// const { italic } = require("colorette");
// jest.mock('axios');


// test("multiplication of numbers mixed with strings", ()=>{

//    async function myDataxd() {
//       let response = await axios.mockResolvedValue({
//           method: 'get',
//           url: 'https://api.nationalize.io/?name=nathaniel',
//           json: true
//       });
//       console.log(response.data)
//       return response.data;
//    }
//    const myMockedData = myDataxd().mock
   
//    expect(myMock.myMocks).toBe("asd");
//    });

// test('gets data from api', async () => {
//   axios.get.mockResolvedValue('https://api.nationalize.io/?name=nathaniel');

//   const myRes = myMock.getUserAsync();
//   expect(myRes).toEqual({'country':"ctn"});
// });








// const add = jest.fn(()=>3)

// test('add', ()=>{
//    expect(add(1,2).toBe(3));
// })