
const counterValueElement = document.getElementById("value");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
const increaseButton = document.querySelector("#increase");

let countervalue = 0;

decreaseButton.addEventListener('click', function(){
    counterValue--;
    setCounter(counterValue);
})

resetButton.addEventListener('click', function(){
    counterValue = 0;
    setCounter(counterValue);
})

increaseButton.addEventListener('click', function(){
    counterValue++;
    setCounter(counterValue);
})



const setCounter = function(value){
    counterValueElement.innerText = counterValue;
    if(value > 0){
        counterValueElement.style.color = "purple";
    }else if(value === 0){
        counterValueElement.style.color = "yellow";
    }else{
        counterValueElement.style.color = "red";
    }
}
