function getValueFromInput(id){
    const inputValue = document.getElementById(id).value;
    const numberValue = parseFloat(inputValue);
    return numberValue;
}

function getValueFromText(id){
    const textValue = document.getElementById(id).innerText;
    const numberValue = parseFloat(textValue);
    return numberValue;
}

function donation(btnId, valueId, fund){
    document.getElementById(btnId).addEventListener('click', function(event){
        event.preventDefault();
        const donateAmount = getValueFromInput(valueId);
        let currentBalance = getValueFromText('currentBalance');
        let donateFund = getValueFromText(fund);


        if(donateAmount > 0 && currentBalance >= donateAmount){
            currentBalance = currentBalance - donateAmount;
            donateFund = donateFund + donateAmount;
            document.getElementById('currentBalance').innerText = currentBalance;
            document.getElementById(fund).innerText = donateFund;

            // Clear the input field after operation
            document.getElementById(valueId).value = '';
            my_modal_1.showModal();            
        }
        
        else{
            if(isNaN(donateAmount) || donateAmount<=0){
                window.alert('Enter a valid number');
            }
            else{
                window.alert('Insufficient Balance');
            }
        }
        console.log(donateAmount);
        
    });
}
