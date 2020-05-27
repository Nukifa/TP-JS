function main(){
    let A=document.querySelector("#colorButton1");
    A.addEventListener("click" , changeColor);
}

function changeColor(event){
    let newcolor = event.target;
    newcolor.style.backgroundColor=randomComponent();
}

function randomComponent(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    return "rgb("+r+","+g+","+b+")";
}


main();