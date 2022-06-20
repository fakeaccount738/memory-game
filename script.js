let grid = document.querySelector("#grid")
let result = document.querySelector("#result")
let cardschosen = []
let cardschosenid = []
let cardswon = []
let cardarray = [
    {name: "Apples", img: "Apple.png"},
    {name: "Apples", img: "Apple.png"},
    {name: "Bananas", img: "Banana.png"},
    {name: "Bananas", img: "Banana.png"},
    {name: "Grapes", img: "Grapes.png"},
    {name: "Grapes", img: "Grapes.png"},
    {name: "Oranges", img: "Orange.png"},
    {name: "Oranges", img: "Orange.png"},
    {name: "Pears", img: "Pear.png"},
    {name: "Pears", img: "Pear.png"},
    {name: "Pineapples", img: "Pineapple.png"},
    {name: "Pineapples", img: "Pineapple.png"}
]
function checkformatch(){
  let cards = document.querySelectorAll("img")
  let option1 = cardschosenid[0]
  let option2 = cardschosenid[1]
  if (cardschosen[0] == cardschosen[1]){
    alert("you found a match")
    cards[option1].setAttribute("src","White.png")
    cards[option2].setAttribute("src","White.png")
    cardswon.push(cardschosen)
  }
  else{
    alert("sorry try again")
    cards[option1].setAttribute("src","Blank.png")
    cards[option2].setAttribute("src","Blank.png")
  }
  cardschosen = []
  cardschosenid = []
  result.textContent = cardswon.length
  if (cardswon.length == 6){
    alert("you won")

  }
}
function flipcard(){
  if (cardschosen.length < 2){
    let cardid = this.getAttribute("data-id")
    cardschosen.push(cardarray[cardid].name)
    cardschosenid.push(cardid)
    this.setAttribute("src", cardarray[cardid].img)
    console.log(cardschosen.length);
    if (cardschosen.length == 2){
        setTimeout(checkformatch, 1111)
    }
  }
}
function createboard(){``
  for(let i = 0; i < cardarray.length; i++) {
    let card = document.createElement("img")
    card.setAttribute("src", "blank.png")
    card.setAttribute("data-id", i)
    card.addEventListener("click", flipcard)
    grid.appendChild(card)
  }
}
createboard()