var button = document.getElementById('btn');

button.addEventListener('click', ()=>{
    button.innerHTML = parseInt(button.innerText) + 1;
});