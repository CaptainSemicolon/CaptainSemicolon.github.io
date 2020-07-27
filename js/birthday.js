var hints = [
    {id:1,title:"Step 01: Introduction",text:"Welcome!<br>To access the next page, you must be home, click the localization button below to verify your location. If you are home, it will unlock the next step!<br>Good luck!",image:"../images/clue.png"}
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