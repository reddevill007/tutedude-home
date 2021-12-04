var slide = document.getElementById('slide');
var up = document.getElementById('up');
var down = document.getElementById('down');

let x = 0;

up.onclick = ()=>{
    if(x > -900){
        x = x - 300;
        slide.style.top = x + "px";
    }

}

down.onclick = ()=>{
    if(x < 0){
        x = x + 300;
        slide.style.top = x + "px";
    }
}