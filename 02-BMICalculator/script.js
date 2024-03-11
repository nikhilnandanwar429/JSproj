const res = document.querySelector('#results');

const btn = document.querySelector('button');

btn.addEventListener('click' , (e) => {
    e.preventDefault();
    const w = parseFloat(document.querySelector('#weight').value);
    const h = parseFloat(document.querySelector('#height').value);
    let bmi = parseInt((w*100*100)/(h*h)).toFixed(2);
    res.innerHTML = `Your BMI is ${bmi} `;

})