//common function 01
function getValueFromInput(id){
    const inputValue = document.getElementById(id).value;
    const numberValue = Number(inputValue);
    return numberValue;
}


//common function 02
function getValueFromText(id){
    const textValue = document.getElementById(id).innerText;
    const numberValue = Number(textValue);
    return numberValue;
}


//common function 03
//this function is used to add any transaction into the history
function addHistory(amount,btnId) {

    // Create a new paragraph element to hold the date
    const date = new Date();
    const formattedDate = `Date : ${date.toString()}`;
    const newDateElement = document.createElement("p");
    newDateElement.innerText = formattedDate;
    newDateElement.classList.add("font-light", "text-[16px]");

    // Create a new paragraph element to hold the donate amount and reason
    const newAmountElement = document.createElement("p");
    if(btnId == 'donateBtn1'){
        newAmountElement.innerText = amount + ' Taka Donated For Flood Relief at Noakhali, Bangladesh';
    }
    else if(btnId == 'donateBtn2'){
        newAmountElement.innerText = amount + ' Taka Donated For Flood Relief at Feni, Bangladesh';
    }
    else{
        newAmountElement.innerText = amount + ' Taka Donated For Aid Injured in the Quota Movement';
    }

    // Create a div element to hold the donationi info
    const newHistory = document.createElement("div");
    newHistory.classList.add("rounded-2xl", "border", "p-8","text-xl","font-bold");
    newHistory.appendChild(newAmountElement);
    newHistory.appendChild(newDateElement);

    //Append the div into the history tab
    document.getElementById("history").appendChild(newHistory);
}


//common function 04
//this function is used for transaction of donation
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
            
            //Call common function 03 to add the transaction into history
            addHistory(donateAmount,btnId);
        }
        else{
            if(isNaN(donateAmount) || donateAmount<=0){
                my_modal_2.showModal();
                // Clear the input field after operation
                document.getElementById(valueId).value = '';
            }
            else{
                my_modal_3.showModal();
                // Clear the input field after operation
                document.getElementById(valueId).value = '';
            }
        }
    });
}
