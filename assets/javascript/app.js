$(document).ready(function () {

    var quizQuestions = [
{
    question: "Which is NOT one of the phrases that Darryl teaches Michael?",
    choices:["Dinkin' flicka", "Fleece it out", "Pippity poppity give me the zoppity", "Threat level midnight"],
    correctIndex:3,
    gif:"assets/images/dinkinflicka.gif"
}, 
{
    question:"What makes a mess when it is spilled on the office floor?",
    choices:["Phyllis' perfume, made from real pine", "Kevin's famous chili", "Angela's cat's litter box", "Dwight's homemade manure"],
    correctIndex:1,
    gif:"assets/images/chili.gif"
}, 
{
    question:"To where does Toby briefly move at the end of Season 4?",
    choices:["Scottsdale, AZ", "Sandals, Jamaica", "Costa Rica", "Niagara Falls"],
    correctIndex:2,
    gif:"assets/images/costarica.gif"
}, 
{
    question:"Which of the following was never awarded at the Dundies?",
    choices:["Worst Martial Artist Award", "Doobie Doobie Pothead Stoner of the Year Award", "Don't Go in There After Me Award", "Hottest in the Office"],
    correctIndex:0,
    gif:"assets/images/dundies.gif"
}, 
{
    question:"What was one of the books chosen by Dwight during the game of Desert Island in the episode 'The Fire'?",
    choices:["Lord of the Rings", "Harry Potter and the Prisoner of Azkaban", "The Bible", "The Da Vinci Code"],
    correctIndex:1,
    gif:"assets/images/desertisland.gif"
}, 
{
    question:"Which of the following actors/characters is credited with the most appearances on the show?",
    choices:["Andy Buckley / David Wallace", "David Denman / Roy Anderson", "Rashida Jones / Karen Filippelli", "James Spader / Robert California"],
    correctIndex:0,
    gif:"assets/images/davidwallace.gif"
}, 
{
    question:"Which is NOT a character created by Michael Scott?",
    choices:["Blind Guy McSqueezy", "Dr. Crentist the Dentist", "Prison Mike", "Orville Tootenbacher"],
    correctIndex:1,
    gif:"assets/images/prisonmike.gif"
}, 
{
    question:"Who gifted Jim the used shirt for Secret Santa?",
    choices:["Creed Bratton", "Dwight Schrute", "Meredith Palmer", "Toby Flenderson"],
    correctIndex:0,
    gif:"assets/images/christmas.gif"
}, 
{
    question:"What is the name of Andy's college a capella group?",
    choices:["The Nard Dogs", "Cornell's Bells", "Here Comes Treble", "Rockin' Robins"],
    correctIndex:2,
    gif:"assets/images/acapella.gif"
}, 
{
    question: "Who has never held a position as Manager at Dunder Mifflin?",
    choices:["Nellie Bertram", "Creed Bratton", "Deangelo Vickers", "Clark Green"],
    correctIndex:3,
    gif:"assets/images/clark.gif"
}
    ];


var correct=0;
var incorrect=0;
var timeleft=200;
var userChoice="";
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
   
}
function displayQuestions(){
    for (var i = 0; i<quizQuestions.length; i++){
        var questionHolder = $("<p class='quest'>").text(quizQuestions[i].question);
        questionHolder.append($("<br><br>"));
        for (var j=0; j<4; j++){
        questionHolder.append($("<button class='ans'>").text(quizQuestions[i].choices[j]).attr({"data-index": j }).addClass("choice"));
        }
        
        $("#textbody").append(questionHolder);
    }
    }
function stop(){
    clearInterval(intervalId);
}
      
$("#tryagain").hide();


var decrement = function(){
    timeleft--;
    $("#timer").html("Time left: " + timeleft);
    if (timeleft ===0){
        stop();
        incorrect++;
        $("#textbody").text("Oh no! You ran out of time!");
        return;
        $("#tryagain").show();
    }
  }

    $(".choice").click(function(){
        userChoice = $(this).data("index");
       // console.log(userChoice);
        
        // if userChoice != quizQuestion[i].correctIndex, incorrect ++, else correct++
        //need to make buttons functional?
    });


    $("#startbutton").click(function(){
    $("#startbutton").hide();
    run();
    displayQuestions();
    
     
    });
});
