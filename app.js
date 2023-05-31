const selectors = {
    boardContainer : document.querySelector('.board-container'), 
    board : document.querySelector('.board'),
    moves : document.querySelector('.moves'),
    timer : document.querySelector('.timer'),
    start : document.querySelector('button')
    win : document.querySelector('.win')
};

const state = {
    gameStarted : false,
    flippedCards : 0,
    totalFlips : 0,
    totalTime : 0,
    loop : null
};

const shuffle = array => {
    const clonedArray = [...array];

    for(let i = clonedArray.length - 1; i > 0; i--){
        const randomIndex = Math.floor(Math.random() * (i +1));
        const original = clonedArray[i];

        clonedArray[i] = clonedArray[randomIndex];
        clonedArray[randomIndex] = original;
    }

    return clonedArray;
}

const pickRandom = (array, items) => {
    const clonedArray = [...array];
    const randomPicks = [];

    for(let i=0; i<items; i++){
        const randomIndex = Math.floor(Math.random() * clonedArray.length);
        clonedArray.splice(randomIndex, 1);
    }
}

const generateGame = () => {
    const dimensions = selectors.board.getAttribute('data-dimnesion');

    if(dimensions % 2 ! == 0){
        throw new Error("The dimension of the board must be en even number.")
    }

    const emojis = 
}