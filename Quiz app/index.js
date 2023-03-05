const quizDB=[
    {
        question: "Q1: What is the full form of CPU ?",
        a: "Computer Processing Unit",
        b: "Computer Principle Unit",
        c: "Central Processing Unit",
        d: "Control Processing Unit",
        ans: "ans3"

    },
    {
        question: "Q2:Which of the following computer language is written in binary codes only ?",
        a:"pascal",
        b: "machine learning",
        c:  "C",
        d: "C#",
        ans: "ans2"
    },



    {
        question: "Q3:Which of the following is known as the brain of the computer ?",
        a: "Central Processing Unit",
        b: "Memory",
        c: "Monitor ",
        d: "all of above",
        ans: "ans1"
    },
    {
        question: "Q4: Which of the following language does the computer understand?",
        a: "Computer understands only C Language",
        b: "Computer understands only Assembly Language",
        c: "Computer understands only Binary Language",
        d: "Computer understands only BASIC",
        ans: "ans3"
    },
    {
        question: "Q5: Which of the following is not a type of computer code ?",
        a:"EDIC" ,
        b:"ASCII",
        c:"BCD",
        d:"EBCDIC",
        ans:"ans1"
    },

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');




const answers=document.querySelectorAll('.answer');



const showScore=document.querySelector('#showScore');



    let questionCount=0;
    let score=0;

const loadQuestion =() =>{

    const questionList=quizDB[questionCount];
    question.innerHTML=questionList.question;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;

}


loadQuestion();


const getCheckAnswer=() =>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;

}

const deselectAll=() => {

    answers.forEach((curAnsElem)=> curAnsElem.checked=false);

}



submit.addEventListener('click',() => {
    const checkedAnswer= getCheckAnswer();
    console.log(checkedAnswer);


    if(checkedAnswer ==quizDB[questionCount].ans){
        score++;
    };

        questionCount++;

        deselectAll();

        if(questionCount< quizDB.length){
            loadQuestion();
        }

        else{
            showScore.innerHTML=`
                <h3> Your Scored ${score}/${quizDB.length} </h3>            
                <button class="btn" onclick="location.reload()">RESTART QUIZ</button>
            `;

            showScore.classList.remove('scoreArea');
        }

});
