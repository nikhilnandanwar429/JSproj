const start = document.getElementById('start');
const stop = document.getElementById('stop');

let loop ;

const str = '1234567890abcdef';


start.addEventListener('click' , (e) => {
    loop = setInterval(function(){
        let i=1;
        let clr = "#";
        while(i<=6){
            i++;
            clr += str[Math.floor(Math.random() * 16)];
        }
        // console.log(clr);
        document.body.style.backgroundColor = clr;
    }, 1000); 
})

stop.addEventListener('click' , (e) => {
    clearInterval(loop);
    document.body.style.backgroundColor = " #212121";
})