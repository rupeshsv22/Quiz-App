const  questions =[
    {


    question:"which is largest animal in the world",
    answers:[
        {text:"shark",correct: false},
        {text:"blue whale",correct: true},
        {text:"elephant",correct: false},
        {text:"giraffe",correct: false},
    ]

},
{


    question:"which is smallest country in the world",
    answers:[
        {text:"vatican city",correct: true},
        {text:"bhutan",correct:false},
        {text:"nepal",correct: false},
        {text:"shri lanka",correct: false},
    ]

},
{


    question:"which is largest desert in the world",
    answers:[
        {text:"shark",correct: false},
        {text:"blue whale",correct: false},
        {text:"elephant",correct: false},
        {text:"antarctica",correct: true},
    ]

},
{


    question:"which is smallest continent in the world",
    answers:[
        {text:"asia",correct: false},
        {text:"australia",correct: true},
        {text:"artic",correct: false},
        {text:"africa",correct: false},
    ]

}
];

const questionElement=document.getElementById("question");
const answerbuttons=document.getElementById("answer-buttons");
const nextbutton=document.getElementById("next-btn");

let currentquestionindex=0;
let score=0;

function startquiz(){
    currentquestionindex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showquestion();
}

function  showquestion(){
    resetstate();
    let currentquestion = questions[currentquestionindex];
    let questionno=currentquestionindex + 1;
    questionElement.innerHTMl=questionno +"."+currentquestion.question;

    currentquestion.answers.forEach(answer=>{
        const button= document.createElement("button");
        button.innerText=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.corrrectt=answer.correct;

        }
        button.addEventListener("click",selectanswer)

    });
}
function resetstate(){
    nextbutton.style.display="none"
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
        
    }
}

function selectanswer(e){
    const selecetedbtn=e.target;
    const iscorrect=selecetedbtn.dataset.correct==="true";
    if(iscorrent){
        selecetedbtn.classList.add("correct");}
        else{
            selecetedbtn.classList.add("incorrect");
        }

        Array.from(answerbuttons.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
            button.disabled=true;
        });
        nextbutton.style.display="block";

}


function showscore(){
    resetstate;
    questionElement.innerHTML='you scored ${score} out of ${question.lenght}!';
    nextbutton.innerHTML="play again";
    nextbutton.style.display="block";
}
function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showquestion();
    }else{
        showscore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentquestionindex < questions.length){
        handlenextbutton();

    }else{
        startquiz(); 
    }
});
startquiz();
