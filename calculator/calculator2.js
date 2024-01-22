let output = document.getElementById("output");
let c = 0;
let buttons = document.getElementsByTagName("button");
output.textContent = '0'
comments = ["Benjamin is a turd.", "The biggest turd", "A Turdius Maximus", "A Turdasaurus Rex", "The toiled called", 
            "It said you're late coming home", "Who else is a turd?"];



for (let button in buttons){
    buttons[button].addEventListener("click", () => {
        output.textContent = comments[c];
        c += 1;
        if (c==7){c=0;}
    })
}
