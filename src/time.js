const hoursEl = document.querySelector(".hours")
const minutesEl = document.querySelector(".minutes")
const secondsEl = document.querySelector(".seconds")
const messageEl = document.querySelector(".message")
const buttonEl = document.querySelector(".button")

let total = 3600

buttonEl.addEventListener("click", ()=>{
    total -= 60
})

const reverseTimer = setInterval(()=>{
if(total <= 1800){
    messageEl.textContent = "Half time passed"
}
if(total <= 0){
    clearInterval(reverseTimer)
    messageEl.textContent = "END"
    return
}

total -= 1
const hours = Math.floor((total % 86400) / 3600)
const minutes = Math.floor((total % 3600) / 60)
const seconds = total % 60
hoursEl.textContent = seconds < 10? "0" + minutes: hours
minutesEl.textContent = seconds < 10? "0" + minutes: minutes
secondsEl.textContent = seconds < 10? "0" + seconds: seconds
},1000)