function main(){
    let confirm = document.getElementById("mainResult").innerHTML;

    if (confirm == "You Lost !" || confirm == "Great !!! You Won The Game") {
        alert("Game over! Please restart the game");

    } else {
        let x;
        do {
        x = Math.floor(Math.random() * 100 / 7.6 );
        } while (x == 0);
    
        let currentValue = parseInt(document.getElementById("result").innerHTML);
        let totalValue = currentValue + x ;
        document.getElementById("result").innerHTML = totalValue ;
    
        if (totalValue < 21 ){
            document.getElementById("mainResult").innerHTML = "Generate a card ?";
        } else if (totalValue == 21){
            document.getElementById("mainResult").innerHTML = "Great !!! You Won The Game";
            alert("Congarulations!");
            document.getElementById("btn-res").style.display = "block";
        } else {
            document.getElementById("mainResult").innerHTML = "You Lost !";
            alert("Oops! You Lost!");
            document.getElementById("btn-res").style.display = "block";
        }
     
        var img = document.createElement("img");
        img.src = "images/" + x + ".png";
        img.height = 300;
    
        document.body.appendChild(img);   
    }
}

function restart(){
    location.reload();
}