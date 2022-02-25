let min = 0;
let max = 100;

let middle = Math.floor((min+max)/2);

let stage = 1;

function start(){

    document.getElementById("start-text").classList.add("hideBlock");
    document.getElementById("start-button").classList.add("hideBlock");

    document.getElementById("question").classList.remove("hideblock");
    document.getElementById("question").innerHTML = "Попытка"+stage+":"+middle;

    document.getElementById("menhe").classList.remove("hideblock");
    document.getElementById("ugadal").classList.remove("hideblock");
    document.getElementById("bolhe").classList.remove("hideblock");
}



function smallclick(){
    max=middle;


    middle= Math.floor((min + max)/2);

      if(max == middle)
      {
        middle -= 1;
      }

      checkgame();
}


function bigclick(){

    min = middle;

    middle = Math.floor((min + max)/2);

    if(min == middle){
        middle +=1;
    }

    checkgame();
}


function bingoclick(){

    max = middle;
    min = middle;

    checkgame();

}


function checkgame(){

    if (min == max){
       document.getElementById("question").innerHTML = "Вы загадали число" + min;

       document.getElementById("menhe").classList.add("hideblock")
       document.getElementById("ugadal").classList.add("hideblock")
       document.getElementById("bolhe").classList.add("hideblock")

       return;

    }

stage += 1;

  if (stage == 8){
      document.getElementById("question").innerHTML="жульничать нехорошо";
      return;
  }

  document.getElementById("question").innerHTML = "Попытка" + stage + ":" +middle;
  return;

}

