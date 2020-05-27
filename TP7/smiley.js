function canvasApp(){
    let canvas = document.getElementById("smiley");
    let context = canvas.getContext("2d");
    context.save();
    context.lineWidth = 3.0;
    context.beginPath();
    context.fillStyle="yellow";
    context.arc(100, 100, 75, 0, 2*Math.PI);        // Dessine un cercle
    context.closePath();
    context.fill();
    context.stroke();
    context.lineWidth = 3.0;
    context.beginPath();
    context.fillStyle="black";
    context.arc(65, 70, 10, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.arc(135, 70, 10, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.strokeStyle="black";
    context.lineWidth = 6.0;
    context.arc(99, 120, 35, 0, Math.PI);
    context.stroke();
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.font = "20px times";
    context.fillText("Hello Canvas!", 100, 200);
    context.restore();
}

function displayDateTime(){
    
}


function main(){
    canvasApp();
}

main();