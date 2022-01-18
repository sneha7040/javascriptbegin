// function add (a,b)
// {
//    let c;
//    c=a+b; 
//    console.log(c);
// }
// add(10,45);





// function expression 
// let add = function(a,b){
    
//         let c;
//         c=a+b; 
//         console.log(c);
     
     
// }
// add(10,45);





// arrow function 
// let add =(a,b)=>{
//     let c;
//     c=a+b;
//    console.log(c);
// }
// add(4,2)




// function using return keyword
// function sum(k,l){
    
//     return(k+l)
// }
// let result = sum(4,3);
// console.log(result);
// console.log(sum(4,8));




// default parameter in function 
let mul =(a=1,b=0)=>{
  return(a+b);
}
console.log(mul(4,2));




// rest parameter
// let sub = (a,b,...y)=>{
//    console.log(y); 
// }
//  sub(1,2,3,4,5,6,7,8,9);

 let sub = (...y)=>{
    console.log(y); 
 }
  sub(1,2,3,4,5,6,7,8,9);



//   we can create fuction inside function 
// let myfunc=()=>{
//     console.log("this is my func");
//     let func1=(a,b)=>{
//         let c =a+b;
//         console.log(c);
//     }
//     func1(4,1)
//     let func2=()=>{

//     }
// }
// myfunc();

// callback function 
function myfunc(a){
    console.log(a);
    a();
    
}
myfunc(myfunc2);

function myfunc2(){
    console.log("inside my func2");
}


// function returning function 
function myfunc(){
    function hello(){
        console.log("hello world");
    }
    return hello; 
}
const ans = myfunc();
console.log(ans);
ans();







