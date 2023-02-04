document.addEventListener("DOMContentLoaded",function () {
    const ratingElem = document.querySelectorAll('div.rating')
    const button = document.querySelector('#btn')
    const containerElem = document.querySelector('#container')

    let selectedRating = "";

    ratingElem.forEach((ratingEl)=>{
        ratingEl.addEventListener('click',function (event){
            removeActive();
            selectedRating =
                event.target.innerText ||
                event.target.parentElement.innerText;
            event.target.classList.add("active")
            event.target.parentElement.classList.add("active")
        })
    })
    button.addEventListener('click', function (){
        if(selectedRating !== ""){
            containerElem.innerHTML = `
            <strong>Thank you!</strong>
            <br>
            <br>
            <strong>Feedback: ${selectedRating}</strong>
            <p>We'll use your feedback to improve our customer support.</p>`
        }
    })

    function removeActive(){
        ratingElem.forEach((ratingElem)=>
        ratingElem.classList.remove("active"))
    }
})
