function calculate(){
   let bill = parseInt(document.getElementById("bill").value);
   let tip = parseInt(document.getElementById("tip").value);
   let numOfPeople = parseInt(document.getElementById("numOfPeople").value);

    let total = (bill + (bill *(tip / 100))) / numOfPeople;

   document.getElementById("total").innerHTML = total.toFixed(2);

}