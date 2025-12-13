// All already create this id gearator but now i show on ui to ganerate by user when click on button with best ui and ux i create html in other file which is create in other file


function generate() {
//   const lowercase = "abcdefghijklmnopqrstuvwxyz";
//     const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    // const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?";
    
    const subset = numbers;
    const length = 6;
    let id = "";
    for (let i = 0; i < length; i++) {
        id += subset[Math.floor(Math.random() * subset.length)];
    }
    return id;
}

console.log(generate())
document.getElementById("generateBtn").addEventListener("click", function() {
    const newId = generate();
    document.getElementById("result").textContent = `Generated ID:  ${newId}`;
});


