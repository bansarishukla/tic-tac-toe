var turn = document.getElementById("turn");
var boxes = document.querySelectorAll("#main div"), x_or_o = 0;
var counter = 0;

function selectWinnerBoxes(b1, b2, b3) {
  b1.classList.add("win");
  b2.classList.add("win");
  b3.classList.add("win");
  console.log(counter);
  if(confirm(turn.innerHTML = b1.innerHTML + " Won congrats"))
  {
    replay();
    counter = 0;
  } 
}
function getWinner() {
  let box1 = document.getElementById("box1"),
      box2 = document.getElementById("box2"),
      box3 = document.getElementById("box3"),
      box4 = document.getElementById("box4"),
      box5 = document.getElementById("box5"),
      box6 = document.getElementById("box6"),
      box7 = document.getElementById("box7"),
      box8 = document.getElementById("box8"),
      box9 = document.getElementById("box9");
     

      //get all posiblities
      if(box1.innerHTML!== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
      {
        selectWinnerBoxes(box1, box2, box3);
      }
      else if(box4.innerHTML!== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
      {
        selectWinnerBoxes(box4, box5, box6);
      }
      else if(box7.innerHTML!== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
      {
        selectWinnerBoxes(box6, box7, box8);
      }
      else if(box1.innerHTML!== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
      {
        selectWinnerBoxes(box1, box4, box7);
      }
      else if(box2.innerHTML!= "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
      {
        selectWinnerBoxes(box2, box5, box8);
      }
      else if(box3.innerHTML!= "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
      {
        selectWinnerBoxes(box3, box6, box9);
      }
      else if(box1.innerHTML!= "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
      {
        selectWinnerBoxes(box1, box5, box9);
      }
      else if(box3.innerHTML!= "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
      {
        selectWinnerBoxes(box3, box5, box7);
      } 
      else if(counter >8 )
      {
        alert("it's a tie");
        counter = 0;
        replay();
      }
}
//  set event onclick

for(var i= 0; i < boxes.length; i++) {
  boxes[i].onclick = function() {
    counter++;
    // not allow to change the value of the box
    if(this.innerHTML !== "x" && this.innerHTML!== "0") {
      if(x_or_o % 2 === 0){ 
        console.log(x_or_o);
        this.innerHTML = "x";
        this.style.backgroundColor = document.getElementById('p1-bg').value;
        turn.innerHTML = document.getElementById('p2-name').value + "Turn Now";
        //turn.innerHTML = "o Turn Now";
        getWinner();
        x_or_o += 1;
      }
      else {
        console.log(x_or_o);
        this.innerHTML = "o";
        this.style.backgroundColor = document.getElementById('p2-bg').value;
        turn.innerHTML = document.getElementById('p1-name').value + "Turn Now";
        // turn.innerHTML = "x Turn Now";
        getWinner();
        x_or_o += 1;
      }
    }
  };
}
function replay() {
  counter = 0;
  for(var i = 0; i< boxes.length; i++) {
    boxes[i].classList.remove("Win");
    boxes[i].innerHTML = "";
    turn.innerHTML = "Play";
    turn.style.fontSize = "25px";
    boxes[i].style.backgroundColor = "white";
  }
  counter = 0;
  var x = document.getElementById("main");
    x.style.display = "none";
    var y = document.getElementById("playoptions");
    y.style.display = "block";
}
function startGame() { 
    var x = document.getElementById("main");
    x.style.display = "block";
    var y = document.getElementById("playoptions");
    y.style.display = none;
}
$(document).ready(function() {
  var $dropdown1 = $("select[name='dropdown1']");
  var $dropdown2 = $("select[name='dropdown2']");

  $dropdown1.change(() => {
    $dropdown2.find('option').prop("disabled", false);
    var selectedItem = $dropdown1.val();

    if (selectedItem) {
        $dropdown2.find('option[value="' + selectedItem + '"]').prop("disabled", true);
    }
  });
  $dropdown2.change(() => {
    $dropdown1.find('option').prop("disabled", false);
    var selectedItem = $dropdown2.val();

    if (selectedItem) {
        $dropdown1.find('option[value="' + selectedItem + '"]').prop("disabled", true);
    }
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 2946b042fd6896e35cd989a69fa9d18e05119661
