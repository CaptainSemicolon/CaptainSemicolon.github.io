var hints = [
    {id:1,title:"Step 01: Introduction",text:"Hello everyone!<br>Right now in Vaudreuil it is " + moment().format('h:mm a') + ".<br>Looks like we have a special announcement! Happy birthday Audrey!<br>To celebrate, some villagers have got you gifts... although they hid them. Ah! Perhaps a bit of treasure hunting... Let's make sure you are HOME before we begin. First, click the localization button and the next step should light up.",image:"../images/isabellemain.jpg"},
    {id:2,title:"Step 02: Introduction",text:"Good! It all works!<br>Nook phones aren't always reliable...<br>Anyway! Like I was saying, some villagers got you gifts but hid them, let's see if you can find them. Click the 'Next Step' button when you are ready to find the first gift.",image:"../images/isabellemain.jpg"},
    {id:3,title:"Step 03: Bunnie's Gift",text:"Happy birthday Audrey!<br>I got you a great gift, but you'll have to work a bit to find ou where I put it. I have a clue for you, tap my picture to reveal it!",image:"../images/NH-Bunnie_poster.png"}
]
var positions = [
    {name:"Home",latitude:45.335,longitude:-73.973},
    {name:"Karianne's",latitude:45.371,longitude:-74.024},
    {name:"McDonalds Dorion",latitude:45.379,longitude:-74.017},
    {name:"Tim Hortons Dorion",latitude:45.378,longitude:-74.019},
    {name:"Audrey's House",latitude:45.390,longitude:-74.034}
]

$( document ).ready(function() {
    initializePage();
});

function initializePage(){
    var page = parseInt((window.location.pathname).match(/(\d+)/)[0]);
    $("#clue-title").html(hints[page-1].title);
    $("#clue-picture").attr("src", hints[page-1].image);
    typewriter(hints[page-1].text);
}

async function typewriter(message){
    for(var i = 0; i != message.length + 1; i++){
        if(message.charAt(i) != '<' && message.charAt(i+1) != 'b' && message.charAt(i+2) != 'r' && message.charAt(i+3) != '>'){
            $('#clue-text').html(message.substring(0, i));
            await sleep(50);
        }
        else
            i = i+1;
    }

    $(".next-btn").show();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}