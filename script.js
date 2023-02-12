window.addEventListener('load', ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const nameTodoForm = document.querySelector('#nameTodoForm');
    const username = localStorage.getItem('#username') || '';

    nameInput.value=username;
    nameInput.addEventListener('change', e =>{
        localStorage.setItem
    })
})