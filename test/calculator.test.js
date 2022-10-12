const calc = require("../source/calculator");

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
let arrVals = {
        lenghtOfArray:2,
        averageValueInArray:4,
        minValueInArray:2,
        maxValueInArray:6
    }
describe("third group of calculator tests", ()=>{
   test("if values in array are either string or undefined", ()=>{
      expect(calc.analyzeArrayOfNums([2,6])).toEqual(arrVals);
   })
})