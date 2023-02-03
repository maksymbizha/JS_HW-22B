const questions = [{
    caption: 'Подія натискання на елемент називається click?',
    correctAnswer: true
    },
    {
        caption: 'Усередині розмітки не можна додати обробник події?',
        correctAnswer: false
    },
    {
        caption: 'Припинити спливання події можна за допомогою метода stopImmediatePropagation?',
        correctAnswer: false
    },
    {
        caption: 'Припинити спливання події можна за допомогою метода stopPropagation?',
        correctAnswer: true
    }]



/*------- ul --------*/
const ulElement = document.querySelector('ul');

/*------- li --------*/
const oneLiElement= document.createElement('li')
ulElement.append(oneLiElement);

const twoLiElement=document.createElement('li')
ulElement.append(twoLiElement);

const thirdLiElement=document.createElement('li')
ulElement.append(thirdLiElement);

const fourthLiElement=document.createElement('li')
ulElement.append(fourthLiElement);

/*------- label --------*/
const oneLabelElement= document.createElement('label')
oneLabelElement.innerText  = questions[0].caption;
oneLiElement.append(oneLabelElement)

const twoLabelElement= document.createElement('label')
twoLabelElement.innerText  = questions[1].caption;
twoLiElement.append(twoLabelElement)

const thirdLabelElement= document.createElement('label')
thirdLabelElement.innerText  = questions[2].caption;
thirdLiElement.append(thirdLabelElement)

const fourthLabelElement= document.createElement('label')
fourthLabelElement.innerText  = questions[3].caption;
fourthLiElement.append(fourthLabelElement)



/*------- input --------*/
const oneRadioYes= document.createElement('input')
const oneRadiNo= document.createElement('input')
oneRadioYes.type="radio"
oneRadioYes.name="one";
oneRadiNo.type="radio";
oneRadiNo.name="one";
oneLabelElement.append(oneRadioYes)
oneLabelElement.append(oneRadiNo)

const twoRadioYes= document.createElement('input')
const twoRadiNo= document.createElement('input')
twoRadioYes.type="radio";
twoRadioYes.name="two";
twoRadiNo.type="radio";
twoRadiNo.name="two";
twoLabelElement.append(twoRadioYes)
twoLabelElement.append(twoRadiNo)

const thirdRadioYes= document.createElement('input')
const thirdRadiNo= document.createElement('input')
thirdRadioYes.type="radio";
thirdRadioYes.name="third";
thirdRadiNo.type="radio";
thirdRadiNo.name="third";
thirdLabelElement.append(thirdRadioYes)
thirdLabelElement.append(thirdRadiNo)

const fourthRadioYes= document.createElement('input')
const fourthRadiNo= document.createElement('input')
fourthRadioYes.type="radio";
fourthRadioYes.name="fourth";
fourthRadiNo.type="radio";
fourthRadiNo.name="fourth";
fourthLabelElement.append(fourthRadioYes)
fourthLabelElement.append(fourthRadiNo)


/*-------  div and span --------*/
const result = document.getElementsByClassName('result');
const resultSpan = document.querySelector('span');


/*------- click  --------*/

const arr= [];
const buttonElement = document.querySelector('button')
buttonElement.addEventListener("click", function f(event){



    if (oneRadioYes.checked === true) {
        arr.push(+1)
    }if(twoRadioYes.checked === false){
        arr.push(+1)
    }
    if(thirdRadioYes.checked === false){
        arr.push(+1)
    }
    if(fourthRadioYes.checked === true){
        arr.push(+1)
    }


    const result = arr.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    resultSpan.innerText = ` = ${result} / 4 `;

    this.removeEventListener('click', f );

})


