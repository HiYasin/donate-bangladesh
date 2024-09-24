function getValueFromInput(id){
    const inputValue = document.getElementById(id).value;
    const numberValue = Number(inputValue);
    return numberValue;
}

function getValueFromText(id){
    const textValue = document.getElementById(id).innerText;
    const numberValue = Number(textValue);
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
                my_modal_2.showModal();
            }
            else{
                my_modal_3.showModal();
            }
        }
    });
}
