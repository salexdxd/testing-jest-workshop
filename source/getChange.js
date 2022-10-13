let totalPrice;
let paidAmount;


function getChangeFromVendingMachine(price, payment){
    let difference = payment-price;
    // difference = Math.abs(difference);
    let currentChange = 0;
    var usedCoins=[];

    


    let coins = [1, 2, 5, 10, 20, 50, 100, 200];
    for(let i = coins.length; i>=0; i--){
        while (true) {
            // let temp;
            if(currentChange+coins[i]>difference){
                break;
            }
            if(currentChange+coins[i]<=difference){
                currentChange+=coins[i]
                usedCoins.push(coins[i])
            } else{
                break;
            }

        }
    }
    return currentChange,usedCoins;

}
// console.log(usedCoins)
console.log(getChangeFromVendingMachine(153, 400))

module.exports = { getChangeFromVendingMachine }