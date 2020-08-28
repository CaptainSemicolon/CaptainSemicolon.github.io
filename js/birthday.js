var hints = [
    {id:0,title:"Step 00: Project Birthday",text:"Hello Audrey!<br>What follows will be what I like to call Project Birthday.<br>It took a while to set up and hopefully it will be as enjoyable to play as it was to create.<br>Without anymore waiting, enjoy the game.",image:"../images/balloon-background.jpg"},
    {id:1,title:"Step 01: Introduction",text:"Hello everyone!<br>Right now in Vaudreuil it is " + moment().format('h:mm a') + ".<br>Looks like we have a special announcement! Happy birthday Audrey!<br>To celebrate, some villagers have got you gifts... although they hid them. Ah! Perhaps a bit of treasure hunting... Let's make sure you are HOME before we begin. First, click the localization button and the next step should light up.",image:"../images/isabellemain.jpg"},
    {id:2,title:"Step 02: Introduction",text:"Good! It all works!<br>Nook phones aren't always reliable...<br>Anyway! Like I was saying, some villagers got you gifts but hid them, let's see if you can find them. Click the 'Next Step' button when you are ready to find the first gift.",image:"../images/isabellemain.jpg"},
    {id:3,title:"Step 03: Bunnie's Gift",text:"Happy birthday Audrey!<br>I got you a great gift, but you'll have to work a bit to find out where I put it. I have a clue for you, tap my picture to reveal it!<br>Once you know where to go just head there, the next step will unlock once you know the right place!",image:"../images/NH-Bunnie_poster.png"},
    {id:4,title:"Step 04: Bunnie's Gift",text:"Hmmm... Maybe that was TOO easy? Well while we are here we might as well grab something to eat. I know there is ONE thing you just loooove from this place.<br>The next hint will come from your order, more specifically from the iced coffee you will order for Steve.<br>The password for the next step is the last word in the recycling warning on the cup.",image:"../images/NH-Bunnie_poster.png"},
    {id:5,title:"Step 05: Bunnie's Gift",text:"Good Job! Enjoy the food!<br>Now about that gift... let's head to where I hid it. Did you know my favorite activity is swimming? I wonder where I could do that? I would go there and then click the localization button!", image:"../images/NH-Bunnie_poster.png"},
    {id:6,title:"Step 06: Bunnie's Gift",text:"Ha! You found me!<br>Well ok that's enough running around for now. I put your gift inside the pool shed. Hopefully you enjoy it!<br>I'll see you soon on Boileau", image:"../images/NH-Bunnie_poster.png"},
    {id:7,title:"Step 07: Tom Nook's Gift",text:"*RING RING*<br>*RING RING*<br>Hello? Hello hello! How are you today Audrey?<br>Isabelle has told me your already left for the day? I completely forgot to give you your gift back at home! Please come back and get it as soon as possible!!<br>*CLICK*", image:"../images/tomnook.jpg"},
    {id:8,title:"Step 08: Tom Nook's Gift",text:"Oh good you made it!<br>I have a special gift for you, now where did I leave it...<br>Ah yes! I put it in the most logical place I could think of! The crate with my favorite color, blue. And it even has the same number as the amount little workers I have.", image:"../images/tomnook.jpg"},
    {id:9,title:"Step 09: Tom Nook's Gift",text:"Good work locating it!<br>Now for the fun part, let's see if you can use it! It'll be important for later to have something to stay hydrated. Once you have made the beverage a password will be given to you by Steve to keep going.", image:"../images/tomnook.jpg"},
    {id:10,title:"Step 10: Tom Nook's Gift",text:"Looks yummy! Can't wait for it to be ready.<br>Now I think another villager wanted to have a chat with you.", image:"../images/tomnook.jpg"},
    {id:11,title:"Step 11: Ellie's Gift",text:"Hi Audrey! Good to see you<br>I got you a little surprise since it's your birthday!<br>I hope you will enjoy it, I just looove being comfy.<br>Oh yeah! I couldnt get it myself so I had it delivered. I think the delivery got messed up though it ended up at the wrong place. Tap my picture to reveal where it went.", image:"../images/NH-Ellie_poster.png"},
    {id:12,title:"Step 12: Ellie's Gift",text:"Whew! They really got the delivery location wrong... Well hopefully you can figure it out from here. The people living there are quite nice, They helped me hide the gift!", image:"../images/NH-Ellie_poster.png"},
    {id:13,title:"Step 13: Ellie's Gift",text:"I hope you enjoy yours just as much as I enjoy mine. Especially with winter approaching...<br>Have a wonderful day Audrey!", image:"../images/NH-Ellie_poster.png"},
    {id:14,title:"Step 14: Goldie's Gift",text:"Hello Audrey! Happy to see you here. Can't believe it's already your birthday!<br>Of course I had to get something special for you!<br>*brrrr*<br>Sorry, my stomach is growling. I am starting to get really hungry!What do you say we head back home and get ready for lunch?<br>Once you get home I'll tell you where your gift is!", image:"../images/NH-Goldie_poster.png"},
    {id:15,title:"Step 15: Goldie's Gift",text:"Just in time! I am starting to starve!<br>Oh right! I had gotten you a gift. You know my parents always hid mine in their closet? So that's what I did! I picked the closet you were the least likely to open and stuck it in there!", image:"../images/NH-Goldie_poster.png"},
    {id:16,title:"Step 16: Goldie's Gift",text:"Well that was quick!<br>Good now let's see about getting some food. I heard the grapefruit wine is quite tasty here...<br>After lunch Steve will give you a password to continue your adventure!", image:"../images/NH-Goldie_poster.png"},
    {id:17,title:"Step 17: Dizzy's Gift",text:"Wha-<br>Already my turn? You are way to quick Audrey I still need some time to prepare my big surprise! Come back after 5pm and I can give you your hint.<br>In the meanwhile enjoy some time with Steve and relax a bit, you worked hard.<br>Oh no... So early...<br>I have to hurry...", image:"../images/NH-Dizzy_poster.png"},
    {id:18,title:"Step 18: Dizzy's Gift",text:"Ok! All ready to go!<br>So for this gift you will need to dress up a bit. Make sure you look presentable because we are going OUT!<br>Not out out, but you know.", image:"../images/NH-Dizzy_poster.png"},
    {id:19,title:"Step 19: Dizzy's Gift",text:"Looking great!<br>So I got you a few gifts actually. The first is a reservation I made at 6pm for you and Steve and as for the rest you will have to see! The hint on where to go will appear by tapping my picture.<br>Good Luck!", image:"../images/NH-Dizzy_poster.png"},
    {id:20,title:"Step 20: Goodbye's",text:"And here we are! Well that's it for us today Audrey! Hopefully you enjoyed this and you will enjoy what I got you, just say your name at the counter ok?<br>Otherwise enjoy your night!<br>Happy birthday Audrey!", image:"../images/NH-Dizzy_poster.png"},
    {id:21,title:"Step 21: Goodbye's",text:"Happy birthday Audrey!", image:"../images/NH-Goldie_poster.png"},
    {id:22,title:"Step 22: Goodbye's",text:"Happy birthday Audrey!", image:"../images/NH-Ellie_poster.png"},
    {id:23,title:"Step 23: Goodbye's",text:"Happy birthday Audrey!<br>Maybe we can do something similar next year?", image:"../images/NH-Bunnie_poster.png"}
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
    $("#clue-title").html(hints[page].title);
    $("#clue-picture").attr("src", hints[page].image);
    typewriter(hints[page].text);
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
    $(".clue-input").show();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getNextPage(){
    var page = parseInt((window.location.pathname).match(/(\d+)/)[0]) + 1;
    if(page < 10)
        location.href='step-0' + page + '.html';
    else
        location.href='step-' + page + '.html';
}