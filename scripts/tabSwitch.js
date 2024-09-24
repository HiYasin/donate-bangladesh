const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');

const donationTab = document.getElementById('donation');
const historyTab = document.getElementById('history');


function showTab(btnId, tabId) {
    // Hide all tabs
    donationTab.classList.add('hidden');
    historyTab.classList.add('hidden');

    // Reset button styles
    donationBtn.classList.remove('bg-green');
    historyBtn.classList.remove('bg-green');

    // Add button active states styles
    btnId.classList.add('bg-green');

    // Show required tab
    tabId.classList.remove('hidden');
}

donationBtn.addEventListener('click', function(event){
    event.preventDefault();
    showTab(donationBtn,donationTab);
});

historyBtn.addEventListener('click', function(event){
    event.preventDefault();
    showTab(historyBtn,historyTab);
});