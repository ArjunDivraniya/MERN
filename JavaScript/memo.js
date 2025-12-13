let sum = 0;
const calc = (n) =>{
    for(let i = 0; i<=n ; i++){
        sum+=i;
}
    return sum;
}

console.time();
console.log(calc(5));
console.timeEnd();

const memoize = (fun) => {
    let cache = {};
    return function (...args){
        let n = args[0];
        console.log(n)
    }
}

let memo  = memoize(calc);
memo(5);