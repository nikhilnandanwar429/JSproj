const start = document.getElementById('start');
const stop = document.getElementById('stop');

let loop = null;

const str = '1234567890abcdef';


start.addEventListener('click', (e) => {
    if (loop) {
        clearInterval(loop);
    }

    loop = setInterval(function () {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += str[Math.floor(Math.random() * 16)];
        }
        document.body.style.backgroundColor = color;
    }, 1000);
});

stop.addEventListener('click', (e) => {
    if (loop) {
        clearInterval(loop);
        loop = null;
    }
    document.body.style.backgroundColor = "#212121";
});
