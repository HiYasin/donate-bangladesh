const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');
const donationTab = document.getElementById('donation');
const historyTab = document.getElementById('history');


donationBtn.addEventListener('click', function(event){
    event.preventDefault();
    historyTab.classList.add('hidden');
    donationTab.classList.remove('hidden');
    historyBtn.classList.remove('bg-green');
    donationBtn.classList.add('bg-green');
});

historyBtn.addEventListener('click', function(event){
    event.preventDefault();
    donationTab.classList.add('hidden');
    historyTab.classList.remove('hidden');
    donationBtn.classList.remove('bg-green');
    historyBtn.classList.add('bg-green');
});

const blog = document.getElementById('blog');
const blogTab = document.getElementById('faq');
const home = document.getElementById('home');
const btns = document.getElementById('buttons');

blog.addEventListener('click',function(event){
    event.preventDefault();
    donationTab.classList.add('hidden');
    btns.classList.add('hidden');
    blog.classList.add('hidden');
    home.classList.remove('hidden');
    blogTab.classList.remove('hidden');
    historyTab.classList.add('hidden');
    historyBtn.classList.remove('bg-green');
});

home.addEventListener('click',function(event){
    event.preventDefault();

    donationTab.classList.remove('hidden');
    donationBtn.classList.add('bg-green');

    btns.classList.remove('hidden');
    blog.classList.remove('hidden');
    home.classList.add('hidden');
    blogTab.classList.add('hidden');
});