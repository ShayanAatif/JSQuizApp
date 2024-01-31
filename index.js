const quizData = [              //array of objects
    {
        question: "What does HTML stands for?",
        options: [
            "Hypertext Markup Language",
            "Hyper transfer markup language",
            "Hypertext machine language",
            "Hyper and text markup language"
        ],
        correct: 0
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: [
            "margin", "padding", "spacing", "border-spacing"
        ],
        correct: 1
    },
    {
        question: "What is the Javascript function used to select an HTML element by its id?",
        options: [
            "document.query", "getElementById", "selectElement", "findElementById"
        ],
        correct: 1
    },
    {
        question: "Which HTML tag is used to create order list?",
        options: [ "<ul>", "<li>", "<ol>", "<dl>" ],
        correct: 2
    }
];


//Javascript Initialisation


const answerElm = document.querySelectorAll(".answer");
const [questionElm, option1, option2, option3, option4] =
document.querySelectorAll(
    "#question, #option1, #option2, #option3, #option4"
);
const submitBtn = document.querySelector("#submit");


let currentQuiz = 0;
let score = 0;

//Step 3: Load Quiz Function

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(question);

    questionElm.innerText = question;

    options.forEach( 
        (curOption,index) =>(window[`option${index+1}`].innerText = curOption)
    );
};

loadQuiz();

//Step 4: Get selected answer function on button click


const deselectAnswer = () => {
    answerElm.forEach((curElm) => curElm.checked = false );
};


const getSelectedOption = () => {
    let ans_index;
    answerElm.forEach((curOption, index) => {
        if(curOption.checked){
            ans_index = index;
        }
    });
    return ans_index;
};
var scoreDisplayed = false; // Set this dynamically based on your logic
submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score + 1;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length)
    {
        deselectAnswer();
        loadQuiz();
    }
    else{
        const quizSection = document.getElementsByClassName("quiz-section")[0];
        quizSection.classList.add("transparent");
        quiz.innerHTML = `
        <div class="result">
        <h2> Your score: ${score}/${quizData.length} correct Answers </h2>
        <p> congratulations on completing the quiz</p>
        </div>
        `;

        scoreDisplayed = true;
    }
});


// Assuming you have a variable 'scoreDisplayed' indicating whether the score is displayed


// Add a class to the body when the score is displayed
if (scoreDisplayed == true) {
    document.body.classList.add('score-displayed');
}



