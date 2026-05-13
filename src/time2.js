const secondsRef = document.querySelector(".seconds2")
const objectRef = document.querySelector(".object")

let total2 = 30

const reverseTimer2 = setInterval(()=>{
    total2 -= 1

    if(total2 <= 10){
        objectRef.style.transition = "250ms cubic-bezier(0.4, 0, 0.2, 1)"
        objectRef.style.transform = "translateX(1500px)"
    }
    if(total2 <= 0){
    clearInterval(reverseTimer2)
    objectRef.classList.remove("object")
    return
    }

    
const seconds = total2 % 60
secondsRef.textContent = seconds < 10? "0" + seconds: seconds
},1000)