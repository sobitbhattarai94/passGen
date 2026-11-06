const button = document.querySelector(".btn")
const passContainer = document.querySelector(".password-container")
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
const input = document.getElementById("input");
let size;

let generatePassword = (size)=>{
    const txt = "QWERTYUIOPASDFGHJKLZXCVBNMzxcvbnmlkjhgfdsaqwertyuiop0123456789*_!@#$&";
    let arr = txt.split("");
    let pass = "";
    
    for(let i = 0 ; i<size;i++){
        let idx = Math.floor(Math.random()*arr.length);
        pass+= arr[idx];
    }
    return pass;    
}

button.addEventListener("click",()=>{
    size = Number(input.value);
    if(size<1 || size>15) {
        alert("enter between 1-15");
        return;
    }
    // if(!size){
    //     alert("please enter the size of the password")
    //     return;
    // }
    // const p1 = generatePassword(size)
    // const p2 = generatePassword(size)
    pass1.textContent=generatePassword(size);
    pass2.textContent=generatePassword(size);
    passContainer.style.visibility = "visible";
});
