function timedelay() {
    let curr = 1;
   

  
    const intervalId = setInterval(() => {
        if (curr <= 5) {
            console.log(curr);
            curr++;
        } else {
           
            clearInterval(intervalId);
        }
          
    }, 1000);
}


timedelay();