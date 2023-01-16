const imageElem=document.querySelector('#image')
const checkButton = document.querySelector('#check-button');
const result=document.querySelector('#result')
const attempts=document.querySelector('#attempts')
const startContainer=document.querySelector('#startContainer')
const checkContainer=document.querySelector('#checkContainer')

let answerContainer=document.querySelector('#answerContainer')
const text=[
document.querySelector('#A'),
document.querySelector('#B'),
document.querySelector('#C'),
document.querySelector('#D'),
document.querySelector('#E'),
document.querySelector('#F'),
document.querySelector('#G'),
document.querySelector('#H'),
document.querySelector('#I'),
document.querySelector('#J'),
document.querySelector('#K'),
document.querySelector('#L'),
document.querySelector('#M'),
document.querySelector('#N'),
document.querySelector('#O'),
document.querySelector('#P'),
document.querySelector('#Q'),
document.querySelector('#R'),
document.querySelector('#S'),
document.querySelector('#T'),
document.querySelector('#U'),
document.querySelector('#V'),
document.querySelector('#W'),
document.querySelector('#X'),
document.querySelector('#Y'),
document.querySelector('#Z'),
]

let inputBoxes=[]
let randomImage;
let attemptArr= [1,2,3,4,5,6,7,8,9,10]


function updateImage(){
    const items=['shoes','rainbow','pants','tshirt','car','bed','pillow','apple','banana','orange']
    randomNum= Math.floor(Math.random()*items.length)
    randomImage= items[randomNum]
    imageElem.classList.remove('shoes','rainbow','pants','tshirt','car','bed','pillow','apple','banana','orange')
    imageElem.classList.add(randomImage)
    attempts.innerHTML= `Attempts left: ${attemptArr.length}`
    result.innerHTML=''
    addInputBox(randomImage)
}

function addInputBox(randomImage){
    answerContainer.innerHTML=''
    inputBoxes=[]
    
    for (let i=0; i<randomImage.length; i++){
        const inputBox=document.createElement('input');
        inputBox.classList.add('inputBox');
        inputBox.setAttribute('title', 'inputLetter');
        inputBox.setAttribute('type', 'text');
        inputBox.setAttribute('maxlength', '1');
        answerContainer.appendChild(inputBox);
        inputBoxes.push(inputBox)
    }
}

for (let i = 0; i < text.length; i++) {
    text[i].addEventListener('click', addLetter);
}

function addLetter(event){
    
    const letter=event.target.textContent
    console.log(letter)
    for (let i=0; i<inputBoxes.length; i++){
        if (inputBoxes[i].value === '') {
            
            // Set the value of the input box to the letter
            inputBoxes[i].value = letter;
            break;
        }
    }
}
checkButton.addEventListener('click', checkAnswerValidity);

function checkAnswer(userInput, correctAnswer) {
    return userInput === correctAnswer;
}

function answerBox(inputBox){
    return inputBox.value
}

let attempt=10

function checkAnswerValidity(){
    console.log(inputBoxes)
    const userInput = inputBoxes.map(answerBox).join('');
    const correctAnswer = randomImage;
    let isCorrect = checkAnswer(userInput.toLowerCase(), correctAnswer.toLowerCase())
    if(isCorrect){
        result.innerHTML= 'Well done, you are correct!'
    }
    else{
        result.innerHTML= 'Oops, wrong answer! <br> Please try again!'
        attempt=attempt-1 
        attemptArr.pop()
        attempts.innerHTML=`Attempts left: ${attemptArr.length}`
        console.log(attempt)
        checkAttempt(attempt)       
    }
}

function checkAttempt(attempt){
    console.log(attempt)
    if (attempt<=0){
        result.innerHTML= 'You lose. 10 attempt has <br> been used. <br> Click back button to play again!'

        startContainer.innerHTML=''
        checkContainer.innerHTML=''
    }   
    return

}



