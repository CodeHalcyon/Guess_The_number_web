// alert("Always have an eye on your Score")
let x = Math.round(100 * Math.random());
let chances = 0;
let score = 100;
let ch
let sc2
let txt = document.getElementById("txt");
let sc_board = document.getElementById("score");
let again_btn = document.getElementById("again-btn")
sc_board.innerText = score
function MakeGuess() {
  
  if (score != -5) {
    console.log(score)
    ch = document.getElementById("guess").value;
    if (ch > x){
    sc_board.innerText = score
    txt.innerText = "Guess something lesser than " + ch;
    }
    else if(ch < x){
        sc_board.innerText = score
        txt.innerText = "Guess something greater than " + ch;
    }
    else{
      sc_board.innerText = score
      txt.innerText = "Guessed it correctly!! \n You WON!!🥳🥳 \n You took "+ chances+" guesses"
      again_btn.style.display="inline"
      exit()
    }
    chances=chances+1;
    score = score - chances;
  }
  else{
    sc_board.innerText = score
    txt.innerText = "Sorry! You lost the game"
    again_btn.style.display="inline"
    exit()
  }
}

function PlayAgain(){
  document.getElementById("guess").value = 0
  txt.innerText = ""
  score = 100
  chances=0
  sc_board.innerText = score
  x = Math.round(100 * Math.random());
  MakeGuess()
  again_btn.style.display="none"

}
