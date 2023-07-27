let counter = 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)


function clickEvent() {
    this.id  == "increase" ? counter += 1 : counter -= 1  
    counterDOM.innerHTML = counter;
    saveData();
}


function saveData() {
    localStorage.setItem("data", counterDOM.innerHTML)
}

function showCounter() {
    counterDOM.innerHTML = localStorage.getItem("data") || 0;
}

showCounter()
