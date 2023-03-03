const optionsEl = $("#optionContainer input")
const optionBtn = $("#boxOption button");
const labelEls= document.querySelectorAll("#optionContainer label")
const questionEl = $("#question")
const submitBtn = $("#submitBtn")
/*-------------------------------*/
/*question Section* */
/* question array of objects */
function QuestionObj(question,answer,options,choosedOption){
    this.question  = question,
    this.answer = answer,
    this.options = options,
    this.choosed = choosedOption 
}
let questionArray = [new QuestionObj("When is International Mother Language Day celebrated?","21 February" , ["21 February" , "21 January" , "24 February" , "22 January"],null), new QuestionObj("Name the father of the Indian Constitution?","Dr. B. R. Ambedkar" , ["Dr. B. R. Ambedkar" , "A. P. J. Abdul Kalam" , "Vallabhbhai Patel" , "Jawaharlal Nehru"],null ), new QuestionObj("Name the national bird of the United States of America?","Bald Eagle", ["Bald Eagle","Peacock","Penguin","Dove"],null), new QuestionObj("Which means of transport is considered the fastest?","Air Transport", ["Air Transport","Rail Transport","Sea Transport", "Road TransPort"],null),new QuestionObj("When is International Mother Language Day celebrated?","21 February" , ["21 February" , "21 January" , "24 February" , "22 January"],null), new QuestionObj("Name the father of the Indian Constitution?","Dr. B. R. Ambedkar" , ["Dr. B. R. Ambedkar" , "A. P. J. Abdul Kalam" , "Vallabhbhai Patel" , "Jawaharlal Nehru"],null ), new QuestionObj("Name the national bird of the United States of America?","Bald Eagle", ["Bald Eagle","Peacock","Penguin","Dove"],null), new QuestionObj("Which means of transport is considered the fastest?","Air Transport", ["Air Transport","Rail Transport","Sea Transport", "Road TransPort"],null)]
console.log(questionArray.length)
$("#totalQuestions").text(questionArray.length)
let questioncount = 0;
let isSubmit = false
/***************------------------------------------------- */


/*class for buttons*/
const boilerClasses = "me-1 btn btn-outline-light fw-bold p-0 "
const selectedBtn = "btn-selected"
// add event listener to buttons
for (i=0 ;i < optionBtn.length; i++){
    optionBtn[i].addEventListener("click",function(){
        addClicked(this.value)
    })
}
//add eventlistener to input radios
optionsEl.on("click",function(){
    addClicked(this.value)
})

//*Add classess to clicked button*/ */
function addClicked(n){
    //n = 10 calling with 10 will reset it        
    optionsEl[n].checked  = true ;
    for (i=0 ; i<4 ; i++){
        optionBtn[i].classList = (i==n)? boilerClasses + selectedBtn : boilerClasses;
    }
}
function unChecked(){
    for (i=0 ;i < 4 ;i++){
        optionsEl[i].checked = false;
        optionBtn[i].classList = boilerClasses;
    }
}
//* function to check which is checked* */
function whichIsChecked(){
    for (i=0 ; i< 4 ; i++){
        if (optionsEl[i].checked){
            return i+1 ;
        }
    }
    return 0;
}
/**----------------------------------------------------- */


/**randon functions */
function searchNum(arr,n){
    for (i = 0 ; i < arr.length ; i++){
        if (arr[i]== n)return 0;
    }
    return 1;
}
function getRandom(limit){
    arr = []
    for ( i = 0 ; i < limit ; i++){
        random = Math.floor(Math.random()* limit);
       if (searchNum(arr,random)){
            arr.push(random) ;
       }
       else{
        i--;
       }
    }
    return arr;
}



/**----------------------------------------------------------------------------------------------------------------------------- */
/* submit button */ 
submitBtn.on("click",function(){
    nextElement()
})
/*Previous Button*/
$("#next").on("click",function(){
    nextElement()
})
function nextElement(){
    isSubmit = true;
    main(whichIsChecked())
    unChecked()
}
/*------------------------------------------------------------------------------------------------------------------------------*/
/*Setting Questions and Options and Checking Answers*/ 
/*Get Set questions*/ 
function getQuestion(n){
    //console.log(answerCheck(questionArray[n].answer , questionArray[n].options[0]))
    $("#questionCount").text(n+1)
    questionEl.text(questionArray[n].question)
    arr = getRandom(4);
    for (i=0;i<4 ; i++){
        labelEls[i].textContent = questionArray[n].options[arr[i]];
    }
}
/** Checking two Options and return true or false */
function answerCheck(NeedAnswer , enteredAnswer ){
    if (NeedAnswer == enteredAnswer) return true
    return false;
}
/*------------------------------------------------------------------------------------------------------------------------------*/
/**Main Section - updating Questions and checking Answer "THE MASTER SECTION" */
main(-1)
let isEntered = true
//console.log(labelEls[0].textContent)
function main(options){
    if (questionArray.length-1 == questioncount && isEntered){ 
        isEntered = false
        displayResult()
        isSubmit = false
        alert("Restart");
        questioncount = 0;
        getQuestion(questioncount)
    }
    getQuestion(questioncount)
    if (options > 0){
     console.log(answerCheck(labelEls[options-1].textContent, questionArray[questioncount].answer ))
        questionArray[questioncount].choosed = labelEls[options-1].textContent;
    }
    else if (options == -1){}
    else{
        alert("press any options");
        isSubmit = false
    }
    if (isSubmit)getQuestion(++questioncount)
}
/**---------------------------------------------------------------------------------------------------------------------------- */
/**Display the results  */
function displayResult(){
    for (i=0 ; i < questionArray.length ; i++){
        console.log(i+1 +" Question : " + questionArray[i].question)
        console.log("Correct Answer " + questionArray[i].answer )
        console.log("Choosed Answer : " + questionArray[i].choosed)
        console.log(answerCheck( questionArray[i].choosed, questionArray[i].answer ))
 
    }
}
/**=------------------------------------------------------------------------------------------------------------------------------ */
