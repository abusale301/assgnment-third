


//  We know that 1 kilometer=1000 meter;

function kilometerToMeter(k_meter){
     var result = k_meter * 1000;
     return result;
     
     }

    var totalMeter = kilometerToMeter(50);
    console.log(totalMeter);
    





// Let 1 Unit Watch price is USD 50
//     1 Unit Phone price is USD 100
//     1 Unit Laptop price is USD 500


function budgetCalculator(WatchPrice, PhonePrice, LaptopPrice){
     var W_Price = WatchPrice * 50;
     var P_Price = PhonePrice * 100;
     var L_Price = LaptopPrice * 500;
     var TotalPrice = W_Price + P_Price + L_Price;
     return TotalPrice;
            
     }
 
     var result = budgetCalculator(7, 5, 3);
     console.log(result);







function hotelCost(day){
     var cost = 0;
     if (day <= 10){
          cost = day * 100; 
     }
     else if (day <= 20) { 
          var firstDays = 10 *100;
          var remaining = day - 10;
          var secondDays = remaining * 80;
          cost = firstDays + secondDays;
     }
     else{
          var firstDays = 10 * 100;
          var secondDays = 10 * 80;
          var remaining = day - 20;
          var thirdDays = remaining * 50;
          cost = firstDays + secondDays + thirdDays;
     }
     return cost;     

}
     var dayCount = hotelCost(23);
     console.log(dayCount);







var str = "Rahim, Karim, Ferdows, Safwan, Tuhin";

function megaFriend (str) {
     var strArray = str.split (' ');
     var sortedStrArray = strArray.sort(
          (strA, strB) => {
               return strB.length-strA.length;
          }
     );
     return sortedStrArray[0];
}

console.log(megaFriend(str));








