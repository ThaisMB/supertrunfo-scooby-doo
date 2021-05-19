var cards = [];

card0 = {
    name: "Salsicha",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFOAk901YnX-wcoBNLXLj2pRZiDfW-Xwf9A&usqp=CAU",
    number: 1+"/"+10,
    attributes: {
       ataque: 4,
       defesa: 8,
       coragem: 2,  
    }
};

card1 = {
    name: "Scooby-Doo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0p8XLCN3xYuSZOa1fzavpU51gImnfJ7kLA&usqp=CAU",
    number: 2+"/"+10,
    attributes: {
       ataque: 3,
       defesa: 7,
       coragem: 2,
    }
};

card2 = {
    name: "Daphne",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJlu818YuRqSVGEVZBzp4HdjS8k60Dpkp9Q&usqp=CAU",
    number: 3+'/'+10,
    attributes: {
       ataque: 9,
       defesa: 10,
       coragem: 9,
    }
};

card3 = {
    name: "Velma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIdNlu36B8XOBy3foYoOywDyQXjZmWJRH1w&usqp=CAU",
    number: 4+'/'+10,
    attributes: {
       ataque: 10,
       defesa:  6,
       coragem: 8,
    }
};

card4 = {
    name: "Fred",
    image: "https://static.wikia.nocookie.net/scoobydoo/images/4/47/Fred_Jones.png/revision/latest/scale-to-width-down/1000?cb=20201229021548",
    number: 5+'/'+10,
    attributes: {
       ataque: 8,
       defesa: 7,
       coragem: 9,
    }
};

card5 = {
    name: "Monstro de Biscoitos Scooby",
    image:"http://1.bp.blogspot.com/-XKHwlxYrN8c/UE1WKsq8AOI/AAAAAAAABkQ/gWpGOE732R4/s400/Monster.png" ,
    number: 6+'/'+10,
    attributes: {
       ataque: 8,
       defesa: 6,
       coragem: 5,
    }
};

card6 = {
    name: "Gosma Mutante",
    image:"http://2.bp.blogspot.com/-OvazJ_Fhz2s/VQn19ha2z0I/AAAAAAAAAf0/lXf_hwgb0lg/s1600/ep1_012.jpg" ,
    number: 7+'/'+10,
    attributes: {
       ataque: 9,
       defesa: 6,
       coragem: 8,
    }
};

card7 = {
    name: "Fantasma Pirata Barba Ruiva",
    image:"http://3.bp.blogspot.com/-9_LUntY_CQk/VQn1uLFPAfI/AAAAAAAAAfs/v0PacG4xTFI/s1600/Redbeard.png",
    number: 8+'/'+10,
    attributes: {
       ataque: 5,
       defesa: 9,
       coragem: 7,
    }
};

card8 = {
    name: "Monstro de Cera",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxZWtrMLcB6Pqx1NKgao-WvvsZEZG_pNPVw&usqp=CAU",
    number: 8+'/'+10,
    attributes: {
       ataque: 5,
       defesa: 9,
       coragem: 7,
    }
}

card9 = {
    name: "Fantasma Cavaleiro Negro",
    image:"http://1.bp.blogspot.com/-lKmJnw1vpH0/VOxwuhoZ4jI/AAAAAAAAAIw/d0XwZv_1jyU/s1600/images.jpg",
    number: 8+'/'+10,
    attributes: {
       ataque: 5,
       defesa: 9,
       coragem: 7,
    }
}

cards = [card0, card1, card2, card3, card4, card5, card6, card7, card8, card9];

let indexPlayerCard;
let playerCard;
let indexMachineCard;
let machineCard;
let sortButton = document.querySelector("#btnSort");
let playButton = document.querySelector("#btnPlay");
let machineCardElement = document.querySelector('#machine-card');
let playerCardElement = document.querySelector('#player-card');
let result = document.getElementById("result");
let playerPoints=0;
let machinePoints=0;

function sortPlayerCard() {
    machineCardElement.style.display = "none";
    let chooseAttribute = document.getElementById("chooseAttribute");
    indexPlayerCard = Math.floor(Math.random() * cards.length);
    playerCard = cards[indexPlayerCard];
    cards.splice(indexPlayerCard,1);
    showPlayerCard();

    chooseAttribute.style.display = null;
    playerCardElement.style.display = null;
    playButton.style.display = null;
    sortButton.style.display = "none";
    result.style.display = "none";
    if (cards.length<=2){
        alert("Última rodada!");
    }
};

function showPlayerCard() {
    playerCardElement.style.backgroundImage = "url('https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png')";
    let photo = document.querySelector(".photo-player-card");
    photo.style.backgroundImage = `url(${playerCard.image})`;
    let name = document.querySelector("#name-player-card");
    name.innerHTML = `${playerCard.name}`;
    let options = document.querySelector(".options");
    let optionsText = "";
    for (var attribute in playerCard.attributes) {
        optionsText += "<label><input type='radio' name='attribute' value='" + attribute + "'>" + attribute + " : " + playerCard.attributes[attribute] + "</label>"
    updateCardsNumber();
    }
    options.innerHTML = optionsText;
    let number = document.querySelector("#number-player-card");
    number.innerHTML = `${playerCard.number}`;
}

function getCheckedAttribute() {
    let inputsAttributes = document.getElementsByName("attribute");
    for (var i in inputsAttributes) {
        if (inputsAttributes[i].checked) {
            return inputsAttributes[i].value;
        }
    }
}

function sortMachineCard() {
    indexMachineCard = Math.floor(Math.random() * cards.length);
    machineCard = cards[indexMachineCard];
    cards.splice(indexMachineCard,1);
}

function showMachineCard() {
    machineCardElement.style.backgroundImage = "url('https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png')";
    let photo = document.querySelector(".photo-machine-card");
    photo.style.backgroundImage = `url(${machineCard.image})`;
    let name = document.querySelector("#name-machine-card");
    name.innerHTML = `${machineCard.name}`;
    let options = document.querySelector(".attributes");
    let optionsText = "";
    for (var attribute in machineCard.attributes) {
        optionsText += `<p>${attribute} : ${machineCard.attributes[attribute]}</p>`
    }
    options.innerHTML = optionsText;
    let number = document.querySelector("#number-machine-card");
    number.innerHTML = `${machineCard.number}`;
    machineCardElement.style.display = null;
}

function play() {
    let attribute = getCheckedAttribute();
    if (attribute == undefined) {
        alert("Escolha uma qualidade para jogar!");
        return;
    }
    sortMachineCard();
    showMachineCard();
    result.style.display = null;
    if (playerCard.attributes[attribute] > machineCard.attributes[attribute]) {
        result.innerHTML = "<p>Você venceu essa rodada!</p>";
        playerPoints+= 1;
    } else if (playerCard.attributes[attribute] < machineCard.attributes[attribute]) {
        result.innerHTML = "<p>Você perdeu essa rodada!</p>";
        machinePoints += 1;
    } else if (playerCard.attributes[attribute] == machineCard.attributes[attribute]) {
        result.innerHTML = "<p>Essa rodada empatou!</p>";    
    }

    if (cards.length===0){
        updateCardsNumber();
        playButton.style.display = "none";
        if (playerPoints>machinePoints){
            result.innerHTML += "<p>Acabou!<br> Você venceu o jogo!</p>"
        } else if (machinePoints>playerPoints){
            result.innerHTML += "<p>Acabou!<br> Você perdeu o jogo!</p>"
        }else if (machinePoints == playerPoints){
            result.innerHTML += "<p>Acabou!<br> Jogo empatado!</p>"
        }
        return
    }
    updateCardsNumber();
    updateScore();
    chooseAttribute.style.display = "none";
    playButton.style.display = "none";
    sortButton.style.display = null;
}

function updateCardsNumber(){
    let divCardsNumber = document.getElementById("cards-number");
    let html = "Cartas no Jogo:"+ cards.length
    divCardsNumber.innerHTML = html;
}

function updateScore(){
    let divScore = document.getElementById("score");
    var html = "Jogador: "+ playerPoints +" / " + machinePoints+" :Computador";
    divScore.innerHTML = html;
}