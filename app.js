const text = document.querySelector('.text')
const bg = document.querySelector('.bg')


let count = 0;


function loading() {
    count++;

    if (count >= 100) {
        clearInterval(int);
    }

    text.innerHTML = `${count}%`;
    text.style.opacity = scale(count, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
}

let int = setInterval(loading, 30);



function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}