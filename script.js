const question = document.querySelector('.question')
const inputtext = document.getElementById('inputtext')
const nquestion = document.getElementById('nquestion')
const Qsubmit = document.getElementById('Qsubmit')
const anstext = document.querySelector('#anstext')
const pointel = document.querySelector('.point')

let score = JSON.parse(localStorage.getItem('point'))
let point = score ? score : 0 ;
pointel.innerHTML = "Point: " + point;
let number1 = Math.ceil(Math.random() *10)
let number2 = Math.ceil(Math.random() *10)
let answer = number1 * number2;

function getQuestion() {
   question.innerHTML = `Question: What is ${number1} Multiply By ${number2} ?`
}

function submit() {
    if(inputtext.value === '') {
        alert('Please Enter Your Answer First')
    }else if(+inputtext.value === answer){

        anstext.innerHTML = "Your Answer is Corrct And You have got one point!"
        point++
        inputtext.value = ''
        pointel.innerHTML = "Point: " + point
        savePoint()

    }else if(+inputtext.value !== answer ) {
       
        anstext.innerHTML = "Sorry! Incorrect Answer And You lost one Point!"
        anstext.classList.add('red')
        point--
        pointel.innerHTML = "Point: " + point;
        savePoint();
    }
        
    
}

Qsubmit.addEventListener('click', (event) => {
    
    submit()
})

getQuestion()


function savePoint() {
    localStorage.setItem('point', JSON.stringify(point))
}



