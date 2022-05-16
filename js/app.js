function getPin(){
    const pinNumber = Math.round(Math.random()*10000);
    const pinString = pinNumber + '';
    if(pinString.length == 4){
        return pinString;
    }else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-press').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calInput = document.getElementById('number-value');
    if(isNaN(number)){
        if(number == 'C'){
            calInput.value ='';
        }
    }else{
        const previousValue = calInput.value;
        const newValue = previousValue + number;
        calInput.value = newValue;
    }
    
});

function verify(){
    const pinNum = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('number-value').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if(pinNum == typedNumber){
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }else{
        failMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}