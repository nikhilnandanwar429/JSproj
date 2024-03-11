const btn = document.querySelectorAll('.button');
const body = document.body;

btn.forEach(function (btn) {
    btn.addEventListener('click' , (e) => {
        console.log(e);
        body.style.backgroundColor = e.target.id;
    })
})