console.log('Sunday Night Football');

let turn=0

let firstCard

let secondCard

let info = [1,2,3,4,5, 1,2,3,4,5]

console.log(info)

let newarray = shuffle(info)

console.log(newarray)

const cards = document.querySelectorAll(".card")

const table = document.querySelector("#table")

 

cards.forEach((card,index)=>{

  card.value=`card${newarray[index]}`

})

 

table.addEventListener("click",work)

//got shuffle function from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {

  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...

  while (currentIndex != 0) {

    // Pick a remaining element...

    randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex--;

    // And swap it with the current element.

    [array[currentIndex], array[randomIndex]] = [

      array[randomIndex], array[currentIndex]];

  }

  return array;

}

 

function work(e){

  let choice = e.target

  let className = e.target.className

  if(className === "card"){

    flip(choice)

    turn++

  if(turn===1){

    firstCard=choice

  }

  if(turn===2){

    secondCard=choice

    table.removeEventListener("click",work);

  }

  if(turn===2){

    turn=0

    if(firstCard.value===secondCard.value){

table.addEventListener("click",work)

      setTimeout(()=>{

table.addEventListener("click",work)

      firstCard.style.transform = "scaleX(1)"

      secondCard.style.transform = "scaleX(1)"

      console.log("win")

      },500)

    }else{

      setTimeout(()=>{

table.addEventListener("click",work)

      firstCard.style.transform = "scaleX(1)"

      secondCard.style.transform = "scaleX(1)"

      firstCard.className = "card"

      secondCard.className = "card"

      console.log("lose")

      },1500)

    }

  } 

  }

}

 

function flip(e){

  e.classList.toggle(e.value)

}