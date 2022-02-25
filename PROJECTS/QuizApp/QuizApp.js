const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let quiz = document.getElementById('container') 

let questionEl = document.getElementById('question')
let answers = document.querySelectorAll('.answer')

console.log(answers)

let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')
let submitBtn = document.getElementById('submit')


let score = 0
let currentQuestion = 0

function loadQuestion()
{
    let currentQuizData = quizData[currentQuestion]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

loadQuestion()

function deselect()
{
    answers.forEach(answers =>
        {
            answers.checked = false
        })
}

function getSelected()
{
    let answer;
    answers.forEach(answers =>
        {
            if(answers.checked)
                answer = answers.id
        })
    console.log(answer)
    return answer
}

submitBtn.addEventListener('click', () =>
{
    let answer = getSelected()

    deselect()

    if(answer)
    {
        if(answer === quizData[currentQuestion].correct)
            score++
            console.log(score)
        currentQuestion++

        if(currentQuestion < quizData.length)
            loadQuestion()
        else
        {
            quiz.innerHTML = 
            `<h2> You have answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick = 'location.reload()'>Reload</button>`
        }
    }
})