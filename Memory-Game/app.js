const cardArray = [
    {
        name: 'apple',
        img:   'images/apple.jpeg',
    },
    {
        name: 'chicken',
        img:   'images/chicken.jpg',
    },
    {
        name: 'dog',
        img:   'images/dog.jpg',
    },
    {
        name: 'oranges',
        img:   'images/oranges.jpg',
    },
    {
        name: 'pigeon',
        img:   'images/pigeon.jpeg',
    },
    {
        name: 'sewing',
        img:   'images/sewing.jpg',
    },  
    
    {
        name: 'apple',
        img:   'images/apple.jpeg',
    },
    {
        name: 'chicken',
        img:   'images/chicken.jpg',
    },
    {
        name: 'dog',
        img:   'images/dog.jpg',
    },
    {
        name: 'oranges',
        img:   'images/oranges.jpg',
    },
    {
        name: 'pigeon',
        img:   'images/pigeon.jpeg',
    },
    {
        name: 'sewing',
        img:   'images/sewing.jpg',
    }, 
  
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
     for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement ('img')
        card.setAttribute("src", "images/blan.jpg")
        card.setAttribute("data-id", i) 
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)

            
     }
 }

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')

    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    console.log(cards)
    console.log('check for match')
    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blan.jpg' )
        cards[optionTwoId].setAttribute('src', 'images/blan.jpg' )
        alert("you click the same picture")
    }
   if( cardsChosen[0] == cardsChosen[1]){
    alert("you found a match")
    cards[optionOneId].setAttribute('src', 'images/white.jpg' )
    cards[optionTwoId].setAttribute('src', 'images/white.jpg' )
    cards[optionOneId].removeEventListener("click", flipCard )
    cards[optionTwoId].removeEventListener("click", flipCard )
    
    cardsWon.push(cardsChosen)
    
} else{
    cards[optionOneId].setAttribute('src', 'images/blan.jpg' )
    cards[optionTwoId].setAttribute('src', 'images/blan.jpg' )
    alert('Failed! try again!')
}
resultDisplay.innerHTML = cardsWon.length
cardsChosen = []
cardsChosenIds = []

if (cardsWon.length == cardArray.length/2)
resultDisplay.innerHTML = "CONGRATULATIONS YOU WON"
}

function flipCard() {
    const cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
      cardsChosenIds.push(cardId)
      console.log(cardsChosen)
      console.log(cardsChosenIds)
      this.setAttribute("src", cardArray[cardId].img)
      if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
      }
  }
