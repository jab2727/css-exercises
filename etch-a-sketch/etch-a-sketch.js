const gridSize=32;
const screen = document.querySelector('#screen');
let pixelStyle = 'width: ' + (800/gridSize-2).toString() + 'px; height: ' + (800/gridSize-2).toString() + 'px;';
console.log(pixelStyle);



function setColored(){
    // pixel.setAttribute('class', 'colored');
    console.log("A pixel has now been colored.");
}

for (let j=0; j<gridSize; j++){
    const column = document.createElement('div');
    column.setAttribute('class', 'column'); 

    for (let i = 0; i<gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        pixel.setAttribute('style', pixelStyle);
        pixel.addEventListener('mouseover', () => {

            if (pixel.style.backgroundColor===''){
                const audio = new Audio('./happy-pop-2-185287.mp3');
                audio.play();
                pixel.style.backgroundColor = "rgb(50, 50, 50)"
                }
        });
        column.appendChild(pixel);
    }

    screen.appendChild(column);
}
