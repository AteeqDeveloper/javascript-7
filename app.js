//--------------------------------
//FIRST ANSWER
//--------------------------------
function applyDiscount(price, discount){
    return price - discount
}
console.log(applyDiscount(1000, 200)); // 800
console.log(applyDiscount(500, 50));   // 450

//--------------------------------
//SECOND ANSWER
//--------------------------------

function checkResult(marks){
    if(marks >= 50 ){
        return "Pass"
    }else{
        return "Fail"
    }
}
console.log(checkResult(70)); // Pass
console.log(checkResult(40)); // Fail

//--------------------------------
//THIRD ANSWER
//--------------------------------
function placeOrder(callback) {
  console.log("Order placed");
  callback(); // calling the callback
}
function orderReady(){
    console.log("Order is Ready!");
    
}
placeOrder(orderReady);

//--------------------------------
//FOURTH ANSWER
//--------------------------------
function snedOTP(cb, otp){
    console.log("Sending OTP....");
    cb();
}
function receiveOTP(){
    console.log("OTP received: 1234");
    
}
snedOTP(receiveOTP);

//--------------------------------
//FIFTH ANSWER
//--------------------------------
let balance = 1000;
function addMoney(balance){
    balance = balance + 500;
    return balance;
}

console.log(`Orignal Balance : ${balance}`);
console.log(`Orignal Balance : ${addMoney(balance)}`);

//--------------------------------
//SIXTH ANSWER
//--------------------------------
function addItem(cart){
    cart.push("Shose")
}

let arr = ["Shirt", "Pent"]

console.log(`Befor : ${arr}`)
addItem(arr);
console.log(`After : ${arr}`)

//--------------------------------
//SEVENTH ANSWER
//--------------------------------
function updateName(user){
    user.name = "Ahmed";
}
let obj = { name : "Ali" }
updateName(obj);
console.log(obj);

//--------------------------------
//EIGHT ANSWER
//--------------------------------






