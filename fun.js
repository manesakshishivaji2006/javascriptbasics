//syntax  function
//defination
function sayMyname(){
    console.log("sakshi mane")
}
//use
sayMyname();
function counting(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
counting();
 function printnumber(num){
    console.log("printing number: ", num);
 }
 printnumber(5)

 function getsum(a,b,c){
    let sum = a+b+c;
    return sum;
 }
 let ans= getsum(2,4,5);
 console.log(ans)
 function getmyname(firstname, lastname ){
 let fullname = firstname + "  "+lastname;
  return fullname;
 }
 let fullname = getmyname("sakshi","mane")
console.log("full name :", fullname)

let getmultiplication = function(a,b){
    return a*b;
}
 let mul =getmultiplication(2,5);
 console.log("multipliation :", mul)