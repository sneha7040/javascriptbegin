// how to create an array  in javascript
// let mixed = ["mango","sneha",4,null,undefined];
// console.log(mixed);
// we can put different types of datatype in an array in javascript unlike c and c++




// let fruits = ["mango","pineapple","litchi","orange"];
// console.log(fruits);



// how to find length of an array
let fruits = ["mango","pineapple","litchi","orange"];
 //    index=[0,          1          2        3]
 let s =fruits.length-1;
console.log(fruits[fruits.length-2]); 






// push operation
// Appends new elements to the end of an array, and returns the new length of the array
// let fruits = ["mango","pineapple","litchi","orange"];
// let new_length=fruits.push("banana");
// console.log(fruits.push("banana")); 
// console.log(fruits);
// console.log(new_length);





// pop operation 
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let car = ["tesla","hyndai","marutisuzuki"];
let last_element = car.pop();
console.log(car);
console.log(last_element);




// unshift operation 
// Inserts new elements at the start of an array, and returns the new length of the array.
let languages = ["c","c++","java","python","c#"];
let new_length1= languages.unshift("ruby");
console.log(languages);
console.log(new_length1);






// shift operation 
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let flowers = ["rose","sunflower","lotus","merrygold"];
let first_element1 = flowers.shift();
console.log(flowers);
console.log(first_element1);




// how to clone an array 

// slice method
// let subjects = ["dbms","opearating system","theory of computation"];
// let authors = ["rabibdranath tagore","kazi nazrul islam","sukumar roy"];
// let g =[ authors.subjects.slice(0)] ;
// console.log(authors);



// spread operator
// let subjects = ["dbms","opearating system","theory of computation"];
// let authors = ["rabibdranath tagore","kazi nazrul islam","sukumar roy"];
// let g =[...authors,...subjects];
// console.log(g);





// concat two arrays 
// let subjects = ["dbms","opearating system","theory of computation"];
// let authors = ["rabibdranath tagore","kazi nazrul islam","sukumar roy"];
// let g =  [].concat(authors);
// console.log(g);





// for in loop in javascript 
// print array with the help of for in loop 
// with the help of for in loop we can return the index number of an array 
let subject = ["dbms","opearating system","theory of computation"];
for (  k   in subject){
    console.log(k);
}




// for of loop in JS
// print array with the help of for of loop 
// with the help of for of loop we can return the value of an array 
// let authors = ["rabibdranath tagore","kazi nazrul islam","sukumar roy"];
// for(l of authors){
//     console.log(l);
// }



// for loop to print an array in js 
// let authors = ["rabibdranath tagore","kazi nazrul islam","sukumar roy"];
// for(i=0;i<=2;i++){
//     console.log(authors[i]);
// }






// do-while loop to print an array 
// let authors = ["rabibdranath tagore","kazi nazrul islam","sukumar roy"];
// let i=0;
// do {
//     console.log(authors[i]);
//     i++;
// }while(i<=2)







// while loop to print an array 
let authors = ["rabibdranath tagore","kazi nazrul islam","sukumar roy"];
let i=0;
while(i<=2) 
{
    console.log(authors[i]);
    i++;
}



// array destructuring 
// const myarray =["value1","value2"];
// let myvar1 = myarray[0];
// let myvar2 = myarray[1];
// console.log("value of my var1:",myvar1);
// console.log("value of my var2:",myvar2);
// let[myvar1,myvar2]=myarray;



// important array method 
// filter method 

// const num =[4,5,6,7,9];

// const iseven=(number)=>{
//     return number %2===0;
// }
// const evennum=num.filter(iseven);
// console.log(evennum);



// sort method 
// ASCII TABLE
// const numbers=[5,9,1200,400,3000];
// numbers.sort();
// console.log(numbers);

// numbers.sort((a,b)=>{
//     return a-b;
// });
// console.log(numbers);





// find method 
// const myarray =["hello","dog","cat","lion"];

// function islength3(string){
//     return string.length===3;
// }
// const ans = myarray.find(islength3);
// console.log(ans);
 




// every method 
// const numbers = [2,4,6,9,10];

// function iseven(number){
//     return number % 2 ===0;
// }

// const ans = numbers.every(iseven);
// console.log(ans);



// some method 

// const numbers = [2,4,6,9,10];

// function iseven(number){
//     return number % 2 ===0;
// }

// const ans = numbers.some(iseven);
// console.log(ans);



// fill method 
const myarray =[1,2,3,4,5,6,7,8];
myarray.fill(0,2,5);
console.log(myarray);



// splice method 


















