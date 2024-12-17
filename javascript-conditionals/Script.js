////let age= 17;
////if (age >= 18){
////    alert("You are an adult!");
////}
////
////else if(age >= 13){
////    alert("You are a teenager");
////    
////}
////else{
////    alert("you are a child :(");
////}
//
////else{
////    alert("You are not an adult :( ");
////}
//
////let score = 87;
////
////if (score >= 90){
////    alert("You get an A woooo");
////}
////if (score>=80){
////   alert ("You got a B+");
////}
////
////if(score <= 70){
////   alert("You get a... C.. it's average");
////
////}
////
////else{
////    alert("disgrace.... you study");
////}
//
//let temp=28;
//let condition="sunny";
//if(temp >= 70 && condition == "sunny"){
//    alert("Wear a t-shirt");
//}
//
//else if (temp > 40 && (condition =="rainy"|| condition =="stormy")){
//    alert("wear a rain coat");
//}
//
//else if (temp <= 30 || condition=="snowy"){
//    alert ("wear a winter coat");
//}
//
//else if (temp > 30 && temp <50){
//    alert("wear a coat ");
//}
//else if (temo >= 50 && temp < 70){
//    alert("wear a hoodie");
//}



//function generate() {
//    const a1 = document.getElementById("uname1input").value;
//    const n1 = document.getElementById("uname1input").value;
//
//    document.getElementById("a1").innerText = a1;
//    document.getElementById("n1").innerText = n1;

const username = "szaismyqueen";
let password= "iloveoreos123";

    
function login (){
    let message= document.getElementById("yourMessage");
    let u = document.getElementById("username").value;
     let p = document.getElementById("password").value;
    if (u == username && p==password){
        
       message.innerText = "Logged in";
         message.style.color = "green";
    }
    else if (u == username && p==password){
         message.innerText = "paswoord wrong ";
    }
    
    else if ( u != username && p == password ){
          message.innerText = "Logged out";
}
    else{
          message.innerText = "both are inccorrect";
        message.style.color = "red";
    }
    

}