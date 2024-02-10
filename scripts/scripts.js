var globalVariable = "I'm in global scope"; 

function myFunction(_) {
    //This function can access globalVariable
    
    console.log(globalVariable);
}

myFunction(); 

function myFunction2(){
    var localVar="I'm in a local scope";
    
    console.log(localVar);

    if (true){
        let blockVariable = "I'm a block scope";
        console.log(blockVariable);
    }

}

myFunction2();

function planeTicket(destination,price){
        console.log("Traveling to ..." + destination);
        return price*1.11;
}

function calculateProfits(){var price1=planeTicket("Italy",100);
var price2=planeTicket("Amsterdam",200);
var price3=planeTicket("Barcelona",150);


    console.log(price1+price2+price3);
}

calculateProfits()
// Accessing blockVariable here would result in an Error  