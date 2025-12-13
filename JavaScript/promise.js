// let promise = new Promise((thaigyu ,nothyu) => {
//     let exam = false

//     if(exam){
//         thaigyu("Opration successful")
//     }else{
//         nothyu("Opration failed")
//     }
// })
// // console.log(promise)

// promise.then((exam)=> {
//     console.log(exam)
// })
// .catch((error) => {
//     // console.log(error)
//     console.error(error)
// })
// .finally(()=>{
//     console.log("Completed")
// })

// fetch("https://jsonplaceholder.typicode.com/todos/3")
// .then((response) => {
//     let data =response.json()
//     return data;
    
//     // return response. json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.error("Error : " ,error )
// }).finally(()=>{
//     console.log("Data Fetch")
// })


async function fetchData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/3")

        const data = await response.json()
        console.log(data)
    }catch (error){
console.log(error)
    }finally
    {
        console.log("Done")
    }
}
fetchData()

// new Promise((res ,rej ) => {
//     res(2)
// }).then((num) => {
//     console.log(num);
//     return num*2
// }).then((num) => {
//     console.log(num);
//     return num*2
// }).then((num) => {
//     console.log(num);
//     return num
    
// })

// Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/todos/2"),
//     fetch("https://jsonplaceholder.typicode.com/todos/1"),
//     fetch("https://jsonplaceholder.typicode.com/todos/3")
// ]).then((response) => {
//     console.log(response)
// })
// .catch((error)=>
// {
//     console.error(error);
    
// })