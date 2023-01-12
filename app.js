const imageElem=document.querySelector('#image')

let answerContainer=document.querySelector('#answerContainer')



function updateImage(){
    var items=['shoes','rainbow','pants','tshirt','car','bed','pillow','apple','banana','orange']
    var randomNum= Math.floor(Math.random()*items.length)
    var randomImage= items[randomNum]
    imageElem.classList.remove('shoes','rainbow','pants','tshirt','car','bed','pillow','apple','banana','orange')
    imageElem.classList.add(randomImage)
    console.log(randomImage)
    addInputBox(randomImage)
}



function addInputBox(randomImage){
    answerContainer.innerHTML=''
    const inputBox=`
    <input class="inputBox" title="inputLetter" type="text"  maxlength="1";>
    `
    for (let i=0; i<randomImage.length; i++){
        answerContainer.insertAdjacentHTML('beforeend',inputBox)
    }
}
