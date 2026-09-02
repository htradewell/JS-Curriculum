const questionText = document.querySelector('#questionText');
const optionsSpace = document.querySelector('#options');
const feedback = document.querySelector('#feedback');
const nextBtn = document.querySelector('#nextBtn');
const quizScreen = document.querySelector('#quiz');
const scoreText = document.querySelector('#scoreText')
let currentQuestion = 0;
let score = 0;
const resultScreen = document.querySelector('#result');
const questions = [
    {
        question:'what does DOM stand for',
        options: ['document object model', 'data option mode', 'display objects minature', 'danny devito'],
        answer: 'document object model',
    },
    {
        question: 'whats the capital of italy',
        options: ['paris', 'london', 'rome', 'new york'],
        answer: 'rome',
    },
    {
        question: 'how many legs do horses have',
        options: ['1', '2', '3', '4'],
        answer: '4',
    },
    {
        question: 'whats the smallest number here',
        options: ['1/3', '0.3', '3/12', '1/24 + 1/12'],
        answer: '1/24 + 1/12',

    },
    {
        question: 'who should you blame it on?',
        options: ['sunshine', 'moonlight', 'good times', 'boogie'],
        answer: 'boogie',
    },
    {
        question: 'what was everyone doing',
        options: ['mindfull writing', 'blue whale sighting', 'kung-fu fighting', 'candle lighting'],
        answer: 'kung-fu fighting',
    }
]
function showQuestion(index){
    optionsSpace.innerHTML = '';
    questionText.textContent = questions[index].question;
    questions[index].options.forEach(option=>{
        const optionBtn = document.createElement('button');
        optionBtn.textContent = option;
        optionsSpace.appendChild(optionBtn);
    });
}
optionsSpace.addEventListener('click', (e)=>{
        if (e.target.tagName !== 'BUTTON'){
            return('not a button');
        }
        else if (e.target.textContent === questions[currentQuestion].answer){
            feedback.textContent = 'correct!';
            score +=1;
        }
        else{
            feedback.textContent = 'incorrect!';

        }
})
showQuestion(0);
nextBtn.addEventListener('click', () =>{
    currentQuestion +=1;
    feedback.textContent = '';
    if (currentQuestion >= questions.length) {
        scoreText.textContent = `You scored ${score} / ${questions.length}`
        quizScreen.style.display = 'none'
        resultScreen.style.display = 'block';
    } 
    else {
        showQuestion(currentQuestion);
    }
});
