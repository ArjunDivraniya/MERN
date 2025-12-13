// setTimeout(() => {
//     console.log("Hello Students")
//   }, 1000);
  
//   setTimeout(() => {
//     console.log("Welcome to Javascript")
//   }, 2000);
  
  
//   setTimeout(() => {
//     console.log("Lets learn SetTiomeout")
//   }, 3000);
// function wash (dry){
//     setTimeout(() => {
//         console.log("Washing Done")
//       dry()
//       }, 7000);
// }

//   function dry (iron){
//     setTimeout(() => {
//         console.log("Drying Done")
//         iron()
//       }, 3000);
//   }
  
  
//   function iron (){
//     setTimeout(() => {
//         console.log("Iron Done")
//       }, 5000);
//   }
 
// wash(()=>{
//     dry(() => {
//         iron()
//     })
// })
// wash(dry)
// dry(iron)

// function order (Resto) {
//     setTimeout(()=> {
//         console.log("Order done")
//         Resto()
//     },5000)
// }


// function Resto (pre) {
//     setTimeout(()=> {
//         console.log("Restorent Acssept")
//         pre()
//     },2000)
// }


// function pre (delivery) {
//     setTimeout(()=> {
//         console.log("Prepering the order")
//         delivery()
//     },10000)
// }


// function delivery () {
//     setTimeout(()=> {
//         console.log("delivery Done")
//     },2000)
// }

// order(()=>{
//     Resto(()=> {
//         pre(()=> {
//             delivery()
//         })
//     })
// })



// function green (yellow) {
//   setTimeout(()=>{
// console.log("Green")
// yellow()
//     },5000)
// }


// function yellow (red) {
//     setTimeout(()=>{
// console.log("Yellow")
// red()
//     },2000)
// }


// function red () {
//     setTimeout(()=>{
// console.log("red")
//     },3000)
// }



// setInterval(()=>{
//     green(()=> {
//         yellow(()=>{
//             red()
//         })
//     })
//         },2000)


// let arr =['green','yellow','red']
// let i=0;
// if(arr[i]=='green'){
//     setInterval(()=> {
  
//         console.log(arr[i])
       
     
// },5000)
// }else if (arr[i]=='yellow'){
// setInterval(()=> {
  
//         console.log(arr[i])
    
// },2000)}else{
//     setInterval(()=> {
  
//         console.log(arr[i])
       
// },3000)
// }
// i++
// i=i%arr.length


// for(let i=0;i<6;i++){
//     setTimeout(()=> {
//         console.log(i)
//     },0)
// }
// console.log(i)
// var i=0;     
// var i=2;
// console.log(i)

// let j=0;
// // let j=2;
// console.log(j)



// var value=5
// function print (n){
//     if(n==0) return
// console.log(n);
// print(n-1)
// }

// print(value)


// var n=5
// function factoriol(num){
// if(num==0 || num==1)return 1
// var ans =num*factoriol(num-1)
// return ans;
// }

// console.log(`factoriol of ${n} is ${factoriol(n)}`)


// var number =1
// var ans=0

// function sum (snum){
//     if(snum==6)return 0

//     ans = snum + sum (snum +1)
//     return ans
// }

// console.log(sum(number))



// var nextnum=0;
// var number=5


// function fibonaci(number){


//     if(number==0){
        
//         return 0
//     }

//     if(number == 1 ){
      
//         return 1
//     }

//     nextnum= fibonaci(number-2) + fibonaci(number-1)
//     return nextnum
// }


// console.log(fibonaci(number))

// var num=3
// let newPromise = new Promise((resolve, reject) => {
//    if(num%2==0){
//     resolve("even")
//    }else{
//     reject("odd")
//    }
// })

// newPromise.then((result) => console.log(result)).catch((error)=> console.log(error))



// function order () {
//   return  new Promise ((resolve,reject) => {
//         setTimeout(()=> {
//             console.log("Order done")
//             resolve()
//         },5000)
    
//     })
  
// }


// function Resto () {
//  return   new Promise ((resolve,reject) => {
//         setTimeout(()=> {
//             console.log("Restorent Accsept")
//             resolve()
//         },2000)
    
//     })
   
// }


// function pre () {
//      return new Promise ((resolve,reject) => {
//         setTimeout(()=> {
//             console.log("Prepering the order")
//         reject()
//         },1000)
    
//     })
   
// }


// function delivery () {
//    return new Promise ((resolve,reject) => {
//         setTimeout(()=> {
//             console.log("delivery Done")
//             resolve()
//         },2000)
    
//     })
  
// }

// order().then(()=>Resto()).then(()=>pre()).then(()=> delivery()).catch((err)=> console.log(err));



var arr=[1,2,3,5]
var i=0
var j=0
var ans=false
while(i<arr.length -1){
    if(arr[i]== arr[j]){
       ans =true
    }
        
        if(j>=arr.length-1){
            i++
            j=i+1
            
        }
        j++;
    

}

console.log(ans)