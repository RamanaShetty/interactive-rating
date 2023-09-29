const rating_section = document.querySelector('.rating');
const thank_section = document.querySelector('.thank');
const rating_button = document.querySelectorAll('.btn');
const submit_button = document.getElementById('submit');
const show_rate = document.getElementById('show_rate');

submit_button.addEventListener("click",()=>{
    rating_section.classList.add("hidden");
    thank_section.classList.remove("hidden");
})

rating_button.forEach((rating)=>{
    rating.addEventListener("click",()=>{
        show_rate.innerHTML = rating.innerHTML;
    })
})